# Proyecto de referencia — Periódico Estudiantil (solo docente)

Esta carpeta es la **solución completa** del proyecto: sirve para que pruebes todo antes de entregar a los estudiantes. **No se la entregues tal cual**: `index.html` trae todos los `TODO` resueltos.

| Archivo | Qué es |
|---|---|
| `index.html` | HTML completo + el `<script>` de conexión con **los 11 TODO resueltos** |
| `style.css` | CSS completo (variables, Grid, Flexbox, tarjetas, modal, responsive) |
| `js/articulos.js` · `suscriptores.js` · `email.js` · `modal.js` | Los archivos del profesor, **sin cambios** |

## 1. Puesta en marcha (5 minutos)

1. **Configuración:** si ya configuraste Firebase y EmailJS en tus archivos `js/`, copia tu `js/articulos.js` y tu `js/email.js` encima de los de esta carpeta (o pega tus datos en `FIREBASE_CONFIG` y en las constantes `EMAILJS_*`).
2. **Ábrelo directamente:** doble clic en `index.html`. No necesita servidor (requisito del RFC).
3. **Artículos de muestra** (solo la primera vez): abre **F12 → Console**, escribe `docenteSembrarArticulos()` y recarga la página con F5.

## 2. Lista de pruebas con tus servicios reales

Márcalas una por una. Usa **correos tuyos de prueba**, no de estudiantes.

| # | Prueba | Resultado esperado |
|---|---|---|
| 1 | Abrir la página | Aparece «Cargando artículos...» y luego las tarjetas, la más nueva primero |
| 2 | Clic en una tarjeta | Se abre el modal con banner grande, título, autor, fecha y el texto en párrafos |
| 3 | Cerrar el modal | Funciona con la **X**, con **clic fuera** de la ventana y con la tecla **Escape** |
| 4 | Suscribirse con el nombre vacío | Aviso rojo «Escribe tu nombre completo.» |
| 5 | Suscribirse con un correo sin `@` | Aviso rojo «Escribe un correo válido...» |
| 6 | Suscribirse con nombre y correo correctos | Aviso verde de confirmación y el formulario se limpia; el documento aparece en Firestore → `suscriptores` |
| 7 | Suscribirse otra vez con el mismo correo | Aviso rojo «Este correo ya está suscrito.» |
| 8 | Publicar con campos vacíos | Aviso rojo «Completa todos los campos.» |
| 9 | Publicar con una imagen que no empieza por `http` | Aviso rojo sobre la URL; no se guarda nada |
| 10 | Publicar un artículo correcto (con al menos 1 suscriptor) | «¡Artículo publicado! Correos enviados: X de Y.», la tarjeta nueva aparece primero y **llega el correo** a tu bandeja |
| 11 | Recargar la página (F5) | Los artículos siguen ahí |
| 12 | F12 → modo dispositivo: 375 px, 800 px y 1200 px | 1, 2 y 3 columnas de tarjetas; **sin scroll horizontal** |
| 13 | Abrir la página en otro navegador | Se comporta igual |
| 14 | Consola (F12) durante todo el recorrido | Sin líneas rojas |

## 3. Qué mensaje verás si algo no está bien

| Mensaje en la página | Causa probable |
|---|---|
| «Firebase no está configurado...» | Falta completar `FIREBASE_CONFIG` en `js/articulos.js` |
| «No se cargó Firebase...» | Faltan las líneas `<script>` de Firebase, o están después de `js/articulos.js` |
| «Missing or insufficient permissions» | Las reglas de Firestore no permiten `read` / `create` (ver `INSTRUCCIONES-DOCENTE.md`, paso 3) |
| «...EmailJS no está configurado» al publicar | Faltan las constantes `EMAILJS_*` en `js/email.js` (el artículo **sí** se guarda) |
| «Correos enviados: 0 de N» | EmailJS rechaza los envíos: revisa que la plantilla tenga `{{to_email}}` en el campo *To Email* y las variables indicadas |
| Las tarjetas muestran «Aún no hay artículos» | La base está vacía: ejecuta `docenteSembrarArticulos()` |

## 4. Qué cambió respecto a la guía anterior

- Los **4 archivos JS no cambiaron**: la prueba demostró que funcionan tal como estaban.
- **Formularios con `novalidate`:** sin este atributo, el navegador muestra sus propios avisos (por `required` y `type="email"`) y corta el envío antes de que corra la validación en JavaScript; los estudiantes nunca verían funcionar sus `if`. `required` se mantiene por accesibilidad.
- **CSS:** `.card__resumen` declara también la propiedad estándar `line-clamp` (el editor lo pedía por compatibilidad) y se añadió la regla `.aviso` para los mensajes «Cargando...» / «Aún no hay artículos».
- **Solución:** además de los 11 `TODO`, incluye «Cargando...» y «Aún no hay artículos», bloqueo del botón mientras se publica, y cierre del modal con clic fuera y con Escape (el reto extra del `TODO 11`).

## 5. Cómo se probó este proyecto

Se abrió `index.html` como archivo local en un navegador real (Chromium) y se recorrieron las 14 pruebas de arriba con clics y escritura reales: **33 comprobaciones, todas correctas**. Firebase y EmailJS fueron **simulados** (no había internet ni credenciales), así que la conexión real, las reglas de Firestore, la plantilla de EmailJS y los límites del plan gratuito solo los puedes confirmar tú con la lista de la sección 2.
