# Ejercicio 1 NoSQL: Caso de uso.

## Descripción general:
### Un sistema de gestión de artículos y tickets en un supermercado es una herramienta esencial diseñada para supervisar y optimizar eficientemente todas las operaciones relacionadas con la venta de productos y la atención al cliente. Su propósito principal es mejorar la experiencia tanto de los empleados como de los clientes, así como facilitar la administración de inventario y la generación de informes. La funcionalidad general de este sistema incluye:

1. **Registro de artículos:** Permite ingresar y mantener un catálogo completo de productos disponibles en el supermercado, incluyendo información como nombre, código, precio, descripción y ubicación en la tienda.

2. **Escaneo de productos:** Facilita el proceso de compra al emplear códigos de barras o etiquetas RFID para identificar y registrar automáticamente los productos que un cliente desea comprar.

3. **Gestión de precios:** Permite actualizar y mantener los precios de los productos de manera eficiente, incluyendo la aplicación de descuentos y promociones.

4. **Control de inventario:** Lleva un registro en tiempo real de la cantidad de productos disponibles, lo que ayuda a prevenir la falta de existencias o el exceso de inventario.

5. **Procesamiento de pagos:** Facilita la facturación y el pago de los productos mediante diversos métodos, como efectivo, tarjetas de crédito o aplicaciones de pago móvil.

6. **Generación de tickets:** Produce recibos detallados para los clientes que muestran los productos comprados, sus precios y el total a pagar.

7. **Informes y análisis:** Ofrece herramientas para generar informes sobre las ventas, el inventario y otros aspectos clave del negocio, lo que ayuda en la toma de decisiones y la planificación estratégica.

8. **Atención al cliente:** Facilita la gestión de devoluciones, reembolsos y consultas de los clientes, mejorando la satisfacción del cliente.

En resumen, un sistema de gestión de artículos y tickets en un supermercado tiene como objetivo principal agilizar y mejorar la gestión de ventas, inventario y atención al cliente, lo que a su vez contribuye a la eficiencia operativa y la satisfacción tanto de empleados como de clientes.

## Requisitos:
### A continuación, se presenta una lista de requisitos funcionales y no funcionales para un sistema de gestión de artículos y tickets en un supermercado:

**Requisitos Funcionales:**

1. **Registro de Artículos:**
        - El sistema debe permitir la creación de registros para cada artículo en venta, incluyendo información como nombre, código, descripción, precio y cantidad en existencia.

2. **Operaciones CRUD (Crear, Leer, Actualizar, Eliminar):**
    - Los usuarios autorizados deben poder agregar, ver, modificar y eliminar registros de artículos y tickets.

3. **Gestión de Tickets:**
- El sistema debe permitir la creación de tickets de compra, donde se pueden agregar múltiples artículos.
- Debe ser posible visualizar el contenido de un ticket y sus detalles.

4. **Cálculo del Subtotal, IVA y Total:**
- El sistema debe calcular automáticamente el subtotal (suma de los precios de los artículos), el IVA (Impuesto al Valor Agregado) y el total a pagar en un ticket.

5. **Actualización de Existencias:**
- Cuando se registre una venta en un ticket, el sistema debe actualizar automáticamente las existencias de los artículos vendidos, reduciendo la cantidad disponible.

6. **Métodos de Pago:**
- Debe permitir registrar diferentes métodos de pago, como efectivo, tarjetas de crédito o débito, cheques, etc.
- Debe realizar la validación de pagos y calcular el cambio cuando corresponda.

7. **Generación de Tickets y Facturas:**
- Debe generar tickets de compra con detalles de los artículos, precios y totales.
- Debe ofrecer la opción de generar facturas para ventas a empresas o clientes que lo requieran.

**Requisitos No Funcionales:**

1. **Seguridad:**
- El sistema debe garantizar la seguridad de los datos confidenciales, como los detalles de los pagos.
- Debe tener mecanismos de autenticación y autorización para proteger el acceso no autorizado.

2. **Rendimiento:**
- Debe ser capaz de manejar un alto volumen de transacciones simultáneas de manera eficiente.
- Los cálculos de subtotal, IVA y total deben ser rápidos y precisos.

3. **Disponibilidad:**
- Debe estar disponible durante las horas de operación del supermercado, minimizando el tiempo de inactividad planificado.

4. **Escalabilidad:**
- Debe poder adaptarse a un crecimiento futuro del negocio sin comprometer el rendimiento.

5. **Interfaz de Usuario Intuitiva:**
- La interfaz de usuario debe ser fácil de usar y comprender para los empleados del supermercado, minimizando la curva de aprendizaje.

6. **Registro de Auditoría:**
- Debe llevar un registro de auditoría que registre las acciones realizadas por los usuarios autorizados, como modificaciones en el inventario o ventas.

7. **Cumplimiento Legal y Fiscal:**
- Debe cumplir con las regulaciones fiscales y legales locales relacionadas con la facturación y la gestión de inventario.

8. **Respaldo y Recuperación de Datos:**
- Debe realizar copias de seguridad regulares de los datos y permitir la recuperación en caso de pérdida de información.

Estos requisitos funcionales y no funcionales son esenciales para el desarrollo de un sistema de gestión de artículos y tickets efectivo y eficiente en un supermercado.

## Posibles mejoras y características futuras:

1. **Integración con E-commerce:**
   - Para adaptarse a las tendencias del mercado, se puede tener en consideración la integración del sistema con una plataforma de comercio electrónico. Esto permitiría a los clientes realizar compras en línea y recoger los productos en la tienda o incluso ofrecer entregas a domicilio.

2. **Programa de Fidelización:**
   - Agregar un programa de fidelización que recompense a los clientes frecuentes con descuentos o puntos por compras realizadas. Esto fomentaría la lealtad del cliente y aumentaría las ventas repetidas.

3. **Análisis de Datos Avanzado:**
   - Implementar análisis avanzados de datos para comprender mejor el comportamiento del cliente, las tendencias de compra y la gestión de inventario. Esto podría ayudar en la toma de decisiones estratégicas y la optimización de la oferta de productos.

4. **Módulo de Gestión de Proveedores:**
   - Agregar un módulo para gestionar relaciones con proveedores, incluyendo la gestión de pedidos, entregas y la actualización de precios de manera más eficiente.

5. **Mejoras en la Interfaz de Usuario:**
   - Continuar mejorando la interfaz de usuario para hacerla más intuitiva y amigable, lo que facilitaría la capacitación de nuevos empleados y reduciría los errores.

6. **Movilidad y Terminal Punto de Venta (TPV) Móvil:**
   - Implementar TPVs móviles para permitir la atención a clientes en diferentes áreas de la tienda, agilizando el proceso de compra.

7. **Optimización del Rendimiento:**
   - Realizar pruebas de rendimiento periódicas para garantizar que el sistema pueda manejar la carga de trabajo actual y futura. Esto podría incluir la optimización de consultas de base de datos y la adopción de tecnologías escalables.

8. **Seguridad Reforzada:**
   - Mejorar las medidas de seguridad, como la autenticación de dos factores para los usuarios autorizados y la implementación de un firewall de aplicaciones web para proteger contra ataques cibernéticos.

9. **Pruebas Automatizadas:**
   - Desarrollar y mantener un conjunto sólido de pruebas automatizadas para garantizar la calidad del software y detectar problemas de manera temprana durante el desarrollo.

10. **Soporte para Múltiples Idiomas y Monedas:**
    - Si el supermercado atiende a una clientela diversa, se puede considerar la posibilidad de agregar soporte para múltiples idiomas y monedas en el sistema.

11. **Cumplimiento Normativo:**
    - Mantenerse actualizado con las regulaciones fiscales y legales cambiantes y garantizar que el sistema cumpla con todos los requisitos locales y nacionales.

12. **Capacitación Continua del Personal:**
    - Proporcionar capacitación continua al personal para garantizar que estén al tanto de las nuevas funcionalidades y procesos implementados.

13. **Feedback de Clientes:**
    - Escuchar el feedback de los clientes y empleados para identificar áreas de mejora y ajustar el sistema en consecuencia.

14. **Sostenibilidad:**
    - Considerar la implementación de prácticas sostenibles, como la reducción de papel en los recibos o la gestión eficiente de residuos electrónicos.
