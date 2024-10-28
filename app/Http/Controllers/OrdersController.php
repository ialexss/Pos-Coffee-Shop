<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use App\Models\OrderDetail; // Importa el modelo aquí
use Carbon\Carbon;

use Inertia\Inertia;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with(['typePayment', 'status'])->get();
        return Inertia::render('orders/Orders', [
            'orders' => $orders,
        ]);
    }

    public function reportByDate(Request $request)
    {
        // Validar las fechas si están presentes; en caso contrario, establecer valores predeterminados
        $request->validate([
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
        ]);

        // Si no se especifica `start_date`, usar la fecha de hoy
        $startDate = $request->start_date 
            ? Carbon::parse($request->start_date)->startOfDay() 
            : Carbon::today()->startOfDay();

        // Si no se especifica `end_date`, usar la fecha de hoy
        $endDate = $request->end_date 
            ? Carbon::parse($request->end_date)->endOfDay() 
            : Carbon::today()->endOfDay();

        // Consultar pedidos entre las fechas establecidas
        $orders = Order::whereBetween('created_at', [$startDate, $endDate])
                        ->with(['details'])
                        ->get();

        return Inertia::render('order/Report', [
            'orders' => $orders,
            'startDate' => $startDate->toDateString(),
            'endDate' => $endDate->toDateString(),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $products = Product::with('category')->get(); // Obtén la lista de productos
        return Inertia::render('order/Order', [
            'products' => $products, // Envía los productos a la vista
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'client_name' => 'required|string|max:255',
                'subtotal' => 'required|numeric',
                'order_details' => 'required|array',
                'order_details.*.product_id' => 'required|exists:products,id',
                'order_details.*.quantity' => 'required|integer|min:1',
            ]);
    
            $order = Order::create([
                'client_name' => $request->client_name,
                'subtotal' => $request->subtotal,
                'type_payment_id' => 1,
                'status_id' => 1,
            ]);
    
            foreach ($request->order_details as $detail) {
                OrderDetail::create([
                    'order_id' => $order->id,
                    'product_id' => $detail['product_id'],
                    'quantity' => $detail['quantity'],
                ]);
            }
    
            return redirect()->route('orders.ticket', ['order' => $order->id]);
        } catch (\Exception $e) {
            // Log error for debugging
            \Log::error('Error creating order: ' . $e->getMessage());
            return response()->json(['error' => 'Error creating order.'], 500);
        }
    }

    public function showTicket($id)
    {
        $order = Order::with('details.product')->findOrFail($id); // Ensure 'details' is the method name
        return Inertia::render('order/Ticket', [
            'order' => $order,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::with(['typePayment', 'status'])->findOrFail($id);
        return Inertia::render('orders/OrderDetail', [
            'order' => $order,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $order = Order::with(['typePayment', 'status'])->findOrFail($id);
        return Inertia::render('orders/EditOrder', [
            'order' => $order,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = Order::findOrFail($id);

        $request->validate([
            'client_name' => 'sometimes|required|string|max:255',
            'subtotal' => 'sometimes|required|numeric',
            'type_payment_id' => 'sometimes|required|exists:type_payments,id',
            'status_id' => 'sometimes|required|exists:status,id',
            'user_id' => 'sometimes|required|exists:users,id',
        ]);

        $order->update($request->all());

        return redirect()->route('orders.index')->with('success', 'Order updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::findOrFail($id);
        $order->delete();

        return redirect()->route('orders.index')->with('success', 'Order deleted successfully');
    }
}
