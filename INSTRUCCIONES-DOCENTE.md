# Archivos JS del proyecto "Periódico Estudiantil" — Guía para el docente

Estos 4 archivos van en la carpeta `js/` que se entrega a los estudiantes. **Ellos no los modifican.**
Tú los configuras **una sola vez** y se los das listos.

## 1. Qué hace cada archivo

| Archivo | Funciones que usa el estudiante | Qué devuelven |
|---|---|---|
| `articulos.js` | `guardarArticulo({titulo, imagen, contenido, autor?})` | el artículo guardado `{id, titulo, imagen, contenido, autor, fecha}` |
| | `obtenerArticulos()` | array de artículos, del más reciente al más antiguo |
| | `formatearFecha(fecha)` · `escaparHTML(texto)` | utilidades |
| `suscriptores.js` | `guardarSuscriptor({nombre, correo})` | `{id, nombre, correo, fecha}` — **lanza Error si el correo ya existe** |
| | `obtenerSuscriptores()` | array `[{id, nombre, correo, fecha}]` |
| `email.js` | `notificarSuscriptores(articulo)` | `{total, enviados, fallidos:[{correo, motivo}]}` |
| `modal.js` | `abrirModal(articulo)` · `cerrarModal()` | — (muestra/oculta añadiendo la clase `abierto` a `#modal`) |

Las funciones son `async`: el estudiante las usa con `await` dentro de `try/catch`. Todos los errores traen un mensaje en español pensado para mostrarse o leerse en la consola.

**Lo que NO hacen (queda como trabajo del estudiante, según el RFC):** validar los formularios, dibujar las tarjetas, escuchar los eventos y conectar el botón X del modal.

**Sobre el autor:** el RFC muestra el autor en tarjetas y modal, pero el formulario de publicación no lo pide. `guardarArticulo` acepta `autor` opcional y, si no llega, usa `"Redacción Estudiantil"` (constante `AUTOR_POR_DEFECTO` en `articulos.js`). Si prefieres que el formulario pida el autor, agrega ese campo al RFC y a la guía.

## 2. Líneas `<script>` que deben ir al final del `index.html`

Archivos normales (**sin** `type="module"`), para que el sitio funcione abriendo el HTML directamente, como exige el RFC. Orden obligatorio:

```html
<!-- 1) Librerías externas -->
<script src="https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore-compat.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4.4.1/dist/email.min.js"></script>

<!-- 2) Archivos del profesor (NO modificar) -->
<script src="js/articulos.js"></script>
<script src="js/suscriptores.js"></script>
<script src="js/email.js"></script>
<script src="js/modal.js"></script>

<!-- 3) Código del estudiante -->
<script> ... </script>
```

## 3. Configurar Firebase (una vez)

1. Entra a la [consola de Firebase](https://console.firebase.google.com) → **Agregar proyecto**.
2. **Compilación → Firestore Database → Crear base de datos** (elige una región y modo producción).
3. **Reglas** → pega esto y publica (permite leer y crear, no borrar ni editar):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /articulos/{id}     { allow read, create: if true; }
       match /suscriptores/{id}  { allow read, create: if true; }
     }
   }
   ```
4. **Configuración del proyecto (⚙️) → Tus apps → Web (`</>`)** → registra la app y copia el objeto `firebaseConfig`.
5. Pégalo en `FIREBASE_CONFIG` al inicio de `js/articulos.js`.
6. (Opcional) Para crear 3 artículos de prueba: abre el sitio, pulsa **F12 → Console** y escribe `docenteSembrarArticulos()` **una sola vez**.

> La `apiKey` de Firebase para web no es un secreto; la seguridad real la dan las reglas del paso 3.

## 4. Configurar EmailJS (una vez)

1. Crea una cuenta en [emailjs.com](https://www.emailjs.com) → **Email Services → Add New Service** (Gmail, Outlook, etc.).
2. **Email Templates → Create New Template**. En el campo **To Email** escribe `{{to_email}}` y usa estas variables en asunto/cuerpo:

   `{{to_name}}` · `{{periodico}}` · `{{titulo}}` · `{{autor}}` · `{{resumen}}` · `{{enlace}}`

   Ejemplo de cuerpo: *«Hola {{to_name}}, {{periodico}} publicó un nuevo artículo: {{titulo}} por {{autor}}. {{resumen}} Léelo aquí: {{enlace}}»*
3. Copia **Service ID**, **Template ID** y, en **Account → API keys**, la **Public Key**.
4. Pégalos en las constantes `EMAILJS_*` al inicio de `js/email.js` (y ajusta `NOMBRE_PERIODICO`).

## 5. Antes de entregar a los estudiantes

- **Prueba de punta a punta** con tus propias credenciales: publicar un artículo, recargar y verlo, suscribir un correo tuyo y comprobar que llega la notificación. Los archivos fueron probados con simulaciones de Firebase, EmailJS y del DOM (no contra servicios reales), así que esta prueba es indispensable.
- **Privacidad:** con estas reglas, cualquiera que conozca el proyecto puede leer la colección `suscriptores` (nombres y correos). Para un ejercicio de clase pide a los estudiantes que usen **correos de prueba** o ficticios, no datos reales de compañeros ni menores.
- **Límites:** el plan gratuito de EmailJS tiene un tope mensual de correos; con 20-30 estudiantes publicando y suscribiendo, el tope se agota rápido. Usa pocos suscriptores de prueba. Cuando termine la unidad, puedes cerrar la escritura cambiando `create: if true` por `create: if false` en las reglas.
- **Un solo proyecto compartido:** si toda la clase usa el mismo Firebase, verán los artículos de los demás. Si prefieres aislamiento, crea una colección por equipo cambiando `COLECCION_ARTICULOS` y `COLECCION_SUSCRIPTORES`, o un proyecto por equipo.

## 6. Convenciones que los archivos esperan del `index.html`

- Ids del modal: `modal`, `modal-imagen`, `modal-titulo`, `modal-autor`, `modal-fecha`, `modal-contenido` (y `modal-cerrar` para el botón X, que conecta el estudiante).
- Clase de visibilidad del modal: `abierto` (en CSS: `.modal{display:none}` y `.modal.abierto{display:flex}`).
- Si un estudiante no tiene alguno de esos ids, `abrirModal` lanza un error que dice exactamente cuál falta.

Estas convenciones coinciden con la **guía interactiva del proyecto** (ids del HTML y CSS del modal). Si cambias algo aquí, cámbialo también allí.
