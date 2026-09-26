# Reto: "Landing Page de tu Pasión"
### Actividad de 2 horas — HTML + CSS + Flexbox + Grid + Responsive Design (sin frameworks)

---

## 🎯 Presentación general

Cada equipo construye, en 2 horas de clase, la página de aterrizaje (*landing page*) de algo que realmente les apasiona: un videojuego, un artista, un equipo, un anime, un youtuber. La condición técnica es estricta: **HTML y CSS puro, sin frameworks** (nada de Bootstrap, Tailwind, etc.), con **Flexbox, Grid y diseño responsive obligatorios**.

| | |
|---|---|
| **Duración en clase** | 2 horas (120 minutos) |
| **Modalidad** | Con computador, editor de código y navegador |
| **Organización** | Parejas de trabajo (recomendado) |
| **Edad** | 14-16 años |
| **Requisito previo** | Haber visto HTML y CSS básico (estructura, selectores, box model) |
| **Prohibido** | Cualquier framework o librería CSS/JS (Bootstrap, Tailwind, jQuery, etc.) |

---

## 🎮 Paso 0: Elige tu temática

Cada pareja elige **una** de estas categorías (o propone una propia, con aprobación del docente):

- 🎮 Tu videojuego favorito
- 🎵 Tu artista o banda de música favorita
- ⚽ Tu equipo o deporte favorito
- 📺 Tu anime, serie o película favorita
- 🎥 Tu youtuber o streamer favorito
- 🏆 Un torneo o evento de esports (real o inventado)
- 🛹 Un hobby personal (baile, dibujo, skate, cocina, etc.)

**Regla:** el contenido (textos, nombres, imágenes) puede ser inventado o real — lo que se evalúa es la **estructura y el código**, no la exactitud del contenido.

---

## ⏱️ Cronograma (120 minutos)

| Min | Actividad |
|---|---|
| 0-10 | Presentación del reto, formación de parejas, elección de temática |
| 10-25 | Planificación: boceto rápido en papel (secciones + paleta de colores) |
| 25-30 | Entrega del starter kit y explicación de archivos |
| 30-50 | Construcción de la estructura HTML completa |
| 50-70 | Estilos base con CSS (colores, tipografía, box model) |
| 70-90 | Flexbox (navbar) + Grid (galería de contenido) |
| 90-105 | Responsive design estricto (mobile-first, mínimo 2 breakpoints) |
| 105-115 | Prueba cruzada: cada pareja revisa la página de otra en modo responsive |
| 115-120 | Cierre y entrega del checklist de trabajo autónomo |

---

## 🧱 Starter kit (entregar a cada pareja en el minuto 25)

Este esqueleto ahorra tiempo de configuración para enfocarse en el reto técnico. Se entrega como dos archivos ya enlazados:

**`index.html`**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Landing Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <!-- TODO: logo/nombre del sitio + nav con Flexbox -->
  </header>

  <main>
    <section class="hero">
      <!-- TODO: título principal + descripción corta -->
    </section>

    <section class="galeria">
      <!-- TODO: mínimo 3 tarjetas usando CSS Grid -->
    </section>
  </main>

  <footer>
    <!-- TODO: pie de página -->
  </footer>

</body>
</html>
```

**`style.css`**
```css
/* Reinicio básico */
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: sans-serif; /* TODO: cambiar por la tipografía elegida */
}

/* TODO: header con Flexbox */

/* TODO: sección .galeria con Grid */

/* TODO: media queries — mobile-first */
```

> 💡 El `meta viewport` y el `box-sizing: border-box` ya vienen incluidos porque son la base indispensable de cualquier diseño responsive — no deben eliminarlos.

---

## ✅ Requisitos obligatorios EN CLASE (checklist de las 2 horas)

| # | Requisito |
|---|---|
| 1 | Estructura semántica: `header` (con `nav`), `main` (con al menos 2 `section`), `footer` |
| 2 | Jerarquía de texto correcta: `h1`, al menos un `h2`, y párrafos `p` |
| 3 | Navbar dentro del `header` alineado con **Flexbox** (`display: flex`) |
| 4 | Sección de "galería" (personajes, canciones, videos, jugadas...) construida con **CSS Grid**, mínimo 3 columnas en escritorio |
| 5 | Al menos 1 imagen con `alt` descriptivo (puede ser ilustrativa si no hay internet) |
| 6 | Paleta de mínimo 3 colores y tipografía definida en el CSS |
| 7 | Modelo de caja aplicado (`padding`/`margin`) en al menos 3 elementos distintos |
| 8 | **Responsive estricto:** enfoque *mobile-first* con al menos **2 media queries** que cambien el layout (ej: navbar de fila a columna, galería de 3 columnas a 1) |
| 9 | Cero líneas de framework — todo el CSS escrito a mano |

### 💡 Pista clave de responsive design (mobile-first)

```css
/* Estilos base = para móvil, van primero */
.galeria {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* A partir de tablet en adelante */
@media (min-width: 600px) {
  .galeria {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* A partir de escritorio */
@media (min-width: 1000px) {
  .galeria {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 🏠 Trabajo autónomo (puntos pendientes — fecha de entrega a definir por el docente)

Estos puntos **no son necesarios para terminar la clase**, pero sí para la entrega final evaluada:

| # | Tarea pendiente |
|---|---|
| 1 | Agregar una tercera sección de contenido (ej: "Sobre esto", "Historia", "Biografía") |
| 2 | Agregar un formulario de contacto simple (nombre, correo, mensaje) con estilos propios |
| 3 | Agregar un tercer breakpoint (tablet) y probar la página en al menos 3 anchos de pantalla distintos |
| 4 | Agregar efectos `:hover` o `transition` en al menos 2 elementos interactivos |
| 5 | Revisar accesibilidad: todas las imágenes con `alt`, buen contraste de color, jerarquía de encabezados sin saltos (no pasar de `h1` a `h3` sin `h2`) |
| 6 | **Reto bonus:** investigar `grid-template-areas` y reorganizar el layout completo de escritorio con esa técnica |

> 📌 Recomendación para el docente: pedir que suban el proyecto final a un repositorio o lo entreguen comprimido, y dedicar los primeros 10-15 minutos de la siguiente clase a que 2-3 parejas muestren su resultado.

---

## 📊 Rúbrica de evaluación (clase + trabajo autónomo)

| Criterio | Bajo (1) | Medio (2) | Alto (3) |
|---|---|---|---|
| **Estructura HTML** | Uso de `div` genéricos sin semántica | Semántica parcial | `header`/`main`/`footer`/`section` bien usados |
| **Flexbox** | No se usa o está mal aplicado | Se usa pero sin ajustar alineación | Navbar correctamente alineado y adaptado en responsive |
| **Grid** | No se usa o es una sola columna fija | Grid básico sin ajuste responsive | Grid con columnas que cambian según el breakpoint |
| **Responsive design** | No hay media queries | 1 breakpoint | 2+ breakpoints con enfoque mobile-first |
| **CSS propio (sin frameworks)** | Usa clases de un framework | CSS propio pero desordenado | CSS propio, organizado y comentado |
| **Trabajo autónomo entregado** | No se entrega | Entrega parcial | Todos los puntos pendientes resueltos |

---

## 🗣️ Notas de facilitación para el docente

- **Minuto 70-90 (Flexbox + Grid) suele ser el cuello de botella:** ten a la mano 1-2 ejemplos cortos en el tablero para destrabar a las parejas que se atrasen (navbar con `justify-content: space-between`, galería con `grid-template-columns: repeat(3, 1fr)`).
- **Para probar responsive sin recursos extra:** basta con redimensionar la ventana del navegador arrastrando el borde, o usar las herramientas de desarrollador (`F12` → ícono de dispositivo móvil).
- Si alguna pareja termina antes de tiempo, anímalos a adelantar puntos del trabajo autónomo en clase, con tu apoyo directo, en vez de esperar sin hacer nada.
- Refuerza constantemente la regla de "cero frameworks": si ves clases como `container`, `row`, `col-md-6` copiadas de tutoriales, es una señal de que están usando Bootstrap sin saberlo.
