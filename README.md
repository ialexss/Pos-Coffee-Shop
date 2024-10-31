# Proyecto Final Tecnología Web 2

# ☕ Cafetería Web App

# Integrantes 👥
- Jonathan Kenny Arias Fernandez
- Alexander Sanchez Salces
- Jhonny Herrera Baldivieso
- Harold Alexis Vargas Vargas

---

## 🌟 Introducción
**Cafetería Web App** es una plataforma desarrollada para la gestión integral de pedidos en una cafetería. Los clientes pueden realizar pedidos personalizados, mientras que el personal puede administrar productos, categorías y la configuración de la cafetería de forma sencilla. La aplicación está construida con **PHP (Laravel), React**, y utiliza **Laragon** como entorno de desarrollo. La base de datos es gestionada con **HeidiSQL**.

### 🎯 Objetivo
Optimizar la eficiencia en la gestión de pedidos, productos, y categorías de una cafetería, permitiendo un proceso de venta y administración más fluido y ordenado.

#### 📚 Marco Teórico
Este proyecto se basa en la implementación de tecnologías modernas de desarrollo web y prácticas de diseño de base de datos eficientes para permitir una experiencia de usuario intuitiva y un backend robusto. Los principales componentes incluyen:
- **PHP y Laravel** para una estructura MVC sólida y funcional.
- **React** para una interfaz de usuario dinámica y rápida.
- **Laragon** como entorno de desarrollo local confiable.
- **HeidiSQL** para la administración de la base de datos de forma visual y estructurada.

##### ⚙️ Metodología
El proyecto fue desarrollado siguiendo prácticas ágiles, permitiendo iteraciones rápidas y retroalimentación constante. Cada módulo fue diseñado para cumplir con funcionalidades específicas, asegurando una integración efectiva de los elementos del sistema.

###### 🧩 Modelado o Sistematización
La estructura de la base de datos incluye las siguientes tablas principales:

###### Diagrama de Tablas 📊
![Diagrama BD](images//logo/diagrama-cafeteria.jpg)


+------------------+        +------------------+       +------------------+
|   Enterprises    |        |     Categories   |       |     Products     |
+------------------+        +------------------+       +------------------+
| id (PK)          |        | id (PK)          |       | id (PK)          |
| name             |        | name             |       | name             |
| logo             |        | description      |       | description      |
| created_at       |        | created_at       |       | price            |
| updated_at       |        | updated_at       |       | picture          |
| deleted_at       |        | deleted_at       |       | category_id (FK) |
+------------------+        +------------------+       +------------------+

+------------------+        +------------------+       +------------------+
|    Orders        |        |   Order_Details  |       |   Type_Payments  |
+------------------+        +------------------+       +------------------+
| id (PK)          |        | id (PK)          |       | id (PK)          |
| client_name      |        | order_id (FK)    |       | name             |
| subtotal         |        | product_id (FK)  |       | created_at       |
| created_at       |        | created_at       |       | updated_at       |
| updated_at       |        | updated_at       |       | deleted_at       |
| type_payment_id  |        | deleted_at       |       +------------------+
| status_id (FK)   |        +------------------+
| user_id (FK)     |
+------------------+

+------------------+        
|     Status       |        
+------------------+        
| id (PK)          |        
| status           |        
| created_at       |        
| updated_at       |        
| deleted_at       |        
+------------------+

###### 📑 Características Principales 
**🔒 Login**: Acceso seguro para usuarios autorizados.
**📋 Gestión de Pedidos**: Permite agregar, actualizar o eliminar productos en un pedido.
**🛠️ Administración de Productos y Categorías**: Modificar o agregar productos y categorías en tiempo real.
**🧾 Comprobante de Pedido**: Generación automática de comprobante, listo para imprimir.
**🏢 Configuración de la Cafetería**: Personalización de nombre y logo de la cafetería.

###### 📊 Funcionalidades del Sistema
**Módulo de Pedidos**: Los clientes pueden seleccionar productos y añadirlos a su orden. Los pedidos son editables y pueden aumentarse o disminuirse antes de confirmarse.
**Módulo de Productos**: El personal puede agregar, editar o eliminar productos.
**Módulo de Categorías**: Organización de productos en categorías específicas para una mejor navegación.
**Reportes de Ventas**: Visualización detallada de las ventas, con opción de generar comprobantes.
**Personalización de la Cafetería**: Los administradores pueden cambiar el logo y nombre de la cafetería desde el sistema.

###### 📑 Conclusiones
La Cafetería Web App mejora la eficiencia operativa, permite una administración sencilla y un control efectivo de los pedidos y productos. Este sistema representa un avance en la digitalización de cafeterías, permitiendo al personal centrarse en ofrecer un mejor servicio.

###### 💻 Tecnologías Utilizadas
- **Backend**: PHP (Laravel)
- **Frontend**: React
- **Base de Datos**: HeidiSQL
- **Entorno de Desarrollo**: Laragon

###### 📚 Bibliografia
- https://laravel.com/docs/11.x/readme
- https://react.dev/learn
- https://inertiajs.com/
- https://laravel.com/docs/11.x/starter-kits#introduction

###### Capturas

![image](https://github.com/user-attachments/assets/f9d6ef13-d1f5-4421-82d2-af6930f7c112)

![image](https://github.com/user-attachments/assets/aa426830-a5a4-4f87-852c-1a6d29512606)

![image](https://github.com/user-attachments/assets/88388f31-2131-466d-a586-7bd0fdb86bc0)

###### Contribución

Si deseas contribuir a este proyecto, siéntete libre de realizar un fork del repositorio y enviar un pull request con tus mejoras.

###### Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

