

# Proyecto Final Tecnología Web 2

## Integrantes
- Jonathan Kenny Arias Fernandez
- Alexander Sanchez Salces
- Jhonny Herrera Baldivieso
- Harold Alexis Vargas Vargas

## Descripción del Proyecto

Este proyecto es una aplicación web para cafeterías, diseñada para gestionar pedidos, menús y categorias de manera eficiente. Utiliza una combinación de tecnologías modernas para proporcionar una experiencia de usuario fluida y atractiva.

## Tecnologías Utilizadas

- **PHP**: Lenguaje de programación del lado del servidor utilizado para la lógica de negocio.
- **Laravel**: Framework PHP que proporciona una estructura robusta y herramientas para desarrollar aplicaciones web.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.
- **JavaScript**: Lenguaje de programación utilizado para implementar la lógica del lado del cliente.
- **Tailwind CSS**: Framework CSS que permite diseñar de manera rápida y con estilos modernos.
- **Laragon**: Entorno de desarrollo local que facilita la instalación y configuración de proyectos PHP.
- **Base de Datos**: Se utilizará MySQL para almacenar la información de los usuarios, productos y pedidos.

## Características

- Registro y autenticación de usuarios.
- Gestión de menús y productos.
- Actualizacion de productos y categorias.
- Interfaz intuitiva y responsiva.

## Base de Datos

La base de datos está diseñada para manejar las siguientes entidades:

- **enterprises**: Información sobre las cafeterías, incluyendo su nombre y logotipo.
- **categories**: Categorías de productos, cada una con un nombre y una descripción opcional.
- **type_payments**: Métodos de pago disponibles, que incluyen el nombre del tipo de pago.
- **status**: Estados de los pedidos, que almacenan información sobre el estado actual del pedido.
- **products**: Detalles de los productos ofrecidos, incluyendo nombre, descripción, precio y una imagen, así como una relación con su categoría.
- **orders**: Registro de pedidos realizados por los clientes, que incluye el nombre del cliente, subtotal, tipo de pago y estado del pedido, así como una relación con el usuario que realizó el pedido.
- **order_details**: Detalles de cada pedido, que vinculan los productos con los pedidos realizados.

La estructura de la base de datos permite una gestión eficiente de la información, asegurando que todas las relaciones entre productos, pedidos y categorías estén correctamente definidas para facilitar la administración de la aplicación.


## Contribución

Si deseas contribuir a este proyecto, siéntete libre de realizar un fork del repositorio y enviar un pull request con tus mejoras.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.


