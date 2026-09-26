# Guía de Aprendizaje: Diseño Responsive
### Que tu página se vea bien en cualquier pantalla

---

## 📋 Cómo usar esta guía

Ya sabes HTML, CSS, Flexbox y Grid. Esta guía se enfoca en un solo problema: **hacer que esa página se vea bien tanto en un celular de 360px de ancho como en un monitor de 1920px**. No es una herramienta nueva — es una forma de **pensar** el CSS que ya conoces.

Cada módulo tiene:
- 📖 **Teoría**
- 💻 **Ejemplo de código**
- ✏️ **Ejercicio práctico**
- ✅ **Solución comentada**

**Requisito previo:** HTML/CSS básico, Flexbox y Grid (guía anterior).

---

## Módulo 0: ¿Qué es el diseño responsive y por qué importa?

### 📖 Teoría

En 2010 la mayoría de las páginas se diseñaban pensando en una sola pantalla (la del computador de escritorio). Hoy, más de la mitad del tráfico de internet viene de celulares, y el resto se reparte entre tablets, laptops y monitores grandes.

**Diseño responsive** significa que una **misma página**, con **el mismo código**, se adapta automáticamente al tamaño de pantalla de quien la visita — sin necesidad de crear una "versión móvil" y una "versión de escritorio" por separado.

```
📱 360px          📱 414px         💻 1024px              🖥️ 1920px
┌────┐           ┌─────┐          ┌───────────────┐      ┌──────────────────────┐
│    │           │     │          │               │      │                      │
│    │           │     │          │               │      │                      │
└────┘           └─────┘          └───────────────┘      └──────────────────────┘
     Todos usan el MISMO archivo HTML y el MISMO archivo CSS
```

Ya usaste piezas de esto en las guías anteriores (Flexbox que se envuelve, Grid que cambia de columnas). Aquí vamos a formalizar **todas las herramientas** que hacen esto posible, y sobre todo, **la forma correcta de pensarlo desde el inicio de un proyecto**.

---

## Módulo 1: La meta etiqueta viewport (el interruptor que lo activa todo)

### 📖 Teoría

Sin esta línea en el `<head>`, **nada de lo que hagas en esta guía va a funcionar en un celular real**:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**¿Por qué es necesaria?** Por defecto, los navegadores móviles simulan tener una pantalla ancha (parecida a un escritorio) y luego reducen todo con zoom para que quepa — así, tu página se ve "encogida" y hay que hacer zoom manualmente para leerla. Esta etiqueta le dice al navegador: *"usa el ancho real del dispositivo, y no apliques zoom inicial"*.

| Parte | Significado |
|---|---|
| `width=device-width` | El ancho del viewport será igual al ancho real del dispositivo |
| `initial-scale=1.0` | El nivel de zoom inicial es 100% (sin zoom) |

### ✏️ Ejercicio 1.1
Abre cualquier proyecto tuyo anterior (por ejemplo, tu landing page) y verifica si tiene esta etiqueta en el `<head>`. Si no la tiene, agrégala. Luego, en las herramientas de desarrollador del navegador (`F12` → ícono de dispositivo móvil), compara cómo se ve la página con y sin esta línea.

<details>
<summary>✅ Qué deberías observar</summary>

Sin la etiqueta viewport, la página probablemente se vea diminuta en la simulación de celular (como si estuvieras viendo una página de escritorio a lo lejos). Con la etiqueta, el contenido debería ocupar el ancho real de la pantalla simulada, con el texto en un tamaño legible sin necesidad de hacer zoom.
</details>

---

## Módulo 2: Unidades — relativas vs. absolutas

### 📖 Teoría

Ya viste algunas de estas en la guía de CSS. Aquí las repasamos con foco en **cuál conviene según el caso**:

| Unidad | Tipo | Se recalcula respecto a... | Úsala para... |
|---|---|---|---|
| `px` | Absoluta | Nada, es fija | Bordes finos, sombras — detalles que no deben cambiar |
| `%` | Relativa | El tamaño del elemento padre | Anchos de columnas, contenedores fluidos |
| `em` | Relativa | El tamaño de fuente del elemento padre | Espaciados que dependen del tamaño de letra local |
| `rem` | Relativa | El tamaño de fuente de la raíz (`html`) | Tipografía y espaciados generales (más predecible que `em`) |
| `vw` / `vh` | Relativa | El ancho/alto de la ventana del navegador | Elementos que deben ocupar una fracción exacta de la pantalla |

**Las funciones modernas `min()`, `max()` y `clamp()`** permiten combinar unidades de forma inteligente, evitando muchas media queries:

```css
h1 {
    /* Nunca más pequeño que 1.5rem, nunca más grande que 3rem,
       y en el rango intermedio, crece con el ancho de la pantalla (5vw) */
    font-size: clamp(1.5rem, 5vw, 3rem);
}
```

Esto se llama **tipografía fluida**: el texto crece y se encoge suavemente con la pantalla, en vez de saltar bruscamente en un punto de quiebre fijo.

### ✏️ Ejercicio 2.1
Define el tamaño de un `<h1>` usando `clamp()` para que nunca sea menor a `24px` ni mayor a `48px`, y que fluya con el ancho de pantalla en el medio (pista: convierte a `rem` para los límites, y usa `vw` para la parte flexible).

<details>
<summary>✅ Ver solución</summary>

```css
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem); /* 24px - 48px, con base de 16px */
}
```
</details>

---

## Módulo 3: Media Queries — sintaxis y condiciones

### 📖 Teoría

Ya usaste media queries en guías anteriores. Vamos a ver la sintaxis completa y otras condiciones además del ancho:

```css
@media (min-width: 768px) {
    /* estilos que aplican SOLO si la pantalla mide 768px o más */
}

@media (max-width: 767px) {
    /* estilos que aplican SOLO si la pantalla mide 767px o menos */
}

@media (min-width: 768px) and (max-width: 1023px) {
    /* estilos que aplican SOLO en ese rango específico (ej: tablets) */
}

@media (orientation: landscape) {
    /* estilos que aplican cuando el dispositivo está en horizontal */
}
```

**Combina condiciones con `and`**, y usa comas para "o" (aplica si se cumple cualquiera de las condiciones):
```css
@media (max-width: 600px), (orientation: portrait) {
    /* aplica si el ancho es ≤600px, O si está en vertical (o ambos) */
}
```

### ✏️ Ejercicio 3.1
Escribe una media query que aplique **únicamente** cuando la pantalla esté entre 600px y 900px de ancho (ni menos, ni más), y que dentro cambie el `background-color` del `body` a un color de tu elección (solo para comprobar visualmente que funciona).

<details>
<summary>✅ Ver solución</summary>

```css
@media (min-width: 600px) and (max-width: 900px) {
    body {
        background-color: #fff3cd;
    }
}
```
</details>

---

## Módulo 4: Mobile First vs. Desktop First

### 📖 Teoría

Hay dos formas de organizar tus media queries:

**Desktop First (enfoque antiguo):** escribes los estilos pensando en escritorio primero, y usas `max-width` para "achicar" cosas en pantallas pequeñas.
```css
.caja { width: 33%; }              /* escritorio: 3 columnas */

@media (max-width: 768px) {
    .caja { width: 50%; }          /* tablet: 2 columnas */
}

@media (max-width: 480px) {
    .caja { width: 100%; }         /* móvil: 1 columna */
}
```

**Mobile First (enfoque recomendado hoy):** escribes los estilos base pensando en celular, y usas `min-width` para "expandir" a medida que hay más espacio.
```css
.caja { width: 100%; }             /* base = móvil: 1 columna */

@media (min-width: 480px) {
    .caja { width: 50%; }          /* tablet: 2 columnas */
}

@media (min-width: 768px) {
    .caja { width: 33%; }          /* escritorio: 3 columnas */
}
```

**¿Por qué se recomienda Mobile First?**
1. Obliga a priorizar qué es realmente importante en pantallas pequeñas (donde el espacio es escaso), en vez de simplemente "achicar todo".
2. El código base es más simple y liviano, y solo se añaden reglas adicionales para pantallas más grandes.
3. Es coherente con el hecho de que la mayoría de las visitas hoy vienen de celulares.

### ✏️ Ejercicio 4.1
Toma este bloque de CSS escrito en Desktop First y conviértelo a Mobile First:

```css
.tarjeta { display: flex; flex-direction: row; }

@media (max-width: 700px) {
    .tarjeta { flex-direction: column; }
}
```

<details>
<summary>✅ Ver solución</summary>

```css
.tarjeta { flex-direction: column; } /* base = móvil */

@media (min-width: 701px) {
    .tarjeta { flex-direction: row; } /* se activa en pantallas más grandes */
}
```

Nota que también se puede simplificar sin usar `display: flex` dos veces si ya está en la regla base — solo se sobreescribe lo que cambia.
</details>

---

## Módulo 5: Definir breakpoints con criterio (no por dispositivo)

### 📖 Teoría

Un error común de principiante es definir breakpoints pensando en dispositivos específicos ("este es el ancho exacto del iPhone 14"). **Es una mala práctica**, porque:
- Existen cientos de dispositivos distintos, con anchos distintos — es imposible cubrirlos todos.
- Los dispositivos cambian cada año; tu CSS no debería depender de un modelo específico.

**La regla correcta: define breakpoints donde tu propio diseño empieza a verse mal**, no donde termina un dispositivo. Redimensiona la ventana del navegador poco a poco y observa en qué ancho el texto se ve apretado, o la galería se ve demasiado angosta — ese es tu breakpoint real.

Aun así, existen rangos de referencia ampliamente usados como punto de partida:

| Rango aproximado | Se suele llamar |
|---|---|
| < 600px | Móvil |
| 600px – 900px | Tablet |
| 900px – 1200px | Laptop / escritorio pequeño |
| > 1200px | Escritorio grande |

### ✏️ Ejercicio 5.1
Toma tu landing page y ve reduciendo el ancho de la ventana lentamente desde el máximo hasta el mínimo. Anota (en un comentario dentro de tu CSS) en qué anchos exactos el diseño empieza a "romperse" — esos son los breakpoints que deberías usar, en vez de copiar los de la tabla de arriba sin pensar.

<details>
<summary>✅ Qué se espera de este ejercicio</summary>

No hay una única respuesta correcta — el objetivo es que el estudiante practique **observar su propio diseño** en vez de memorizar números. Es normal que distintos proyectos tengan breakpoints ligeramente distintos.
</details>

---

## Módulo 6: Imágenes responsivas

### 📖 Teoría

La regla más básica e importante para que las imágenes nunca se salgan de su contenedor:

```css
img {
    max-width: 100%;
    height: auto;
}
```

Esto evita que una imagen grande "rompa" el layout en pantallas pequeñas, y mantiene su proporción automáticamente.

**`object-fit`** controla cómo se recorta una imagen dentro de un contenedor de tamaño fijo (muy útil en galerías de Grid):

| Valor | Comportamiento |
|---|---|
| `cover` | Rellena todo el contenedor, recortando lo que sobre (mantiene proporción) |
| `contain` | Se ajusta completa dentro del contenedor, puede dejar espacío vacío |
| `fill` | Estira la imagen para llenar el contenedor (puede deformarla) |

```css
.galeria img {
    width: 100%;
    height: 200px;
    object-fit: cover; /* todas las fotos quedan del mismo tamaño, sin deformarse */
}
```

### ✏️ Ejercicio 6.1
Crea una galería de 3 imágenes de distintas proporciones (usa imágenes reales o de ejemplo). Aplica `object-fit: cover` para que las 3 se vean del mismo tamaño exacto en la grilla, sin deformarse.

<details>
<summary>✅ Ver solución</summary>

```html
<div class="galeria">
    <img src="foto1.jpg" alt="Descripción 1">
    <img src="foto2.jpg" alt="Descripción 2">
    <img src="foto3.jpg" alt="Descripción 3">
</div>
```

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.galeria img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
}
```
</details>

---

## Módulo 7: Patrones responsive comunes

### 📖 Teoría

Tres patrones que verás una y otra vez en proyectos reales:

**1. Navbar que colapsa** (de fila en escritorio a columna en móvil):
```css
nav { display: flex; flex-direction: column; }

@media (min-width: 768px) {
    nav { flex-direction: row; }
}
```

**2. Grid que cambia de columnas:**
```css
.galeria { display: grid; grid-template-columns: 1fr; }

@media (min-width: 600px) {
    .galeria { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1000px) {
    .galeria { grid-template-columns: repeat(3, 1fr); }
}
```

**3. Grid "inteligente" sin media queries** (técnica avanzada): usando `auto-fit` y `minmax()`, la grilla decide sola cuántas columnas caben, sin que tengas que escribir ninguna media query:
```css
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}
```
Esto le dice al navegador: *"pon tantas columnas de mínimo 200px como quepan, y repártelas por igual (1fr) usando el espacio sobrante"*. Es una forma elegante de resolver responsive sin escribir ni un solo `@media`.

### ✏️ Ejercicio 7.1
Reemplaza una galería que ya tengas con media queries fijas por la versión con `auto-fit` y `minmax()`. Compara el comportamiento: reduce y agranda la ventana lentamente y observa qué tan distinto se siente respecto a los "saltos" de las media queries tradicionales.

<details>
<summary>✅ Ver solución</summary>

```css
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
}
```

Nota cómo el número de columnas cambia de forma continua a medida que redimensionas, en vez de saltar en puntos exactos como con media queries.
</details>

---

## Módulo 8: Cómo probar tu diseño responsive

### 📖 Teoría

No necesitas tener 10 dispositivos físicos para probar tu responsive. Dos formas simples:

**1. Redimensionar la ventana del navegador** arrastrando el borde — funciona para cambios generales, pero no simula exactamente un celular real (barra de direcciones, teclado, etc.).

**2. Herramientas de desarrollador (recomendado):**
- Presiona `F12` (o clic derecho → Inspeccionar).
- Haz clic en el ícono de dispositivo móvil/tablet (usualmente arriba a la izquierda del panel).
- Elige un dispositivo de la lista, o ingresa un ancho personalizado.
- Muchos navegadores muestran una regla con el ancho en píxeles en tiempo real, útil para identificar tus breakpoints (Módulo 5).

### ✏️ Ejercicio 8.1
Abre tu landing page en las herramientas de desarrollador, simula 3 anchos distintos (celular pequeño, tablet, escritorio) y toma una captura de pantalla de cada uno. Compáralas: ¿el contenido se mantiene legible y bien distribuido en los tres casos?

---

## Módulo 9: Proyecto integrador — auditoría responsive completa

### 📖 Consigna

Vuelve a tu landing page (la del reto "Landing Page de tu Pasión") y realiza una auditoría completa usando el checklist de abajo. Corrige lo que encuentres.

### ✅ Checklist de auditoría

1. ¿Existe la etiqueta `<meta name="viewport">` en el `<head>`?
2. ¿El CSS está escrito con enfoque Mobile First (estilos base = móvil, `min-width` para expandir)?
3. ¿Todas las imágenes tienen `max-width: 100%` (o están dentro de un contenedor de Grid con `object-fit`)?
4. ¿Los breakpoints fueron elegidos observando dónde se rompe el diseño, y no copiados de una tabla sin pensar?
5. ¿El texto del `<h1>` usa una unidad relativa o `clamp()`, en vez de un tamaño fijo en `px` que se ve enorme en celular?
6. ¿Probaste la página en al menos 3 anchos distintos con las herramientas de desarrollador?
7. (Avanzado) ¿Alguna sección de galería usa `repeat(auto-fit, minmax(...))` en vez de media queries fijas?

### 🎯 Autoevaluación final

1. ¿Qué pasaría si olvidas la etiqueta `<meta viewport>`?
2. ¿Cuál es la diferencia entre Mobile First y Desktop First, y por qué se recomienda el primero?
3. ¿Qué hace `object-fit: cover` y cuándo lo usarías?
4. ¿Por qué no se recomienda definir breakpoints según dispositivos específicos?
5. ¿Qué ventaja tiene `repeat(auto-fit, minmax(...))` frente a usar media queries fijas para una galería?

---

## 🚀 Siguientes pasos

Con HTML, CSS, Flexbox, Grid y ahora Responsive Design, ya tienes el conjunto completo de habilidades para construir páginas web reales que funcionen bien en cualquier dispositivo. El siguiente nivel natural es reforzar todo esto con **JavaScript** (que ya viste en una guía anterior) para agregar interactividad — por ejemplo, un menú hamburguesa que se abre/cierra con un clic en la versión móvil de tu navbar.
