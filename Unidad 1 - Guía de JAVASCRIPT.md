# Guía Completa de JavaScript para Principiantes
### Dale interactividad real a tus páginas web

---

## 📋 Cómo usar esta guía

Esta es la tercera y última guía de la serie (HTML → CSS → **JavaScript**). Aquí es donde tu página de perfil personal cobra vida: reaccionará a clics, validará formularios y mostrará/ocultará contenido dinámicamente.

Cada módulo tiene:
- 📖 **Teoría breve**
- 💻 **Ejemplo de código**
- ✏️ **Ejercicio práctico**
- ✅ **Solución comentada**

**Requisito previo:** haber completado las guías de HTML y CSS.

**Cómo probar tu código:** abre tu archivo `.html` en el navegador, presiona `F12` (o clic derecho → "Inspeccionar") y ve a la pestaña **Console**. Ahí verás los resultados de `console.log()` y cualquier error.

---

## Módulo 1: ¿Qué es JavaScript y cómo se incluye?

### 📖 Teoría

A diferencia de HTML (estructura) y CSS (estilo), **JavaScript es un lenguaje de programación real**: tiene variables, condicionales, bucles, funciones. Se ejecuta en el navegador y le da **comportamiento** a la página: reaccionar a clics, validar datos, modificar contenido sin recargar la página, etc.

**Formas de incluir JavaScript en HTML:**

**1. Interno**, dentro de una etiqueta `<script>`:
```html
<body>
    <script>
        console.log("Hola desde JavaScript");
    </script>
</body>
```

**2. Externo (recomendado)**, en un archivo `.js` separado:
```html
<body>
    <!-- ... contenido de la página ... -->
    <script src="script.js"></script>
</body>
```

**Regla clave: coloca el `<script>` justo antes de cerrar `</body>`**, o usa el atributo `defer`. Esto garantiza que el HTML ya esté cargado en memoria cuando tu JavaScript intente manipularlo.

```html
<head>
    <script src="script.js" defer></script>
</head>
```

`console.log()` es tu mejor amigo mientras aprendes: imprime valores en la consola del navegador para que puedas ver qué está pasando en tu código.

### ✏️ Ejercicio 1.1
Crea un archivo `script.js` enlazado a un `index.html`. Dentro del `.js`, usa `console.log()` para imprimir un mensaje de bienvenida y, en otra línea, el resultado de una suma simple (por ejemplo, `5 + 3`). Ábrelo en el navegador y verifica en la consola (F12) que ambos mensajes aparecen.

<details>
<summary>✅ Ver solución</summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 1.1</title>
</head>
<body>
    <h1>Revisa la consola (F12)</h1>
    <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
console.log("¡Bienvenido a JavaScript!");
console.log(5 + 3);
```
</details>

---

## Módulo 2: Variables y tipos de datos

### 📖 Teoría

Una **variable** guarda un valor para usarlo más adelante. En JavaScript moderno se usan `let` y `const`:

| Palabra clave | Uso |
|---|---|
| `let` | Variable cuyo valor **puede cambiar** después |
| `const` | Variable cuyo valor **no puede reasignarse** (constante) |
| `var` | Forma antigua, evítala en código nuevo |

**Regla práctica:** usa `const` por defecto; cambia a `let` solo si sabes que el valor necesitará modificarse.

```javascript
let edad = 25;
edad = 26; // válido

const nombre = "Ana";
nombre = "Luis"; // ❌ Error: no se puede reasignar una const
```

**Tipos de datos primitivos:**

| Tipo | Ejemplo |
|---|---|
| `String` (texto) | `"Hola"`, `'Hola'`, `` `Hola` `` |
| `Number` (número) | `42`, `3.14` |
| `Boolean` (verdadero/falso) | `true`, `false` |
| `undefined` | Variable declarada sin valor asignado |
| `null` | Ausencia de valor, asignada intencionalmente |

**Template literals** (con backticks `` ` ``) permiten insertar variables dentro de un texto fácilmente:
```javascript
const nombre = "Ana";
const edad = 25;
console.log(`Me llamo ${nombre} y tengo ${edad} años.`);
```

### ✏️ Ejercicio 2.1
Declara variables para: tu nombre (`const`), tu edad (`let`), y si eres estudiante o no (`boolean`). Luego, usa un template literal para imprimir una oración completa combinando las tres variables.

<details>
<summary>✅ Ver solución</summary>

```javascript
const nombre = "Carlos";
let edad = 22;
const esEstudiante = true;

console.log(`Me llamo ${nombre}, tengo ${edad} años y ${esEstudiante ? "soy" : "no soy"} estudiante.`);
```
</details>

---

## Módulo 3: Operadores y condicionales

### 📖 Teoría

**Operadores de comparación:**

| Operador | Significado |
|---|---|
| `===` | Igual (compara valor **y** tipo — el recomendado) |
| `!==` | Distinto |
| `>` `<` `>=` `<=` | Mayor, menor, mayor o igual, menor o igual |

> ⚠️ Usa siempre `===` y `!==` en vez de `==`/`!=`. Estos últimos hacen conversiones de tipo inesperadas (`"5" == 5` es `true`, algo confuso).

**Operadores lógicos:**

| Operador | Significado |
|---|---|
| `&&` | Y (ambas condiciones deben ser verdaderas) |
| `\|\|` | O (al menos una condición debe ser verdadera) |
| `!` | Negación |

**Estructura condicional `if / else if / else`:**

```javascript
const edad = 17;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else if (edad >= 13) {
    console.log("Eres adolescente.");
} else {
    console.log("Eres niño.");
}
```

**`switch`** (alternativa cuando comparas una misma variable contra muchos valores):

```javascript
const dia = "lunes";

switch (dia) {
    case "sabado":
    case "domingo":
        console.log("Es fin de semana");
        break;
    default:
        console.log("Es día laboral");
}
```

### ✏️ Ejercicio 3.1
Crea una variable `nota` (número del 0 al 100) y escribe un condicional que imprima:
- "Excelente" si es 90 o más.
- "Aprobado" si es entre 60 y 89.
- "Reprobado" si es menor a 60.

<details>
<summary>✅ Ver solución</summary>

```javascript
const nota = 75;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 60) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
```
</details>

### ✏️ Ejercicio 3.2
Usando operadores lógicos, escribe un condicional que imprima "Puedes entrar" solo si una persona `tieneEntrada` (boolean) **Y** su `edad` es mayor o igual a 18.

<details>
<summary>✅ Ver solución</summary>

```javascript
const tieneEntrada = true;
const edad = 20;

if (tieneEntrada && edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}
```
</details>

---

## Módulo 4: Bucles

### 📖 Teoría

Los bucles repiten una acción varias veces.

**`for`** — cuando sabes cuántas veces se repetirá:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // imprime 0, 1, 2, 3, 4
}
```
Se compone de: **inicialización** (`let i = 0`), **condición** (`i < 5`), **incremento** (`i++`).

**`while`** — cuando no sabes exactamente cuántas veces, pero sí la condición de parada:
```javascript
let contador = 0;

while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}
```

**`for...of`** — para recorrer los elementos de un array directamente:
```javascript
const frutas = ["manzana", "pera", "uva"];

for (const fruta of frutas) {
    console.log(fruta);
}
```

### ✏️ Ejercicio 4.1
Usa un bucle `for` para imprimir los números del 1 al 10, pero solo los **pares** (pista: usa el operador módulo `%`, donde `numero % 2 === 0` significa que es par).

<details>
<summary>✅ Ver solución</summary>

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```
</details>

### ✏️ Ejercicio 4.2
Crea un array con 5 nombres y recórrelo con `for...of`, imprimiendo `"Hola, [nombre]!"` para cada uno.

<details>
<summary>✅ Ver solución</summary>

```javascript
const nombres = ["Ana", "Luis", "Marta", "Pedro", "Sofía"];

for (const nombre of nombres) {
    console.log(`Hola, ${nombre}!`);
}
```
</details>

---

## Módulo 5: Funciones

### 📖 Teoría

Una función agrupa código reutilizable. Hay varias formas de escribirlas:

**Declaración de función:**
```javascript
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Ana")); // "Hola, Ana!"
```

**Función flecha (arrow function)** — sintaxis moderna, muy usada:
```javascript
const saludar = (nombre) => {
    return `Hola, ${nombre}!`;
};

// versión corta si el cuerpo es una sola línea de retorno:
const saludar = (nombre) => `Hola, ${nombre}!`;
```

**Parámetros con valores por defecto:**
```javascript
const saludar = (nombre = "invitado") => `Hola, ${nombre}!`;
console.log(saludar()); // "Hola, invitado!"
```

**Una función no siempre necesita `return`** — puede simplemente ejecutar una acción (como imprimir algo o modificar el DOM, que veremos más adelante).

### ✏️ Ejercicio 5.1
Crea una función `esPar(numero)` que reciba un número y **retorne** `true` si es par, `false` si es impar. Pruébala con 3 números distintos usando `console.log`.

<details>
<summary>✅ Ver solución</summary>

```javascript
const esPar = (numero) => numero % 2 === 0;

console.log(esPar(4));  // true
console.log(esPar(7));  // false
console.log(esPar(10)); // true
```
</details>

### ✏️ Ejercicio 5.2
Crea una función `calcularPrecioFinal(precio, descuento)` que retorne el precio con el descuento aplicado (el descuento es un porcentaje, ej: `20` significa 20%).

<details>
<summary>✅ Ver solución</summary>

```javascript
const calcularPrecioFinal = (precio, descuento) => {
    return precio - (precio * descuento / 100);
};

console.log(calcularPrecioFinal(100, 20)); // 80
```
</details>

---

## Módulo 6: Arrays y sus métodos

### 📖 Teoría

Un **array** es una lista ordenada de valores.

```javascript
const colores = ["rojo", "verde", "azul"];

colores[0];          // "rojo" (los índices empiezan en 0)
colores.length;       // 3
```

**Métodos esenciales:**

| Método | Qué hace |
|---|---|
| `.push(valor)` | Agrega un elemento al final |
| `.pop()` | Elimina y retorna el último elemento |
| `.includes(valor)` | Retorna `true`/`false` si el valor existe en el array |
| `.forEach(funcion)` | Ejecuta una función por cada elemento (sin crear un nuevo array) |
| `.map(funcion)` | Crea un **nuevo array** transformando cada elemento |
| `.filter(funcion)` | Crea un **nuevo array** solo con los elementos que cumplen una condición |
| `.find(funcion)` | Retorna el **primer** elemento que cumple una condición |

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((n) => console.log(n * 2));
// imprime 2, 4, 6, 8, 10 (no crea array nuevo)

const duplicados = numeros.map((n) => n * 2);
// duplicados = [2, 4, 6, 8, 10] (array nuevo)

const pares = numeros.filter((n) => n % 2 === 0);
// pares = [2, 4]

const primerMayorA3 = numeros.find((n) => n > 3);
// primerMayorA3 = 4
```

### ✏️ Ejercicio 6.1
Crea un array de 5 números. Usa `.filter()` para obtener solo los mayores a 10, y luego `.map()` sobre ese resultado para duplicar cada uno. Imprime el resultado final.

<details>
<summary>✅ Ver solución</summary>

```javascript
const numeros = [3, 15, 8, 22, 11];

const mayoresA10 = numeros.filter((n) => n > 10);
const duplicados = mayoresA10.map((n) => n * 2);

console.log(duplicados); // [30, 44, 22]
```
</details>

### ✏️ Ejercicio 6.2
Crea un array de objetos representando 3 productos (`nombre` y `precio`). Usa `.forEach()` para imprimir una línea por cada uno con formato: `"Producto: [nombre] — $[precio]"`.

<details>
<summary>✅ Ver solución</summary>

```javascript
const productos = [
    { nombre: "Camiseta", precio: 25000 },
    { nombre: "Pantalón", precio: 45000 },
    { nombre: "Zapatillas", precio: 120000 }
];

productos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre} — $${producto.precio}`);
});
```
</details>

---

## Módulo 7: Objetos

### 📖 Teoría

Un **objeto** agrupa datos relacionados en pares `clave: valor`. Es ideal para representar entidades del mundo real (una persona, un producto, un evento).

```javascript
const persona = {
    nombre: "Ana",
    edad: 28,
    esEstudiante: false,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

console.log(persona.nombre);   // acceso con punto
console.log(persona["edad"]);  // acceso con corchetes (útil si la clave es dinámica)
persona.saludar();             // llamar a un método del objeto
```

`this` dentro de un método de objeto se refiere **al propio objeto** que contiene ese método.

**Modificar o agregar propiedades:**
```javascript
persona.edad = 29;       // modifica
persona.ciudad = "Bogotá"; // agrega una propiedad nueva
```

### ✏️ Ejercicio 7.1
Crea un objeto `libro` con las propiedades `titulo`, `autor`, `paginas` y `leido` (boolean). Agrega un método `resumen()` que imprima una oración combinando todas las propiedades usando `this`.

<details>
<summary>✅ Ver solución</summary>

```javascript
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 471,
    leido: true,
    resumen: function() {
        console.log(`"${this.titulo}" de ${this.autor} tiene ${this.paginas} páginas y ${this.leido ? "ya lo leí" : "aún no lo he leído"}.`);
    }
};

libro.resumen();
```
</details>

---

## Módulo 8: El DOM — seleccionar elementos HTML

### 📖 Teoría

El **DOM** (*Document Object Model*) es la representación en memoria de tu HTML, que JavaScript puede leer y modificar. Aquí es donde JS deja de ser "solo lógica" y empieza a interactuar con la página real.

**Formas de seleccionar elementos:**

| Método | Selecciona |
|---|---|
| `document.getElementById("id")` | Un elemento por su `id` |
| `document.querySelector("selector")` | El **primer** elemento que coincida con un selector CSS |
| `document.querySelectorAll("selector")` | **Todos** los elementos que coincidan (retorna una lista) |

```javascript
const titulo = document.getElementById("titulo-principal");
const primerParrafo = document.querySelector("p");
const todasLasTarjetas = document.querySelectorAll(".tarjeta");
```

`querySelector` y `querySelectorAll` aceptan **cualquier selector CSS válido** (`.clase`, `#id`, `nav a`, etc.), lo cual los hace muy flexibles.

**Leer y modificar contenido:**

```javascript
const titulo = document.querySelector("h1");

titulo.textContent;              // lee el texto
titulo.textContent = "Nuevo título"; // modifica el texto

titulo.style.color = "blue";     // modifica estilos directamente
titulo.classList.add("activo");  // agrega una clase CSS
titulo.classList.remove("activo"); // quita una clase
titulo.classList.toggle("activo"); // la agrega si no está, la quita si está
```

### ✏️ Ejercicio 8.1
Crea una página con un `<h1 id="titulo">Hola</h1>` y un párrafo. Desde JavaScript:
- Selecciona el `h1` por su `id` y cambia su texto a "¡JavaScript funciona!".
- Selecciona el párrafo con `querySelector` y cambia su color a verde usando `.style`.

<details>
<summary>✅ Ver solución</summary>

```html
<h1 id="titulo">Hola</h1>
<p>Este es un párrafo.</p>
```

```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "¡JavaScript funciona!";

const parrafo = document.querySelector("p");
parrafo.style.color = "green";
```
</details>

---

## Módulo 9: Eventos

### 📖 Teoría

Un **evento** es una acción que ocurre en la página: un clic, escribir en un input, enviar un formulario, etc. JavaScript puede "escuchar" estos eventos y reaccionar con `addEventListener`.

```javascript
const boton = document.querySelector("#miBoton");

boton.addEventListener("click", function() {
    console.log("¡Hiciste clic!");
});

// con arrow function:
boton.addEventListener("click", () => {
    console.log("¡Hiciste clic!");
});
```

**Eventos comunes:** `click`, `submit` (al enviar un formulario), `input`/`change` (al escribir o cambiar un campo), `mouseover`/`mouseout` (al pasar el mouse).

**Importante con formularios:** por defecto, al enviar un `<form>` la página se recarga. Para evitarlo (y poder validar antes con JS), se usa `event.preventDefault()`:

```javascript
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // evita que la página se recargue
    console.log("Formulario interceptado, validando...");
});
```

### 💻 Ejemplo integrador: validar un input simple

```html
<form id="miForm">
    <input type="text" id="nombre" placeholder="Tu nombre">
    <button type="submit">Enviar</button>
</form>
<p id="mensaje"></p>
```

```javascript
const formulario = document.getElementById("miForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        mensaje.textContent = "Por favor, escribe tu nombre.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = `¡Gracias, ${nombre}!`;
        mensaje.style.color = "green";
    }
});
```

### ✏️ Ejercicio 9.1
Crea un botón que, al hacer clic, alterne (`toggle`) una clase `oculto` (definida en CSS con `display: none`) sobre un párrafo, mostrándolo y ocultándolo cada vez que se hace clic.

<details>
<summary>✅ Ver solución</summary>

```html
<button id="botonToggle">Mostrar/Ocultar</button>
<p id="parrafoSecreto">¡Sorpresa! Este texto se puede ocultar.</p>
```

```css
.oculto {
    display: none;
}
```

```javascript
const boton = document.getElementById("botonToggle");
const parrafo = document.getElementById("parrafoSecreto");

boton.addEventListener("click", () => {
    parrafo.classList.toggle("oculto");
});
```
</details>

### ✏️ Ejercicio 9.2
Crea un formulario con un campo de correo electrónico. Al enviarlo, valida (con JavaScript, sin recargar la página) que el texto contenga un `@`. Si no lo contiene, muestra un mensaje de error en rojo; si es válido, muestra un mensaje de éxito en verde.

<details>
<summary>✅ Ver solución</summary>

```html
<form id="formCorreo">
    <input type="text" id="correo" placeholder="tucorreo@ejemplo.com">
    <button type="submit">Validar</button>
</form>
<p id="resultado"></p>
```

```javascript
const form = document.getElementById("formCorreo");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const correo = document.getElementById("correo").value;

    if (correo.includes("@")) {
        resultado.textContent = "Correo válido ✅";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "El correo debe contener un @ ❌";
        resultado.style.color = "red";
    }
});
```
</details>

---

## Módulo 10: Proyecto integrador final

### 📖 Consigna

Vas a agregar un archivo `script.js` a tu página de perfil personal (la misma de las guías de HTML y CSS) para darle interactividad real.

### ✏️ Requisitos del proyecto

1. Enlaza el script al final del `<body>` (o usa `defer` en el `<head>`).
2. **Menú responsivo**: agrega un botón "☰" que solo se vea en pantallas pequeñas (con CSS) y que, al hacer clic, muestre/oculte el `<nav>` alternando una clase con `classList.toggle()`.
3. **Validación del formulario de contacto**: al enviarlo, usa `event.preventDefault()` y valida que:
   - El campo nombre no esté vacío.
   - El campo correo contenga un `@`.
   - Si algo falla, muestra un mensaje de error debajo del formulario (sin recargar la página).
   - Si todo es válido, muestra un mensaje de éxito y limpia los campos (`input.value = ""`).
4. **Botón "modo oscuro"**: un botón que alterne una clase `modo-oscuro` en el `<body>`, cambiando los colores de fondo y texto (defínelo en tu CSS).
5. **Contador de proyectos**: usa `document.querySelectorAll(".proyecto")` para contar cuántos `<article class="proyecto">` hay, e imprime el resultado dentro de un elemento (por ejemplo, un `<p id="contador">`).

### 💡 Pistas
- Empieza por seleccionar todos los elementos que vas a necesitar al inicio del archivo, en variables con nombres claros.
- Prueba cada funcionalidad por separado antes de combinarlas.
- Usa `console.log()` generosamente mientras depuras — es normal y esperado.

<details>
<summary>✅ Ver solución de referencia (fragmento clave)</summary>

```javascript
// --- Selección de elementos ---
const botonMenu = document.getElementById("botonMenu");
const nav = document.querySelector("nav");
const formulario = document.querySelector("#contacto form");
const mensajeError = document.getElementById("mensajeFormulario");
const botonModoOscuro = document.getElementById("botonModoOscuro");
const contadorProyectos = document.getElementById("contador");

// --- 1. Menú responsivo ---
botonMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-visible");
});

// --- 2. Validación del formulario ---
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (nombre === "") {
        mensajeError.textContent = "El nombre es obligatorio.";
        mensajeError.style.color = "red";
        return;
    }

    if (!correo.includes("@")) {
        mensajeError.textContent = "Ingresa un correo válido.";
        mensajeError.style.color = "red";
        return;
    }

    mensajeError.textContent = "¡Mensaje enviado con éxito!";
    mensajeError.style.color = "green";
    formulario.reset();
});

// --- 3. Modo oscuro ---
botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
});

// --- 4. Contador de proyectos ---
const proyectos = document.querySelectorAll(".proyecto");
contadorProyectos.textContent = `Tengo ${proyectos.length} proyectos publicados.`;
```

```css
/* Fragmento CSS necesario para que funcione */
.modo-oscuro {
    background-color: #1a1a1a;
    color: #f0f0f0;
}

@media (max-width: 600px) {
    nav {
        display: none;
    }
    nav.nav-visible {
        display: block;
    }
}
```
</details>

---

## 🎯 Autoevaluación final

1. ¿Cuál es la diferencia entre `let` y `const`?
2. ¿Por qué se recomienda `===` en vez de `==`?
3. ¿Cuál es la diferencia entre `.forEach()` y `.map()`?
4. ¿Qué hace `event.preventDefault()` y en qué casos lo necesitas?
5. ¿Qué diferencia hay entre `document.querySelector()` y `document.querySelectorAll()`?

---

## 🏆 ¡Felicidades!

Con HTML, CSS y JavaScript ya tienes las tres bases fundamentales del desarrollo web front-end. Tu página de perfil personal, construida a lo largo de las tres guías, ya es una pequeña aplicación web funcional: estructurada, con estilo propio, y con interactividad real.

**Posibles siguientes pasos** (cuando quieras seguir avanzando):
- Profundizar en JavaScript: `fetch` para consumir APIs, almacenamiento local (`localStorage`), programación asíncrona (`async/await`).
- Control de versiones con Git y publicar tu proyecto en GitHub Pages.
- Un framework de JavaScript como React, una vez que domines bien el JS "puro" (*vanilla JS*).

¿Quieres que arme una guía de repaso combinando los tres proyectos en uno solo, o prefieres profundizar en algún tema específico de JavaScript?
