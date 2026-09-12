# Guía Completa de HTML para Principiantes
### Aprende a programar páginas web desde cero

---

## 📋 Cómo usar esta guía

Cada módulo tiene:
- 📖 **Teoría breve** — lo esencial, sin rodeos.
- 💻 **Ejemplo de código** — cópialo y pruébalo tú mismo.
- ✏️ **Ejercicio práctico** — hazlo antes de mirar la solución.
- ✅ **Solución comentada** — para que compares tu resultado.

**Requisitos:**
- Un editor de texto (recomendado: [Visual Studio Code](https://code.visualstudio.com/), gratuito).
- Un navegador web (Chrome, Firefox, Edge, etc.).
- Ganas de experimentar y equivocarte (¡es parte del aprendizaje!).

**Cómo probar tu código:** guarda cualquier archivo con extensión `.html` y ábrelo haciendo doble clic. Se abrirá en tu navegador.

---

## Módulo 1: ¿Qué es HTML?

### 📖 Teoría

HTML (*HyperText Markup Language*) no es un lenguaje de programación: es un **lenguaje de marcado**. Esto significa que no ejecuta lógica ni cálculos, sino que **estructura y da significado** al contenido de una página web (texto, imágenes, enlaces, tablas, etc.).

Piensa en HTML como el **esqueleto** de una página. Más adelante, CSS será la "ropa" (estilo visual) y JavaScript el "cerebro" (comportamiento), pero por ahora nos enfocamos solo en el esqueleto.

Un documento HTML está compuesto por **etiquetas** (o *tags*), que casi siempre vienen en pares: una de apertura y otra de cierre.

```html
<etiqueta>Contenido</etiqueta>
```

Ejemplo:
```html
<p>Este es un párrafo.</p>
```

Algunas etiquetas no tienen contenido ni cierre, se llaman **etiquetas vacías**:
```html
<br>
<img src="foto.jpg">
```

### 💻 Ejemplo: estructura mínima de un documento HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
</head>
<body>
    <p>¡Hola, mundo!</p>
</body>
</html>
```

**Explicación línea por línea:**
| Línea | Significado |
|---|---|
| `<!DOCTYPE html>` | Le dice al navegador que este es un documento HTML5. Siempre va primero. |
| `<html lang="es">` | Elemento raíz de todo el documento. `lang="es"` indica el idioma. |
| `<head>` | Contiene información *sobre* la página (metadatos), no se muestra directamente. |
| `<meta charset="UTF-8">` | Define la codificación de caracteres (para que tildes y ñ se vean bien). |
| `<title>` | El texto que aparece en la pestaña del navegador. |
| `<body>` | Aquí va todo el contenido visible de la página. |

### ✏️ Ejercicio 1.1
Crea un archivo llamado `ejercicio1.html` con la estructura mínima y coloca dentro del `<body>` un párrafo que diga tu nombre y tu edad. Cambia el `<title>` para que diga "Mi presentación".

<details>
<summary>✅ Ver solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi presentación</title>
</head>
<body>
    <p>Me llamo Ana y tengo 24 años.</p>
</body>
</html>
```
</details>

---

## Módulo 2: Texto y encabezados

### 📖 Teoría

HTML ofrece **6 niveles de encabezado**, de `<h1>` (el más importante) a `<h6>` (el menos importante). Úsalos de forma jerárquica, no según el tamaño que quieras (el tamaño se controla con CSS, no eligiendo un encabezado más grande).

Para texto normal se usa `<p>` (párrafo).

Otras etiquetas útiles de texto:
| Etiqueta | Uso |
|---|---|
| `<strong>` | Texto con **importancia** (se ve en negrita) |
| `<em>` | Texto con *énfasis* (se ve en cursiva) |
| `<br>` | Salto de línea |
| `<hr>` | Línea horizontal divisoria |
| `<span>` | Contenedor genérico en línea, sin significado propio |

### 💻 Ejemplo

```html
<h1>Recetas de cocina</h1>
<h2>Postres</h2>
<p>El <strong>flan casero</strong> es uno de los postres más pedidos.</p>
<p>Se recomienda dejarlo enfriar <em>al menos 2 horas</em> antes de servir.</p>
<hr>
<h2>Bebidas</h2>
```

### ✏️ Ejercicio 2.1
Crea una página sobre tu película o serie favorita. Debe incluir:
- Un `<h1>` con el título.
- Un `<h2>` con el nombre "Sinopsis".
- Un párrafo describiendo la trama, con al menos una palabra en negrita y otra en cursiva.
- Una línea horizontal (`<hr>`) separando dos secciones.
- Un `<h2>` con el nombre "Mi opinión" y un párrafo debajo.

<details>
<summary>✅ Ver solución</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi película favorita</title>
</head>
<body>
    <h1>Interstellar</h1>
    <h2>Sinopsis</h2>
    <p>Un grupo de <strong>astronautas</strong> viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad. La película explora temas como el <em>amor</em> y el tiempo.</p>
    <hr>
    <h2>Mi opinión</h2>
    <p>Me parece una obra maestra visual y emocional.</p>
</body>
</html>
```
</details>

---

## Módulo 3: Listas

### 📖 Teoría

Existen tres tipos de listas:

- **Desordenada** (`<ul>`): con viñetas, para elementos sin orden específico. Cada elemento va dentro de `<li>`.
- **Ordenada** (`<ol>`): con números, para pasos o rankings.
- **De definición** (`<dl>`): pares término/descripción, usando `<dt>` (término) y `<dd>` (descripción).

### 💻 Ejemplo

```html
<h2>Ingredientes</h2>
<ul>
    <li>2 huevos</li>
    <li>1 taza de harina</li>
    <li>200ml de leche</li>
</ul>

<h2>Pasos</h2>
<ol>
    <li>Mezclar los ingredientes secos.</li>
    <li>Agregar los líquidos.</li>
    <li>Hornear 30 minutos.</li>
</ol>

<h2>Glosario</h2>
<dl>
    <dt>HTML</dt>
    <dd>Lenguaje de marcado para estructurar páginas web.</dd>
</dl>
```

### ✏️ Ejercicio 3.1
Crea una página con:
- Una lista **ordenada** con los pasos para preparar tu comida favorita (mínimo 4 pasos).
- Una lista **desordenada** con 3 ingredientes.
- Anida una lista dentro de otra: en uno de los pasos, agrega una sub-lista con 2 elementos (pista: puedes poner una `<ul>` dentro de un `<li>`).

<details>
<summary>✅ Ver solución</summary>

```html
<h2>Ingredientes</h2>
<ul>
    <li>Pan</li>
    <li>Jamón</li>
    <li>Queso</li>
</ul>

<h2>Pasos</h2>
<ol>
    <li>Cortar el pan por la mitad.</li>
    <li>Agregar los ingredientes:
        <ul>
            <li>Una capa de jamón</li>
            <li>Una capa de queso</li>
        </ul>
    </li>
    <li>Tostar en la sartén 2 minutos.</li>
    <li>Servir caliente.</li>
</ol>
```
</details>

---

## Módulo 4: Enlaces (hipervínculos)

### 📖 Teoría

La etiqueta `<a>` (*anchor*) crea enlaces. El atributo más importante es `href` (*hypertext reference*), que indica el destino.

```html
<a href="URL">Texto visible del enlace</a>
```

Tipos de enlaces:
- **Externo**: a otra página web → `href="https://www.ejemplo.com"`
- **Interno**: a otra página de tu mismo sitio → `href="contacto.html"`
- **Ancla**: a una sección de la misma página → `href="#seccion"` (requiere un elemento con `id="seccion"`)
- **Correo**: `href="mailto:correo@ejemplo.com"`

Atributo útil: `target="_blank"` abre el enlace en una pestaña nueva.

### 💻 Ejemplo

```html
<a href="https://www.wikipedia.org" target="_blank">Ir a Wikipedia</a>
<a href="#contacto">Ir a la sección de contacto</a>
<a href="mailto:hola@ejemplo.com">Escríbeme</a>

<h2 id="contacto">Contacto</h2>
<p>Aquí está la sección de contacto.</p>
```

### ✏️ Ejercicio 4.1
Crea una página de "Mis enlaces favoritos" con:
- Un menú al inicio con 3 enlaces a sitios web reales, cada uno abriéndose en pestaña nueva.
- Más abajo, tres secciones con encabezados `<h2>` que tengan `id`.
- Un enlace de "volver arriba" al final de la página que use ancla.

<details>
<summary>✅ Ver solución</summary>

```html
<h1>Mis enlaces favoritos</h1>
<nav>
    <a href="#noticias">Noticias</a> |
    <a href="#musica">Música</a> |
    <a href="#deportes">Deportes</a>
</nav>

<h2 id="noticias">Noticias</h2>
<a href="https://news.google.com" target="_blank">Google Noticias</a>

<h2 id="musica">Música</h2>
<a href="https://open.spotify.com" target="_blank">Spotify</a>

<h2 id="deportes">Deportes</h2>
<a href="https://www.espn.com" target="_blank">ESPN</a>

<a href="#top">Volver arriba</a>
```
</details>

---

## Módulo 5: Imágenes

### 📖 Teoría

La etiqueta `<img>` inserta imágenes. Es una etiqueta **vacía** (no tiene cierre). Atributos clave:
- `src`: ruta o URL de la imagen (**obligatorio**).
- `alt`: texto alternativo que describe la imagen (**muy importante** para accesibilidad y SEO; se muestra si la imagen no carga).
- `width` / `height`: dimensiones (mejor controlarlas con CSS más adelante, pero es válido usarlas aquí).

```html
<img src="perro.jpg" alt="Perro labrador jugando en el parque" width="300">
```

Puedes convertir una imagen en un enlace envolviéndola con `<a>`:
```html
<a href="https://ejemplo.com">
    <img src="logo.png" alt="Logo de la empresa">
</a>
```

### ✏️ Ejercicio 5.1
Crea una pequeña galería con 3 imágenes (puedes usar imágenes de internet copiando su URL, por ejemplo de [Unsplash](https://unsplash.com)). Cada imagen debe:
- Tener un `alt` descriptivo.
- Estar acompañada de un `<p>` describiéndola.
- La primera imagen debe funcionar también como enlace a la fuente original.

<details>
<summary>✅ Ver solución (estructura de ejemplo)</summary>

```html
<h1>Mi galería de paisajes</h1>

<a href="https://unsplash.com" target="_blank">
    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" alt="Montañas al amanecer" width="400">
</a>
<p>Cordillera al amanecer, con niebla entre los picos.</p>

<img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="Bosque con niebla" width="400">
<p>Bosque de pinos cubierto por una ligera neblina.</p>

<img src="https://images.unsplash.com/photo-1500534623283-312aade485b7" alt="Lago al atardecer" width="400">
<p>Lago tranquilo reflejando los colores del atardecer.</p>
```
</details>

---

## Módulo 6: Tablas

### 📖 Teoría

Las tablas organizan datos en filas y columnas. **No se deben usar para maquetar diseño** (eso es trabajo de CSS), solo para datos tabulares reales (horarios, precios, comparaciones, etc.).

Etiquetas principales:
| Etiqueta | Significado |
|---|---|
| `<table>` | Contenedor de toda la tabla |
| `<tr>` | *table row* — fila |
| `<th>` | *table header* — celda de encabezado (negrita, centrada) |
| `<td>` | *table data* — celda de datos normales |
| `<thead>`, `<tbody>`, `<tfoot>` | Agrupan visualmente encabezado, cuerpo y pie de la tabla |

### 💻 Ejemplo

```html
<table border="1">
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Manzana</td>
            <td>$1.200</td>
        </tr>
        <tr>
            <td>Pan</td>
            <td>$2.500</td>
        </tr>
    </tbody>
</table>
```

### ✏️ Ejercicio 6.1
Crea una tabla de "Horario semanal" con columnas: Hora, Lunes, Martes, Miércoles. Incluye al menos 3 filas de horas distintas y usa `<thead>` y `<tbody>` correctamente.

<details>
<summary>✅ Ver solución</summary>

```html
<table border="1">
    <thead>
        <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>08:00</td>
            <td>Matemáticas</td>
            <td>Historia</td>
            <td>Inglés</td>
        </tr>
        <tr>
            <td>09:00</td>
            <td>Física</td>
            <td>Arte</td>
            <td>Matemáticas</td>
        </tr>
        <tr>
            <td>10:00</td>
            <td>Descanso</td>
            <td>Descanso</td>
            <td>Descanso</td>
        </tr>
    </tbody>
</table>
```
</details>

---

## Módulo 7: Formularios

### 📖 Teoría

Los formularios permiten recibir datos del usuario. La etiqueta contenedora es `<form>`. Elementos comunes:

| Elemento | Uso |
|---|---|
| `<input type="text">` | Texto de una línea |
| `<input type="email">` | Valida formato de correo |
| `<input type="password">` | Oculta el texto escrito |
| `<input type="number">` | Solo números |
| `<input type="radio">` | Selección única entre varias opciones |
| `<input type="checkbox">` | Selección múltiple (sí/no) |
| `<input type="submit">` | Botón para enviar el formulario |
| `<textarea>` | Texto de varias líneas |
| `<select>` + `<option>` | Lista desplegable |
| `<label>` | Etiqueta descriptiva asociada a un campo (mejora accesibilidad) |

**Buena práctica clave:** asocia siempre un `<label>` con su campo usando el atributo `for`, que debe coincidir con el `id` del input.

### 💻 Ejemplo

```html
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre"><br><br>

    <label for="correo">Correo:</label>
    <input type="email" id="correo" name="correo"><br><br>

    <p>Género:</p>
    <input type="radio" id="masc" name="genero">
    <label for="masc">Masculino</label>
    <input type="radio" id="fem" name="genero">
    <label for="fem">Femenino</label><br><br>

    <label for="pais">País:</label>
    <select id="pais" name="pais">
        <option value="co">Colombia</option>
        <option value="mx">México</option>
        <option value="ar">Argentina</option>
    </select><br><br>

    <label for="mensaje">Mensaje:</label><br>
    <textarea id="mensaje" name="mensaje" rows="4" cols="30"></textarea><br><br>

    <input type="submit" value="Enviar">
</form>
```

### ✏️ Ejercicio 7.1
Crea un formulario de "Registro a un evento" con:
- Campo de nombre (texto).
- Campo de correo.
- Campo de edad (número).
- Un `<select>` con 3 opciones de tipo de entrada (General, VIP, Estudiante).
- Un checkbox que diga "Acepto los términos y condiciones".
- Todos los campos con su `<label>` correctamente asociado.
- Un botón de enviar.

<details>
<summary>✅ Ver solución</summary>

```html
<form>
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre"><br><br>

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" name="correo"><br><br>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad"><br><br>

    <label for="tipo">Tipo de entrada:</label>
    <select id="tipo" name="tipo">
        <option value="general">General</option>
        <option value="vip">VIP</option>
        <option value="estudiante">Estudiante</option>
    </select><br><br>

    <input type="checkbox" id="terminos" name="terminos">
    <label for="terminos">Acepto los términos y condiciones</label><br><br>

    <input type="submit" value="Registrarme">
</form>
```
</details>

---

## Módulo 8: HTML semántico

### 📖 Teoría

El HTML semántico usa etiquetas que **describen el propósito** de su contenido, no solo su apariencia. Esto mejora la accesibilidad (lectores de pantalla), el SEO y la mantenibilidad del código.

| Etiqueta | Propósito |
|---|---|
| `<header>` | Encabezado de la página o de una sección |
| `<nav>` | Menú de navegación |
| `<main>` | Contenido principal (único por página) |
| `<section>` | Sección temática de contenido |
| `<article>` | Contenido independiente y autocontenido (un post, una noticia) |
| `<aside>` | Contenido relacionado pero secundario (barra lateral) |
| `<footer>` | Pie de página |

Antes de estas etiquetas, todo se hacía con `<div>` genéricos. Hoy se recomienda usar semántica siempre que exista una etiqueta adecuada, y reservar `<div>`/`<span>` para casos sin significado específico.

### 💻 Ejemplo

```html
<header>
    <h1>Mi Blog de Viajes</h1>
    <nav>
        <a href="#">Inicio</a> | <a href="#">Destinos</a> | <a href="#">Contacto</a>
    </nav>
</header>

<main>
    <article>
        <h2>Mi viaje a Japón</h2>
        <p>Tokio me sorprendió por su mezcla de tradición y tecnología...</p>
    </article>

    <aside>
        <h3>Artículos relacionados</h3>
        <ul>
            <li>Guía de presupuesto para Asia</li>
        </ul>
    </aside>
</main>

<footer>
    <p>&copy; 2026 Mi Blog de Viajes</p>
</footer>
```

### ✏️ Ejercicio 8.1
Reestructura la página de tu película favorita del Ejercicio 2.1 usando etiquetas semánticas:
- `<header>` con el título.
- `<nav>` con 2 enlaces ficticios.
- `<main>` conteniendo un `<article>` con la sinopsis.
- `<aside>` con un dato curioso de la película.
- `<footer>` con un texto de derechos de autor.

<details>
<summary>✅ Ver solución</summary>

```html
<header>
    <h1>Interstellar</h1>
    <nav>
        <a href="#">Sinopsis</a> | <a href="#">Reparto</a>
    </nav>
</header>

<main>
    <article>
        <h2>Sinopsis</h2>
        <p>Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.</p>
    </article>

    <aside>
        <h3>¿Sabías que...?</h3>
        <p>La película usó ecuaciones reales de relatividad general para simular el agujero negro.</p>
    </aside>
</main>

<footer>
    <p>&copy; 2026 - Reseña realizada con fines educativos.</p>
</footer>
```
</details>

---

## Módulo 9: Atributos globales — `id`, `class` y `div`

### 📖 Teoría

- `id`: identificador **único** dentro de la página. Solo un elemento puede tener ese id.
- `class`: identificador que puede **repetirse** en varios elementos, para agruparlos (útil para aplicar el mismo estilo CSS o comportamiento JS a varios elementos).
- `<div>`: contenedor genérico en bloque, sin significado semántico. Se usa para agrupar contenido cuando ninguna otra etiqueta semántica aplica (por ejemplo, para estructurar el diseño visual, algo que perfeccionaremos con CSS).

```html
<div class="tarjeta">
    <h3 id="titulo-1">Producto A</h3>
    <p class="precio">$10.000</p>
</div>

<div class="tarjeta">
    <h3 id="titulo-2">Producto B</h3>
    <p class="precio">$15.000</p>
</div>
```

Aquí, `tarjeta` y `precio` se repiten (son `class`), mientras que `titulo-1` y `titulo-2` son únicos (son `id`).

### ✏️ Ejercicio 9.1
Crea 3 `<div>` con `class="tarjeta-producto"`, cada uno representando un producto de una tienda ficticia (nombre, precio, descripción corta). Cada `<div>` debe tener además un `id` único (`producto-1`, `producto-2`, `producto-3`).

<details>
<summary>✅ Ver solución</summary>

```html
<div class="tarjeta-producto" id="producto-1">
    <h3>Camiseta básica</h3>
    <p>$25.000</p>
    <p>100% algodón, disponible en varios colores.</p>
</div>

<div class="tarjeta-producto" id="producto-2">
    <h3>Pantalón deportivo</h3>
    <p>$45.000</p>
    <p>Tela elástica, ideal para hacer ejercicio.</p>
</div>

<div class="tarjeta-producto" id="producto-3">
    <h3>Zapatillas urbanas</h3>
    <p>$120.000</p>
    <p>Diseño moderno y suela antideslizante.</p>
</div>
```
</details>

---

## Módulo 10: Proyecto integrador final

### 📖 Consigna

Ahora vas a combinar **todo** lo aprendido en una sola página: una **página de perfil personal** (tipo mini currículum/portafolio).

### ✏️ Requisitos del proyecto

Tu archivo `perfil.html` debe incluir:

1. Estructura HTML válida (`DOCTYPE`, `html`, `head` con `title` y `charset`, `body`).
2. `<header>` con tu nombre (`<h1>`) y una frase corta que te describa.
3. `<nav>` con enlaces internos (ancla) a las secciones: Sobre mí, Habilidades, Proyectos, Contacto.
4. Sección **"Sobre mí"** (`<section>` con `id`) con un párrafo y al menos una imagen tuya o de un avatar, con su `alt`.
5. Sección **"Habilidades"** con una lista desordenada de al menos 4 habilidades.
6. Sección **"Proyectos"** con al menos 2 `<article>`, cada uno con título, descripción y un enlace "Ver más" (puede ser ficticio con `#`).
7. Una **tabla** en algún punto (por ejemplo, "Idiomas que hablo" con nivel).
8. Sección **"Contacto"** con un formulario simple: nombre, correo, mensaje y botón de enviar.
9. `<footer>` con un enlace de correo (`mailto:`) y el símbolo de copyright.
10. Uso correcto de `class` en al menos dos elementos repetidos y de `id` en las secciones.

### 💡 Pistas
- Empieza por el esqueleto general (header, nav, main con las secciones vacías, footer) y luego rellena sección por sección.
- Usa comentarios HTML (`<!-- esto es un comentario -->`) para dividir mentalmente cada sección mientras trabajas.
- No te preocupes si se ve "feo": en esta guía **no usamos CSS todavía**. El objetivo es la estructura correcta, no la estética.

<details>
<summary>✅ Ver solución completa de referencia</summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Perfil de María Torres</title>
</head>
<body>

    <!-- HEADER -->
    <header>
        <h1>María Torres</h1>
        <p>Desarrolladora web en formación, apasionada por crear experiencias digitales.</p>
        <nav>
            <a href="#sobre-mi">Sobre mí</a> |
            <a href="#habilidades">Habilidades</a> |
            <a href="#proyectos">Proyectos</a> |
            <a href="#contacto">Contacto</a>
        </nav>
    </header>

    <main>
        <!-- SOBRE MÍ -->
        <section id="sobre-mi">
            <h2>Sobre mí</h2>
            <img src="https://via.placeholder.com/150" alt="Foto de perfil de María Torres" width="150">
            <p>Soy estudiante de desarrollo web, actualmente aprendiendo HTML, CSS y JavaScript para construir mis propios proyectos.</p>
        </section>

        <!-- HABILIDADES -->
        <section id="habilidades">
            <h2>Habilidades</h2>
            <ul>
                <li class="skill">HTML5</li>
                <li class="skill">Organización de contenido</li>
                <li class="skill">Trabajo en equipo</li>
                <li class="skill">Resolución de problemas</li>
            </ul>
        </section>

        <!-- PROYECTOS -->
        <section id="proyectos">
            <h2>Proyectos</h2>
            <article class="proyecto">
                <h3>Página de recetas</h3>
                <p>Sitio con listas de ingredientes y pasos de preparación.</p>
                <a href="#">Ver más</a>
            </article>
            <article class="proyecto">
                <h3>Galería de fotos</h3>
                <p>Página con imágenes de mis viajes favoritos.</p>
                <a href="#">Ver más</a>
            </article>

            <h3>Idiomas</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Idioma</th>
                        <th>Nivel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Español</td>
                        <td>Nativo</td>
                    </tr>
                    <tr>
                        <td>Inglés</td>
                        <td>Intermedio</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- CONTACTO -->
        <section id="contacto">
            <h2>Contacto</h2>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre"><br><br>

                <label for="correo">Correo:</label>
                <input type="email" id="correo" name="correo"><br><br>

                <label for="mensaje">Mensaje:</label><br>
                <textarea id="mensaje" name="mensaje" rows="4" cols="30"></textarea><br><br>

                <input type="submit" value="Enviar mensaje">
            </form>
        </section>
    </main>

    <!-- FOOTER -->
    <footer>
        <p>&copy; 2026 María Torres. <a href="mailto:maria@ejemplo.com">Escríbeme</a></p>
    </footer>

</body>
</html>
```
</details>

---

## 🎯 Autoevaluación final

Antes de pasar a CSS, verifica que puedes responder sin mirar la guía:

1. ¿Cuál es la diferencia entre `<head>` y `<body>`?
2. ¿Para qué sirve el atributo `alt` en una imagen y por qué es importante?
3. ¿Cuándo usarías `id` y cuándo `class`?
4. ¿Qué diferencia hay entre `<section>`, `<article>` y `<div>`?
5. ¿Por qué es buena práctica asociar un `<label>` con su `<input>`?

Si tienes dudas en alguna, vuelve al módulo correspondiente y repite el ejercicio.

---

## 🚀 Siguientes pasos

Con esta base sólida de HTML, el siguiente paso natural es **CSS** para dar estilo visual a todo lo que construiste aquí (colores, tipografía, espaciados, diseño responsivo), y luego **JavaScript** para añadir interactividad (validar formularios, responder a clics, mostrar/ocultar contenido, etc.).

¿Seguimos con la guía de CSS cuando estés listo?
