# Guía de Aprendizaje: Flexbox y Grid
### Los dos sistemas de layout que todo desarrollador web necesita dominar

---

## 📋 Cómo usar esta guía

Esta guía profundiza específicamente en **Flexbox** y **CSS Grid** — las dos herramientas modernas para organizar el contenido de una página. Ya conoces HTML y CSS básico; aquí vamos a dominar el **layout**.

Cada módulo tiene:
- 📖 **Teoría con diagramas**
- 💻 **Ejemplo de código**
- ✏️ **Ejercicio práctico**
- ✅ **Solución comentada**

**Requisito previo:** conocer HTML básico, selectores CSS y el modelo de caja (margin, padding, border).

---

## Módulo 0: ¿Por qué necesitamos Flexbox y Grid?

### 📖 Teoría

Antes de Flexbox y Grid (que llegaron entre 2013 y 2017), alinear elementos en CSS era un dolor de cabeza: se usaban trucos como `float`, `position` o tablas HTML para maquetar. Ninguno fue diseñado realmente para eso.

**Flexbox** y **Grid** sí fueron creados específicamente para **layout** (organizar dónde va cada cosa). La diferencia clave entre ellos:

| | Flexbox | Grid |
|---|---|---|
| **Dimensiones** | 1 dimensión (fila **o** columna) | 2 dimensiones (filas **y** columnas a la vez) |
| **Ideal para** | Barras de navegación, alinear un grupo de botones, centrar contenido | Layouts de página completos, galerías, tableros |
| **Analogía** | Una fila de personas en el cine | Un tablero de ajedrez |

No compiten entre sí: en un proyecto real **se combinan todo el tiempo**, como ya viste en el ejemplo de SONORA (Flexbox en el header, Grid en la galería).

### ✏️ Ejercicio 0.1 (diagnóstico, sin código)
Mira estas 4 situaciones de diseño y para cada una responde si usarías Flexbox o Grid:
1. Una fila de iconos de redes sociales en el footer.
2. Una galería de 12 fotos organizadas en filas y columnas parejas.
3. Centrar un solo botón en medio de la pantalla.
4. El layout completo de una página: header arriba, sidebar a un lado, contenido al otro, footer abajo.

<details>
<summary>✅ Ver respuestas</summary>

1. Flexbox (una sola fila)
2. Grid (dos dimensiones parejas)
3. Flexbox (alineación simple)
4. Grid (layout de página completo en dos dimensiones)
</details>

---

## Módulo 1: Fundamentos de Flexbox — el contenedor y los ejes

### 📖 Teoría

Flexbox se activa en el **contenedor padre**:

```css
.contenedor {
    display: flex;
}
```

Al hacerlo, **todos los hijos directos** se convierten automáticamente en "ítems flex" y se organizan en una fila, uno al lado del otro.

**El concepto más importante de Flexbox: los dos ejes.**

```
                 eje principal (main axis) →
        ┌─────┬─────┬─────┐
  eje   │  1  │  2  │  3  │
transv. │     │     │     │
   ↓    └─────┴─────┴─────┘
```

- El **eje principal** es la dirección en la que se alinean los elementos (por defecto, horizontal).
- El **eje transversal** es perpendicular al principal.

Esto importa porque **cada propiedad de Flexbox controla uno de los dos ejes**, nunca ambos a la vez. Es la fuente de la mayoría de las confusiones al empezar — una vez que identificas cuál es tu eje principal en cada caso, todo se ordena solo.

### ✏️ Ejercicio 1.1
Sin escribir código todavía: si tienes `flex-direction: row` (el valor por defecto), ¿cuál eje es horizontal: el principal o el transversal? ¿Y si cambias a `flex-direction: column`?

<details>
<summary>✅ Ver respuesta</summary>

Con `row`, el eje **principal** es horizontal y el **transversal** es vertical. Con `column`, se invierte: el eje **principal** pasa a ser vertical y el **transversal** horizontal. Esto es clave porque `justify-content` siempre controla el eje principal, y `align-items` siempre el transversal — **sin importar hacia dónde apunten**.
</details>

---

## Módulo 2: Propiedades del contenedor flex

### 📖 Teoría

| Propiedad | Controla | Valores comunes |
|---|---|---|
| `flex-direction` | Dirección del eje principal | `row` (default), `column`, `row-reverse`, `column-reverse` |
| `justify-content` | Alineación en el eje **principal** | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | Alineación en el eje **transversal** | `flex-start`, `center`, `flex-end`, `stretch` (default) |
| `flex-wrap` | Si los ítems pasan a otra línea al no caber | `nowrap` (default), `wrap` |
| `gap` | Espacio entre ítems | cualquier medida, ej. `1rem` |

### 💻 Ejemplo comparativo de `justify-content`

```css
.fila { display: flex; gap: 0.5rem; }

.a { justify-content: flex-start; }   /* [1][2][3].......... */
.b { justify-content: center; }       /* .....[1][2][3]..... */
.c { justify-content: space-between; }/* [1]......[2]......[3] */
```

### 💻 Ejemplo: centrar completamente un elemento

```css
.contenedor {
    display: flex;
    justify-content: center; /* centra en el eje principal (horizontal) */
    align-items: center;     /* centra en el eje transversal (vertical) */
    height: 100vh;
}
```
Este combo (`justify-content: center` + `align-items: center`) es probablemente el código CSS más copiado y pegado del mundo — resuelve el clásico problema de "centrar algo verticalmente", que antes de Flexbox era sorprendentemente difícil.

### ✏️ Ejercicio 2.1
Crea 3 `<div class="caja">` dentro de un contenedor. Haz que:
- Se muestren en fila con `gap` de `1rem`.
- Estén distribuidos con `space-between` (el primero pegado a la izquierda, el último a la derecha).
- Si reduces el ancho de la ventana y no caben, que pasen a una nueva línea (`flex-wrap`).

<details>
<summary>✅ Ver solución</summary>

```html
<div class="contenedor">
    <div class="caja">1</div>
    <div class="caja">2</div>
    <div class="caja">3</div>
</div>
```

```css
.contenedor {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.caja {
    width: 150px;
    padding: 1rem;
    background-color: #eee;
    text-align: center;
}
```
</details>

### ✏️ Ejercicio 2.2 (reto)
Crea una barra de navegación donde el logo esté a la izquierda y 3 enlaces a la derecha, todo alineado verticalmente al centro (aunque el logo tenga una altura distinta a los enlaces).

<details>
<summary>✅ Ver solución</summary>

```html
<header class="navbar">
    <div class="logo">MiSitio</div>
    <nav>
        <a href="#">Inicio</a>
        <a href="#">Nosotros</a>
        <a href="#">Contacto</a>
    </nav>
</header>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #222;
}

.navbar a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;
}
```
</details>

---

## Módulo 3: Propiedades de los ítems flex

### 📖 Teoría

Estas propiedades se aplican **a los hijos**, no al contenedor:

| Propiedad | Uso |
|---|---|
| `flex-grow` | Cuánto "crece" un ítem para ocupar espacio libre, relativo a los demás (número, default `0`) |
| `flex-shrink` | Cuánto se "encoge" un ítem si falta espacio (default `1`) |
| `flex-basis` | Tamaño inicial del ítem antes de repartir espacio sobrante |
| `align-self` | Sobrescribe `align-items` para un ítem específico |
| `order` | Cambia el orden visual sin tocar el HTML (default `0`) |

**El atajo `flex` combina las tres primeras:**
```css
.item {
    flex: 1; /* equivale a flex-grow:1; flex-shrink:1; flex-basis:0; */
}
```

### 💻 Ejemplo: repartir espacio proporcionalmente

```css
.contenedor { display: flex; }

.item-a { flex: 1; } /* ocupa 1 parte */
.item-b { flex: 2; } /* ocupa 2 partes (el doble que item-a) */
.item-c { flex: 1; } /* ocupa 1 parte */
```
Resultado visual (proporciones, no tamaño exacto):
```
┌────────┬────────────────┬────────┐
│   A    │        B        │   C    │
└────────┴────────────────┴────────┘
```

### ✏️ Ejercicio 3.1
Crea 3 cajas en fila donde la del medio sea el doble de ancha que las otras dos, usando `flex`.

<details>
<summary>✅ Ver solución</summary>

```css
.contenedor { display: flex; gap: 0.5rem; }
.caja-1, .caja-3 { flex: 1; }
.caja-2 { flex: 2; }
```
</details>

### ✏️ Ejercicio 3.2
En una fila de 3 tarjetas alineadas con `align-items: flex-start`, haz que **solo la tarjeta del medio** se estire para ocupar toda la altura disponible, usando `align-self`.

<details>
<summary>✅ Ver solución</summary>

```css
.contenedor {
    display: flex;
    align-items: flex-start;
    height: 300px;
}

.tarjeta-media {
    align-self: stretch;
}
```
</details>

---

## Módulo 4: Reto de práctica — Flexbox solo

### ✏️ Ejercicio 4.1 (integrador de Flexbox)
Construye una tarjeta de perfil con esta disposición usando **solo Flexbox** (sin Grid todavía):

```
┌──────────────────────────────────┐
│  [Avatar]   Nombre                │
│             Profesión             │
│             [Botón Seguir]        │
└──────────────────────────────────┘
```

Requisitos:
- El avatar a la izquierda, el bloque de texto a la derecha (Flexbox en fila).
- Dentro del bloque de texto, nombre/profesión/botón apilados verticalmente (Flexbox en columna, anidado dentro del primero).
- Todo alineado verticalmente al centro respecto al avatar.

<details>
<summary>✅ Ver solución</summary>

```html
<div class="tarjeta-perfil">
    <img src="avatar.jpg" alt="Foto de perfil" class="avatar">
    <div class="info">
        <h3>Laura Gómez</h3>
        <p>Diseñadora UX/UI</p>
        <button>Seguir</button>
    </div>
</div>
```

```css
.tarjeta-perfil {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}
```

Este patrón —**flex anidado dentro de flex, cambiando la dirección**— es extremadamente común en interfaces reales.
</details>

---

## Módulo 5: Fundamentos de Grid — filas, columnas y la unidad `fr`

### 📖 Teoría

Grid se activa igual que Flexbox, en el contenedor:
```css
.contenedor { display: grid; }
```

Pero a diferencia de Flexbox, en Grid **defines explícitamente** cuántas columnas y filas quieres, y de qué tamaño:

```css
.contenedor {
    display: grid;
    grid-template-columns: 200px 200px 200px; /* 3 columnas de 200px */
}
```

**La unidad `fr` (fracción)** reparte el espacio disponible proporcionalmente, similar a `flex-grow`:

```css
.contenedor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 columnas iguales, se ajustan al ancho disponible */
}
```

```
┌────────┬────────┬────────┐
│  1fr   │  1fr   │  1fr   │
└────────┴────────┴────────┘
```

Puedes mezclar unidades fijas y flexibles:
```css
grid-template-columns: 200px 1fr 1fr; /* una columna fija + dos flexibles */
```

**El atajo `repeat()`** evita escribir lo mismo muchas veces:
```css
grid-template-columns: repeat(3, 1fr); /* igual a: 1fr 1fr 1fr */
```

### ✏️ Ejercicio 5.1
Crea una grilla de 6 cajas en 3 columnas iguales, con `gap` de `1rem`.

<details>
<summary>✅ Ver solución</summary>

```html
<div class="galeria">
    <div class="caja">1</div>
    <div class="caja">2</div>
    <div class="caja">3</div>
    <div class="caja">4</div>
    <div class="caja">5</div>
    <div class="caja">6</div>
</div>
```

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.caja {
    background-color: #eee;
    padding: 2rem;
    text-align: center;
}
```
</details>

### ✏️ Ejercicio 5.2
Crea un layout con una columna lateral fija de `250px` y el resto del espacio (`1fr`) para el contenido principal.

<details>
<summary>✅ Ver solución</summary>

```css
.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
}
```
</details>

---

## Módulo 6: Propiedades del contenedor grid

### 📖 Teoría

| Propiedad | Uso |
|---|---|
| `grid-template-columns` | Define columnas |
| `grid-template-rows` | Define filas |
| `gap` (o `row-gap`/`column-gap`) | Espacio entre celdas |
| `grid-template-areas` | Nombra zonas del layout con palabras, en vez de números |
| `justify-items` | Alinea el contenido de cada celda horizontalmente |
| `align-items` | Alinea el contenido de cada celda verticalmente |

**`grid-template-areas` es la propiedad más querida de Grid** porque hace que el CSS se "lea" como un dibujo del layout:

```css
.pagina {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

.pagina header  { grid-area: header; }
.pagina .sidebar{ grid-area: sidebar; }
.pagina main    { grid-area: main; }
.pagina footer  { grid-area: footer; }
```

Cada palabra repetida en el "dibujo" de `grid-template-areas` indica que esa zona ocupa varias celdas — así, `header header` significa que el header ocupa las 2 columnas.

### ✏️ Ejercicio 6.1
Usando `grid-template-areas`, crea el esqueleto de una página con: header arriba (ancho completo), sidebar a la izquierda, contenido a la derecha, footer abajo (ancho completo). Verifica que el resultado visual coincida con la disposición del "dibujo" en el CSS.

<details>
<summary>✅ Ver solución</summary>

```html
<div class="pagina">
    <header>Header</header>
    <aside class="sidebar">Sidebar</aside>
    <main>Contenido principal</main>
    <footer>Footer</footer>
</div>
```

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
    gap: 0.5rem;
}

.pagina header  { grid-area: header; background: #6f4e37; color: white; padding: 1rem; }
.pagina .sidebar{ grid-area: sidebar; background: #eee; padding: 1rem; }
.pagina main    { grid-area: main; padding: 1rem; }
.pagina footer  { grid-area: footer; background: #333; color: white; padding: 1rem; text-align: center; }
```
</details>

---

## Módulo 7: Ítems en Grid — expandir y posicionar

### 📖 Teoría

Un ítem puede ocupar **más de una celda** usando `grid-column` o `grid-row` con la palabra clave `span`:

```css
.item-destacado {
    grid-column: span 2; /* ocupa 2 columnas en vez de 1 */
}
```

```
┌──────┬──────┬──────┐
│  1   │      2       │   ← el ítem 2 ocupa 2 columnas (span 2)
├──────┼──────┼──────┤
│  3   │  4   │  5   │
└──────┴──────┴──────┘
```

También puedes posicionar un ítem indicando en qué línea empieza y termina:
```css
.item {
    grid-column: 1 / 3; /* desde la línea 1 hasta la línea 3 (ocupa 2 columnas) */
}
```

### ✏️ Ejercicio 7.1
Crea una grilla de 3 columnas con 5 ítems, donde el **primer** ítem ocupe las 3 columnas completas (como un "banner" destacado arriba de una galería normal).

<details>
<summary>✅ Ver solución</summary>

```html
<div class="galeria">
    <div class="destacado">Destacado</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</div>
```

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.destacado {
    grid-column: span 3;
    background-color: #ffd166;
    padding: 2rem;
    text-align: center;
}
```
</details>

### ✏️ Ejercicio 7.2 (reto)
Sobre la misma grilla de 3 columnas, haz que el **segundo** ítem ocupe 2 filas de alto (usa `grid-row: span 2` y define `grid-auto-rows` con una altura fija para que se note el efecto).

<details>
<summary>✅ Ver solución</summary>

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    gap: 1rem;
}

.item-alto {
    grid-row: span 2;
}
```
</details>

---

## Módulo 8: Flexbox vs Grid — ¿cuál uso y cuándo?

### 📖 Tabla de decisión rápida

| Si necesitas... | Usa |
|---|---|
| Alinear una fila de botones o iconos | Flexbox |
| Centrar un elemento dentro de otro | Flexbox |
| Una barra de navegación | Flexbox |
| Una galería con filas y columnas parejas | Grid |
| El esqueleto general de una página completa | Grid |
| Que el contenido decida su propio tamaño y se acomode | Flexbox |
| Que tú decidas de antemano la estructura exacta de filas/columnas | Grid |
| Combinar ambos: layout general en Grid, y dentro de cada sección usar Flexbox para alinear detalles | ¡Así se hace en proyectos reales! |

### 💻 Ejemplo de combinación real

```css
/* Grid para el layout general de la página */
.pagina {
    display: grid;
    grid-template-rows: auto 1fr auto;
}

/* Flexbox para alinear el contenido DENTRO del header */
.pagina header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Grid de nuevo para la galería DENTRO del main */
.pagina main .galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

Esta es exactamente la lógica detrás del ejemplo de la landing page de SONORA que ya revisamos: Grid para el esqueleto y la galería, Flexbox para la navbar y la sección "Sobre la banda".

---

## Módulo 9: Proyecto integrador

### 📖 Consigna

Vuelve a tu landing page del reto "Landing Page de tu Pasión" (o crea una nueva de práctica) y verifica/mejora estos puntos usando lo aprendido en esta guía:

1. El `header` usa Flexbox con `justify-content: space-between` para separar logo y navegación.
2. La navegación, si tiene varios enlaces, usa `gap` en vez de márgenes individuales en cada `<a>`.
3. La sección de galería usa Grid con `repeat()` y la unidad `fr`.
4. Al menos un ítem de la galería usa `grid-column: span 2` para destacarse visualmente del resto.
5. Alguna sección secundaria (ej. "Sobre mí" o "Sobre la banda") combina una imagen y texto usando Flexbox, con `align-items: center`.
6. El layout general de la página (opcional, nivel avanzado) usa `grid-template-areas` para definir header/main/footer en vez de que cada uno sea un bloque independiente.

### 🎯 Autoevaluación final

1. ¿Cuál es la diferencia entre el eje principal y el eje transversal en Flexbox?
2. ¿Qué hace la unidad `fr` en Grid y en qué se parece a `flex-grow`?
3. ¿Cuándo elegirías Grid en vez de Flexbox para una galería de imágenes?
4. ¿Qué hace `grid-column: span 2`?
5. Da un ejemplo de un componente real donde combinarías Flexbox y Grid juntos.

---

## 🚀 Recursos para seguir practicando

- **Flexbox Froggy** y **Grid Garden**: juegos gratuitos en línea donde practicas Flexbox y Grid moviendo personajes con código real — ideales para reforzar lo aprendido aquí de forma entretenida.
- Vuelve al Módulo 8 cada vez que dudes si usar Flexbox o Grid en un proyecto nuevo — con la práctica, la decisión se vuelve automática.
