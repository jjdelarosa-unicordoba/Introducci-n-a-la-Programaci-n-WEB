# Guía Completa de CSS para Principiantes
### Dale estilo visual a tus páginas web

---

## 📋 Cómo usar esta guía

Esta guía continúa la de HTML. La idea es que tomes las páginas que ya construiste (o el proyecto de perfil personal del módulo final) y les des vida visual.

Cada módulo tiene:
- 📖 **Teoría breve**
- 💻 **Ejemplo de código**
- ✏️ **Ejercicio práctico**
- ✅ **Solución comentada**

**Requisito previo:** haber completado la guía de HTML (o conocer etiquetas básicas: `div`, `p`, `h1`-`h6`, `ul/li`, `img`, `a`, `class`, `id`).

---

## Módulo 1: ¿Qué es CSS y cómo se aplica?

### 📖 Teoría

CSS (*Cascading Style Sheets*, Hojas de Estilo en Cascada) controla la **apariencia** de un documento HTML: colores, tamaños, espaciados, posiciones, fuentes, etc.

Existen **3 formas** de aplicar CSS a un documento, de la menos a la más recomendada:

**1. Estilos en línea (inline)** — dentro del propio elemento HTML. Evítalo salvo casos puntuales.
```html
<p style="color: red;">Texto en rojo</p>
```

**2. Estilos internos** — dentro de una etiqueta `<style>` en el `<head>`.
```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
```

**3. Estilos externos (recomendado)** — en un archivo `.css` separado, enlazado con `<link>`.

```html
<!-- en el <head> del HTML -->
<link rel="stylesheet" href="estilos.css">
```

```css
/* archivo estilos.css */
p {
    color: red;
}
```

**¿Por qué es mejor el archivo externo?** Porque separa contenido (HTML) de presentación (CSS), permite reutilizar el mismo estilo en varias páginas, y mantiene el código más limpio y organizado.

### 💻 Sintaxis básica de una regla CSS

```css
selector {
    propiedad: valor;
    propiedad: valor;
}
```

- **Selector**: a qué elemento(s) aplica el estilo.
- **Propiedad**: qué característica quieres cambiar (color, tamaño, etc.).
- **Valor**: el valor que le das a esa propiedad.

### ✏️ Ejercicio 1.1
Crea un archivo `estilos.css` y un archivo `index.html` que lo enlace correctamente. En el CSS, define que todos los `<h1>` sean de color azul y todos los `<p>` tengan tamaño de letra de 18px.

<details>
<summary>✅ Ver solución</summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 1.1</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Título principal</h1>
    <p>Este es un párrafo de prueba.</p>
</body>
</html>
```

```css
/* estilos.css */
h1 {
    color: blue;
}

p {
    font-size: 18px;
}
```
</details>

---

## Módulo 2: Selectores

### 📖 Teoría

Los selectores determinan **a qué elementos** se les aplica una regla.

| Selector | Sintaxis | Ejemplo |
|---|---|---|
| Elemento | `etiqueta` | `p { }` → todos los `<p>` |
| Clase | `.nombre-clase` | `.tarjeta { }` → elementos con `class="tarjeta"` |
| ID | `#nombre-id` | `#header { }` → el elemento con `id="header"` |
| Universal | `*` | `* { }` → todos los elementos |
| Agrupado | `a, b` | `h1, h2 { }` → aplica a ambos |
| Descendiente | `a b` | `nav a { }` → todo `<a>` dentro de un `<nav>` |
| Hijo directo | `a > b` | `ul > li { }` → solo `<li>` hijos directos de `<ul>` |
| Pseudo-clase | `a:estado` | `a:hover { }` → cuando el mouse pasa por encima |

**Prioridad (especificidad) básica:** un `id` pesa más que una `class`, y una `class` pesa más que un selector de elemento. Si hay conflicto, gana el más específico (o el que está más abajo en el archivo, si tienen igual especificidad).

### 💻 Ejemplo

```css
* {
    margin: 0;
    padding: 0;
}

.destacado {
    background-color: yellow;
}

#logo {
    font-weight: bold;
}

nav a {
    text-decoration: none;
}

a:hover {
    color: red;
}
```

### ✏️ Ejercicio 2.1
Sobre tu página de perfil (o cualquier página con al menos un `nav`, una lista y varios párrafos), escribe reglas CSS que:
- Quiten el subrayado a todos los enlaces dentro del `nav`.
- Pongan fondo gris claro (`#f0f0f0`) a los elementos con `class="tarjeta"`.
- Cambien el color a rojo cuando el mouse pasa sobre cualquier enlace (`:hover`).
- Den negrita al elemento con `id="titulo-principal"`.

<details>
<summary>✅ Ver solución</summary>

```css
nav a {
    text-decoration: none;
}

.tarjeta {
    background-color: #f0f0f0;
}

a:hover {
    color: red;
}

#titulo-principal {
    font-weight: bold;
}
```
</details>

---

## Módulo 3: Colores y unidades de medida

### 📖 Teoría

**Formas de definir un color:**
```css
color: red;                 /* nombre predefinido */
color: #ff0000;             /* hexadecimal */
color: rgb(255, 0, 0);      /* rojo, verde, azul (0-255) */
color: rgba(255, 0, 0, 0.5);/* rgb + transparencia (0 a 1) */
```

**Unidades de medida más comunes:**

| Unidad | Tipo | Descripción |
|---|---|---|
| `px` | Absoluta | Píxeles, tamaño fijo |
| `%` | Relativa | Porcentaje respecto al contenedor padre |
| `em` | Relativa | Respecto al tamaño de fuente del elemento padre |
| `rem` | Relativa | Respecto al tamaño de fuente raíz (`html`), más predecible que `em` |
| `vw` / `vh` | Relativa | Porcentaje del ancho/alto de la ventana (*viewport*) |

**Recomendación práctica:** usa `rem` para tipografía y espaciados generales (es más consistente), y `%` o `vw/vh` para layouts que deben adaptarse a la pantalla.

### 💻 Ejemplo

```css
body {
    font-size: 16px; /* referencia para los rem */
}

h1 {
    font-size: 2rem;      /* 32px */
    color: #2c3e50;
}

.caja {
    width: 50%;
    padding: 1rem;
    background-color: rgba(52, 152, 219, 0.2);
}
```

### ✏️ Ejercicio 3.1
Define estilos donde:
- El `body` tenga un color de fondo en formato hexadecimal a tu elección.
- Un `<h1>` tenga color definido en `rgb()`.
- Un elemento con `class="alerta"` tenga fondo en `rgba()` con 30% de opacidad.
- Un párrafo tenga `font-size` en `rem` equivalente a 20px (asumiendo base de 16px).

<details>
<summary>✅ Ver solución</summary>

```css
body {
    background-color: #f5f5f5;
}

h1 {
    color: rgb(41, 128, 185);
}

.alerta {
    background-color: rgba(231, 76, 60, 0.3);
}

p {
    font-size: 1.25rem; /* 20px / 16px = 1.25 */
}
```
</details>

---

## Módulo 4: Tipografía y texto

### 📖 Teoría

| Propiedad | Uso |
|---|---|
| `font-family` | Tipo de letra. Siempre define una lista de "respaldo": `font-family: 'Arial', sans-serif;` |
| `font-size` | Tamaño de letra |
| `font-weight` | Grosor: `normal`, `bold`, o valores `100`-`900` |
| `font-style` | `normal` o `italic` |
| `text-align` | Alineación: `left`, `center`, `right`, `justify` |
| `text-decoration` | `none`, `underline`, `line-through` |
| `line-height` | Altura de línea (espaciado vertical entre líneas) |
| `letter-spacing` | Espacio entre letras |

### 💻 Ejemplo

```css
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    line-height: 1.6;
}

h1 {
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
}

.cita {
    font-style: italic;
    text-align: center;
}

a {
    text-decoration: none;
}
```

### ✏️ Ejercicio 4.1
Da estilo a una página de blog simple donde:
- El cuerpo use una fuente sans-serif con buen `line-height` para lectura cómoda.
- Los títulos (`h1`, `h2`) estén centrados y en negrita.
- Los enlaces no tengan subrayado por defecto, pero sí al pasar el mouse (`:hover`).
- Un párrafo con `class="fecha"` esté en cursiva y con tamaño más pequeño (`0.9rem`).

<details>
<summary>✅ Ver solución</summary>

```css
body {
    font-family: Verdana, Arial, sans-serif;
    line-height: 1.6;
}

h1, h2 {
    text-align: center;
    font-weight: bold;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.fecha {
    font-style: italic;
    font-size: 0.9rem;
}
```
</details>

---

## Módulo 5: El modelo de caja (Box Model)

### 📖 Teoría

**Todo** elemento HTML es, para CSS, una caja rectangular compuesta por 4 capas (de adentro hacia afuera):

```
┌─────────────────────────────┐
│           margin             │
│  ┌─────────────────────┐    │
│  │       border          │    │
│  │  ┌───────────────┐    │    │
│  │  │    padding     │    │    │
│  │  │  ┌─────────┐  │    │    │
│  │  │  │ content │  │    │    │
│  │  │  └─────────┘  │    │    │
│  │  └───────────────┘    │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

- **content**: el contenido real (texto, imagen).
- **padding**: espacio interno, entre el contenido y el borde.
- **border**: el borde de la caja.
- **margin**: espacio externo, entre esta caja y las demás.

```css
.caja {
    width: 200px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```

**⚠️ Detalle importante:** por defecto, `width` y `height` solo definen el tamaño del *content*. Si agregas padding y border, la caja final es **más grande** que el `width` declarado. Para evitar esto, se usa universalmente:

```css
* {
    box-sizing: border-box;
}
```

Con `border-box`, el `width` que definas incluye padding y border, haciendo los cálculos mucho más predecibles.

**Formas de escribir margin/padding:**
```css
margin: 10px;                  /* los 4 lados iguales */
margin: 10px 20px;             /* arriba/abajo: 10px, izq/der: 20px */
margin: 10px 20px 15px 5px;    /* arriba, derecha, abajo, izquierda (sentido horario) */
margin-top: 10px;              /* un solo lado */
```

### ✏️ Ejercicio 5.1
Crea 3 `<div class="tarjeta">` (como las del ejercicio de HTML). Aplica:
- `box-sizing: border-box` globalmente.
- A `.tarjeta`: ancho de `250px`, padding de `1rem`, borde de `1px solid #ccc`, margen inferior de `1rem`, y `border-radius: 8px` (bonus: esquinas redondeadas).

<details>
<summary>✅ Ver solución</summary>

```css
* {
    box-sizing: border-box;
}

.tarjeta {
    width: 250px;
    padding: 1rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    border-radius: 8px;
}
```
</details>

---

## Módulo 6: Display y posicionamiento básico

### 📖 Teoría

La propiedad `display` define cómo se comporta una caja en el flujo del documento:

| Valor | Comportamiento |
|---|---|
| `block` | Ocupa todo el ancho disponible, siempre empieza en nueva línea (ej: `div`, `p`, `h1`) |
| `inline` | Solo ocupa el espacio de su contenido, no permite `width`/`height` (ej: `span`, `a`) |
| `inline-block` | Como `inline`, pero sí permite `width`, `height`, `margin` y `padding` completos |
| `none` | Oculta el elemento por completo (no ocupa espacio) |

La propiedad `position` controla cómo se ubica un elemento respecto a su posición normal:

| Valor | Comportamiento |
|---|---|
| `static` | Comportamiento por defecto (normal) |
| `relative` | Se desplaza respecto a su posición original, usando `top`/`left`/etc. |
| `absolute` | Se posiciona respecto a su ancestro con `position` distinto de `static` más cercano |
| `fixed` | Se posiciona respecto a la ventana del navegador, no se mueve al hacer scroll |

### 💻 Ejemplo

```css
.etiqueta-inline {
    display: inline-block;
    padding: 5px 10px;
    background-color: #eee;
    margin-right: 5px;
}

.contenedor {
    position: relative;
}

.badge {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: red;
    color: white;
    padding: 2px 6px;
    border-radius: 50%;
}

.barra-superior {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
}
```

### ✏️ Ejercicio 6.1
Crea una barra de navegación superior fija (`position: fixed`) que permanezca visible al hacer scroll. Dentro de ella, los enlaces deben mostrarse en línea usando `display: inline-block` con un poco de padding entre ellos.

<details>
<summary>✅ Ver solución</summary>

```html
<nav class="barra-fija">
    <a href="#" class="enlace-nav">Inicio</a>
    <a href="#" class="enlace-nav">Sobre mí</a>
    <a href="#" class="enlace-nav">Contacto</a>
</nav>
```

```css
.barra-fija {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #2c3e50;
    padding: 1rem;
}

.enlace-nav {
    display: inline-block;
    color: white;
    text-decoration: none;
    padding: 0 1rem;
}
```
</details>

---

## Módulo 7: Flexbox

### 📖 Teoría

Flexbox es un sistema de diseño para organizar elementos en **una dimensión** (fila o columna), ideal para barras de navegación, tarjetas alineadas, centrado de contenido, etc.

Se activa en el **contenedor padre**:
```css
.contenedor {
    display: flex;
}
```

Propiedades clave del contenedor:

| Propiedad | Uso |
|---|---|
| `flex-direction` | `row` (default, horizontal) o `column` (vertical) |
| `justify-content` | Alineación en el eje principal: `flex-start`, `center`, `flex-end`, `space-between`, `space-around` |
| `align-items` | Alineación en el eje transversal: `flex-start`, `center`, `flex-end`, `stretch` |
| `flex-wrap` | `wrap` permite que los elementos pasen a otra línea si no caben |
| `gap` | Espacio entre elementos, sin necesidad de márgenes manuales |

Propiedades útiles en los **hijos**:
```css
.item {
    flex: 1; /* crece para ocupar el espacio disponible, repartido equitativamente */
}
```

### 💻 Ejemplo: barra de navegación con Flexbox

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #34495e;
}

.navbar a {
    color: white;
    text-decoration: none;
}
```

### 💻 Ejemplo: tarjetas centradas

```css
.contenedor-tarjetas {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}
```

### ✏️ Ejercicio 7.1
Crea un contenedor con 3 tarjetas (`div.tarjeta`) usando Flexbox para que:
- Se muestren en fila, con espacio (`gap`) de `1rem` entre ellas.
- Estén centradas horizontalmente en la página.
- Si la pantalla es angosta, pasen a la siguiente línea (`flex-wrap`).

<details>
<summary>✅ Ver solución</summary>

```html
<div class="contenedor-tarjetas">
    <div class="tarjeta">Tarjeta 1</div>
    <div class="tarjeta">Tarjeta 2</div>
    <div class="tarjeta">Tarjeta 3</div>
</div>
```

```css
.contenedor-tarjetas {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    flex-wrap: wrap;
}

.tarjeta {
    width: 200px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
}
```
</details>

### ✏️ Ejercicio 7.2 (reto)
Usando Flexbox, crea un layout de "tarjeta de perfil" donde una imagen circular quede a la izquierda y, a su derecha, un bloque con nombre y descripción, todo centrado verticalmente.

<details>
<summary>✅ Ver solución</summary>

```html
<div class="perfil">
    <img src="https://via.placeholder.com/80" alt="Foto de perfil" class="avatar">
    <div class="info">
        <h3>Laura Gómez</h3>
        <p>Diseñadora UX/UI</p>
    </div>
</div>
```

```css
.perfil {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.avatar {
    border-radius: 50%;
    width: 80px;
    height: 80px;
}
```
</details>

---

## Módulo 8: CSS Grid

### 📖 Teoría

Mientras Flexbox trabaja en **una dimensión**, Grid trabaja en **dos dimensiones** (filas y columnas simultáneamente), ideal para layouts de página completos.

Se activa igual, en el contenedor:
```css
.contenedor {
    display: grid;
}
```

Propiedades clave:

| Propiedad | Uso |
|---|---|
| `grid-template-columns` | Define cuántas columnas y su tamaño |
| `grid-template-rows` | Define cuántas filas y su tamaño |
| `gap` | Espacio entre celdas (filas y columnas) |
| `grid-column` / `grid-row` | En un hijo, define cuántas columnas/filas ocupa |

La unidad `fr` (*fraction*) reparte el espacio disponible proporcionalmente.

### 💻 Ejemplo: layout de 3 columnas iguales

```css
.galeria {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}
```

### 💻 Ejemplo: layout de página típico (header, sidebar, main, footer)

```css
.pagina {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 1rem;
}

.pagina header { grid-area: header; }
.pagina .sidebar { grid-area: sidebar; }
.pagina main { grid-area: main; }
.pagina footer { grid-area: footer; }
```

### ✏️ Ejercicio 8.1
Crea una galería de 6 imágenes organizadas en una grilla de 3 columnas iguales, con `gap` de `0.5rem` entre ellas.

<details>
<summary>✅ Ver solución</summary>

```html
<div class="galeria">
    <img src="foto1.jpg" alt="Foto 1">
    <img src="foto2.jpg" alt="Foto 2">
    <img src="foto3.jpg" alt="Foto 3">
    <img src="foto4.jpg" alt="Foto 4">
    <img src="foto5.jpg" alt="Foto 5">
    <img src="foto6.jpg" alt="Foto 6">
</div>
```

```css
.galeria {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
}

.galeria img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
}
```
</details>

### ✏️ Ejercicio 8.2 (reto)
Usando `grid-template-areas`, crea el esqueleto visual de una página con: header arriba (ancho completo), un sidebar a la izquierda, un main a la derecha, y footer abajo (ancho completo).

<details>
<summary>✅ Ver solución</summary>

Usa el ejemplo de "layout de página típico" de la teoría de este módulo como base, ajustando el HTML:

```html
<div class="pagina">
    <header>Header</header>
    <div class="sidebar">Sidebar</div>
    <main>Contenido principal</main>
    <footer>Footer</footer>
</div>
```
</details>

---

## Módulo 9: Diseño responsivo (Media Queries)

### 📖 Teoría

El diseño responsivo permite que una página se **adapte** a distintos tamaños de pantalla (celular, tablet, escritorio). La herramienta principal son las **media queries**: bloques de CSS que solo se aplican bajo ciertas condiciones (usualmente, el ancho de la pantalla).

```css
@media (max-width: 768px) {
    /* estilos que solo aplican si la pantalla mide 768px o menos */
}
```

**Enfoque recomendado: Mobile First.** Se escriben los estilos base pensando en celular, y luego se usan media queries con `min-width` para adaptar a pantallas más grandes.

```css
/* Estilos base (móvil) */
.contenedor-tarjetas {
    display: flex;
    flex-direction: column;
}

/* A partir de 768px (tablet en adelante) */
@media (min-width: 768px) {
    .contenedor-tarjetas {
        flex-direction: row;
    }
}
```

**No olvides este meta tag en el `<head>` del HTML**, indispensable para que el responsive funcione en dispositivos móviles:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### ✏️ Ejercicio 9.1
Toma el ejercicio 7.1 (contenedor de tarjetas con Flexbox) y agrega:
- En pantallas de hasta `600px` de ancho, las tarjetas deben apilarse en columna (`flex-direction: column`) y ocupar el 100% del ancho.
- En pantallas mayores a `600px`, se mantienen en fila como estaban.

<details>
<summary>✅ Ver solución</summary>

```css
.contenedor-tarjetas {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.tarjeta {
    width: 100%;
}

@media (min-width: 600px) {
    .contenedor-tarjetas {
        flex-direction: row;
        justify-content: center;
    }

    .tarjeta {
        width: 200px;
    }
}
```
</details>

---

## Módulo 10: Proyecto integrador final

### 📖 Consigna

Vas a tomar la página de **perfil personal** que construiste en la guía de HTML (`perfil.html`) y a crear un archivo `estilos.css` que la transforme visualmente por completo.

### ✏️ Requisitos del proyecto

1. Enlaza el CSS externo correctamente y agrega el meta `viewport` en el `<head>`.
2. Aplica `box-sizing: border-box` de forma global.
3. Define una paleta de colores coherente (2-3 colores principales) y una tipografía con fuentes de respaldo.
4. El `<header>` debe usar Flexbox para alinear el nombre y el `<nav>`.
5. La sección "Habilidades" debe mostrar la lista como "chips" o etiquetas en fila usando Flexbox (con `flex-wrap: wrap`), en vez de una lista con viñetas.
6. La sección "Proyectos" debe mostrar los `<article>` en una grilla (CSS Grid) de 2 columnas en escritorio, y 1 columna en pantallas pequeñas (media query).
7. El formulario de contacto debe tener inputs con `padding`, `border-radius` y un estado `:focus` distinto (cambia el color del borde).
8. Agrega al menos una transición suave (`transition`) en algún `:hover` (por ejemplo, en los botones o enlaces).
9. El `<footer>` debe estar centrado y con un color de fondo distinto al resto de la página.
10. La página debe verse bien tanto en una ventana angosta (celular) como en una ancha (escritorio) — pruébalo achicando la ventana del navegador.

### 💡 Pistas
- Empieza definiendo variables de color con `:root` y `var()` — no lo vimos en la teoría, pero es simple y muy útil:
```css
:root {
    --color-primario: #2c3e50;
    --color-secundario: #3498db;
}

.header {
    background-color: var(--color-primario);
}
```
- Ve sección por sección, no intentes maquetar todo de una vez.
- Usa las herramientas de desarrollador del navegador (`F12`) para inspeccionar y probar valores en vivo antes de escribirlos en tu archivo.

<details>
<summary>✅ Ver solución de referencia (fragmento clave)</summary>

```css
:root {
    --color-primario: #2c3e50;
    --color-secundario: #3498db;
    --color-fondo: #f5f5f5;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background-color: var(--color-fondo);
    line-height: 1.6;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primario);
    color: white;
    padding: 1rem 2rem;
    flex-wrap: wrap;
}

header nav a {
    color: white;
    text-decoration: none;
    margin-left: 1rem;
    transition: color 0.3s;
}

header nav a:hover {
    color: var(--color-secundario);
}

#habilidades ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
}

#habilidades li {
    background-color: var(--color-secundario);
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 20px;
}

#proyectos {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    #proyectos {
        grid-template-columns: 1fr 1fr;
    }
}

.proyecto {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
}

input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    transition: border-color 0.3s;
}

input:focus, textarea:focus {
    border-color: var(--color-secundario);
    outline: none;
}

input[type="submit"] {
    background-color: var(--color-secundario);
    color: white;
    border: none;
    cursor: pointer;
    width: auto;
    padding: 0.5rem 1.5rem;
}

footer {
    text-align: center;
    background-color: var(--color-primario);
    color: white;
    padding: 1rem;
}
```
</details>

---

## 🎯 Autoevaluación final

1. ¿Cuál es la diferencia entre `margin` y `padding`?
2. ¿Qué hace `box-sizing: border-box` y por qué se recomienda usarlo siempre?
3. ¿Cuándo usarías Flexbox y cuándo Grid?
4. ¿Qué es "mobile first" y por qué se recomienda ese enfoque?
5. ¿Qué diferencia hay entre `em` y `rem`?

---

## 🚀 Siguientes pasos

Ya sabes estructurar (HTML) y dar estilo (CSS) a una página web completa y responsiva. El siguiente paso es **JavaScript**, que te permitirá agregar **interactividad real**: validar formularios antes de enviarlos, mostrar/ocultar contenido con clics, crear menús desplegables, animaciones controladas por el usuario, y mucho más.

¿Seguimos con la guía de JavaScript?
