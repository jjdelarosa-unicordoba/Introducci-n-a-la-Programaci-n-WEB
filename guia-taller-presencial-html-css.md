# Guía Didáctica: Taller Presencial de HTML y CSS "Solo Papel y Lápiz"
### Encuentro práctico de 3 horas — Trabajo colaborativo por grupos

---

## 🎯 Presentación general

Este taller traduce los conceptos de HTML y CSS a actividades que se resuelven **únicamente dibujando y escribiendo a mano**, sin tijeras, pegante, cartulinas ni materiales adicionales. La idea pedagógica central es que los estudiantes **incorporen la lógica de anidamiento, estructura y estilo mediante el dibujo y la escritura**, para que cuando vuelvan a la computadora ya tengan el modelo mental construido.

| | |
|---|---|
| **Duración total** | 3 horas (180 minutos) |
| **Modalidad** | Presencial, sin computadores, sin materiales adicionales |
| **Organización** | Grupos de 4 a 5 estudiantes (ajustable según el curso) |
| **Público** | Principiantes absolutos |
| **Competencia a desarrollar** | Comprender y aplicar la lógica de estructura (HTML) y estilo (CSS) de una página web |

---

## 🧭 Objetivos de aprendizaje

Al finalizar el taller, cada estudiante podrá:

1. Explicar qué es una etiqueta HTML y por qué debe abrirse y cerrarse correctamente.
2. Representar la jerarquía y el anidamiento de elementos HTML (padre-hijo) mediante diagramas dibujados a mano.
3. Distinguir entre elementos de estructura semántica (`header`, `nav`, `main`, `footer`) y su función.
4. Aplicar conceptos del modelo de caja de CSS (margin, border, padding, content) mediante un dibujo esquemático.
5. Simular decisiones de diseño con Flexbox/Grid dibujando y rediseñando cuadrículas en papel.
6. Trabajar en equipo para planificar colaborativamente una página web completa en formato de boceto.

---

## 🧰 Materiales necesarios

**Eso es todo lo que se necesita — nada más:**

| Material | Cantidad aproximada |
|---|---|
| Hojas de papel (blancas o cuadriculadas, tamaño carta) | 8-10 hojas por grupo |
| Lápices o lapiceros | 1 por estudiante |
| Borrador | 1 por grupo (recomendado, dado que habrá mucho ensayo y error) |
| Tablero y marcador (o el recurso equivalente del salón) | Para el docente, uso general |

> 💡 No se requiere cortar, pegar ni colorear nada. Todas las actividades se resuelven escribiendo y dibujando directamente sobre las hojas. Si el docente cuenta con hojas cuadriculadas, estas facilitan especialmente las actividades de cuadrícula (Bloque 5), pero no son indispensables: una hoja blanca con líneas dibujadas a mano funciona igual de bien.

### Para cada grupo
- 8-10 hojas de papel en blanco
- Lápices/lapiceros y borrador
- La hoja de "brief" del proyecto, copiada a mano en el tablero o dictada por el docente (ver Anexo 3)

---

## ⏱️ Cronograma general (180 minutos)

| Bloque | Actividad | Duración | Tipo |
|---|---|---|---|
| 1 | Bienvenida y diagnóstico rápido | 15 min | Grupal |
| 2 | Actividad 1: El árbol de etiquetas | 30 min | Por grupos |
| 3 | Actividad 2: El HTML viviente (con carteles de papel) | 20 min | Toda la clase |
| — | **Descanso** | 10 min | — |
| 4 | Actividad 3: Wireframe en papel | 30 min | Por grupos |
| 5 | Actividad 4: La caja de CSS dibujada y la cuadrícula en papel | 30 min | Por grupos |
| 6 | Actividad 5: Proyecto final — Boceto completo de una página | 35 min | Por grupos |
| 7 | Presentación relámpago y cierre | 10 min | Grupal |

---

## Bloque 1 — Bienvenida y diagnóstico rápido (15 min)

### 📖 Objetivo
Activar conocimientos previos y presentar la metáfora central del taller.

### 💻 Desarrollo

1. **(5 min)** Pregunta disparadora en voz alta: *"Cuando entran a una página web, ¿qué es lo primero que ven? ¿Y qué creen que hay 'detrás' de eso?"*. Anota 3-4 respuestas en el tablero.

2. **(5 min)** Presenta la metáfora que guiará todo el taller:

   > *"Hoy vamos a construir páginas web con papel y lápiz. HTML es el **esqueleto** de la casa: paredes, puertas, ventanas, en el orden correcto. CSS es la **decoración**: pintura, muebles, distribución. Hoy dibujaremos y escribiremos ambas cosas, sin computador, para entender la lógica antes de escribir una sola línea de código."*

3. **(5 min)** Divide el curso en grupos de 4-5 estudiantes y reparte las hojas de papel (4-5 por grupo para empezar; el docente puede repartir más a medida que avanza el taller).

---

## Bloque 2 — Actividad 1: El árbol de etiquetas (30 min)

### 📖 Objetivo
Comprender el anidamiento (jerarquía padre-hijo) y la regla de apertura/cierre de etiquetas, mediante un diagrama dibujado.

### 💻 Desarrollo

1. **(5 min) Explicación de la regla de oro:** el docente dibuja en el tablero la analogía de "cajas dentro de cajas": una etiqueta que se abre dentro de otra debe cerrarse **antes** que la etiqueta que la contiene.

   ```
   ✅ CORRECTO:        ❌ INCORRECTO:
   <div>                <div>
     <p>Texto</p>         <p>Texto</div>
   </div>                </p>
   ```

2. **(5 min)** El docente dicta o escribe en el tablero una lista desordenada de 10-12 etiquetas (por ejemplo: `html`, `head`, `body`, `h1`, `p`, `ul`, `li`, `li`, `div`, `nav`, `a`). Cada grupo copia la lista en una hoja.

3. **(15 min) Reto por grupos:** en una hoja nueva, cada grupo debe dibujar el **árbol de anidamiento** correcto, usando cajas dibujadas a mano (rectángulos dentro de rectángulos) con el nombre de cada etiqueta escrito dentro de su caja correspondiente. Ejemplo del tipo de diagrama esperado:

   ```
   ┌──────────────────────────────┐
   │ html                          │
   │  ┌──────────────────────┐   │
   │  │ head                    │   │
   │  └──────────────────────┘   │
   │  ┌──────────────────────┐   │
   │  │ body                    │   │
   │  │  ┌──────────────┐     │   │
   │  │  │ h1              │     │   │
   │  │  └──────────────┘     │   │
   │  │  ┌──────────────┐     │   │
   │  │  │ ul               │     │   │
   │  │  │  ┌────────┐   │     │   │
   │  │  │  │ li        │   │     │   │
   │  │  │  └────────┘   │     │   │
   │  │  └──────────────┘     │   │
   │  └──────────────────────┘   │
   └──────────────────────────────┘
   ```

   El docente circula por los grupos, revisando y haciendo preguntas guía: *"¿Por qué esta caja de `p` debe quedar completamente dentro de la caja de `div` y no cruzarla?"*

4. **(5 min) Puesta en común:** un grupo pasa al tablero y reproduce su árbol, explicándolo en voz alta al resto de la clase.

### ✅ Cierre de la actividad
El docente resume la regla: **"Lo último que se abre es lo primero que se cierra"** (analogía: una pila de platos, o unas muñecas rusas) — y remarca que en el dibujo esto se ve como cajas que **nunca se cruzan entre sí**, solo se contienen unas a otras.

---

## Bloque 3 — Actividad 2: El HTML viviente (20 min)

### 📖 Objetivo
Vivenciar corporalmente la jerarquía y las etiquetas semánticas, generando una experiencia memorable.

### 💻 Desarrollo

1. **(5 min)** Se elige un grupo de 8-10 voluntarios. Cada uno escribe con lápiz, en grande, una etiqueta en una hoja de papel (una etiqueta por hoja): `header`, `nav`, `h1`, `main`, `section`, `article`, `aside`, `footer`. Sostienen la hoja frente a su pecho a modo de cartel.

2. **(10 min)** El resto de la clase, como "directores de escena", debe ir ordenando físicamente a los voluntarios en el espacio del salón para formar la estructura correcta de una página web (quién va adelante, quién detrás, quién "dentro" de quién —representado con los voluntarios agrupándose más cerca o abriendo los brazos para mostrar "contención"—). No se necesita ningún marcador en el piso: basta con la disposición del cuerpo y la distancia entre estudiantes.

3. **(5 min)** El docente hace preguntas relámpago señalando a cada "etiqueta humana": *"¿Qué función cumples en la página? ¿Por qué estás junto a esta persona y no a esta otra?"*

### ✅ Cierre de la actividad
Refuerza que cada etiqueta semántica tiene un **propósito**, no es decorativa: `nav` siempre contiene enlaces de navegación, `footer` siempre va al final, etc.

---

## 🔄 Descanso (10 min)

---

## Bloque 4 — Actividad 3: Wireframe en papel (30 min)

### 📖 Objetivo
Traducir una necesidad de diseño en una estructura HTML planificada, antes de pensar en código.

### 💻 Desarrollo

1. **(5 min)** Cada grupo recibe (dictado o escrito en el tablero por el docente) un "brief" distinto con una idea de página web ficticia — ver opciones listas en el Anexo 3. El brief incluye: nombre del sitio, objetivo, y 3 secciones obligatorias. Cada grupo lo copia en una hoja.

2. **(20 min)** En una hoja en blanco, el grupo dibuja a mano el **wireframe** (boceto de bajo nivel de detalle, solo rectángulos y etiquetas de texto) de su página, indicando con rótulos qué etiqueta HTML correspondería a cada bloque:

   ```
   ┌─────────────────────────────┐
   │  [header] Logo + nav          │
   ├─────────────────────────────┤
   │  [main > article]              │
   │  Título y contenido principal │
   ├───────────────┬───────────────┤
   │ [aside]        │                │
   │ Info extra     │                │
   ├───────────────┴───────────────┤
   │  [footer] Contacto            │
   └─────────────────────────────┘
   ```

3. **(5 min)** Cada grupo pasa su hoja al grupo vecino, que la revisa y escribe al reverso una breve retroalimentación a mano: *"¿Qué etiqueta le agregarías o cambiarías?"*. Luego la hoja regresa a su grupo original.

### ✅ Cierre de la actividad
Este wireframe será la base del proyecto final del Bloque 6 — **no se descarta, se conserva**.

---

## Bloque 5 — Actividad 4: La caja de CSS dibujada y la cuadrícula en papel (30 min)

### 📖 Objetivo
Interiorizar el modelo de caja (box model) y la lógica de alineación de Flexbox/Grid, mediante representaciones dibujadas.

### Parte A: La caja de CSS dibujada (15 min)

### 💻 Desarrollo

1. El docente dibuja en el tablero el modelo de caja como una figura de rectángulos concéntricos (uno dentro de otro, como una diana): el más externo es *margin*, luego *border*, luego *padding*, y el más interno es *content*.

   ```
   ┌───────────────────────────────┐
   │           margin                 │
   │  ┌─────────────────────────┐  │
   │  │        border              │  │
   │  │  ┌───────────────────┐  │  │
   │  │  │      padding         │  │  │
   │  │  │  ┌─────────────┐  │  │  │
   │  │  │  │   content     │  │  │  │
   │  │  │  └─────────────┘  │  │  │
   │  │  └───────────────────┘  │  │
   │  └─────────────────────────┘  │
   └───────────────────────────────┘
   ```

2. Cada estudiante reproduce este dibujo en su hoja, rotulando las 4 capas y escribiendo junto a cada una una frase breve de su función (ej: *"padding: espacio entre el borde y el contenido"*).

3. **Reto rápido:** el docente da un valor (ej: *"padding grande, margin pequeño"*) y cada grupo debe volver a dibujar la caja ajustando el **grosor relativo** de cada capa dibujada a mano, representando visualmente esa diferencia (una capa de padding más gruesa, una de margin más delgada).

### Parte B: La cuadrícula en papel — Flexbox/Grid (15 min)

### 💻 Desarrollo

1. Cada estudiante dibuja en su hoja un rectángulo grande (representando la pantalla) y dentro traza una fila con 3-4 "elementos" dibujados como cuadrados pequeños con una letra dentro (A, B, C).

2. El docente da instrucciones, una por una, como si fueran propiedades CSS, y cada grupo debe **volver a dibujar** la fila de cuadrados reubicándolos según la instrucción:
   - *"justify-content: center"* → los cuadrados se dibujan agrupados en el centro de la fila.
   - *"space-between"* → se dibujan distribuidos con espacio igual entre ellos, tocando los extremos izquierdo y derecho.
   - *"flex-direction: column"* → se dibujan uno debajo del otro en vez de uno al lado del otro.

3. Tras cada instrucción, el docente pide a 1-2 grupos que muestren su hoja al resto de la clase para comparar resultados y corregir entre todos.

### ✅ Cierre de la actividad
El docente conecta la actividad con el código real: *"Todo lo que acaban de dibujar es exactamente lo que hace la propiedad `display: flex` cuando lo escriban en la computadora — solo que en vez de mover cuadrados en el papel, moverán elementos en la pantalla."*

---

## Bloque 6 — Actividad 5: Proyecto final — Boceto completo de una página (35 min)

### 📖 Objetivo
Integrar todo lo aprendido en una producción grupal completa: estructura + estilo, en una hoja de boceto detallado.

### 💻 Desarrollo

1. **(5 min) Instrucción:** cada grupo debe dibujar, en una hoja nueva (o ampliando su wireframe del Bloque 4), la versión "final" de su página web, pero ahora:
   - Dibujando cada bloque de contenido con más detalle.
   - Escribiendo junto a cada bloque, entre paréntesis, la etiqueta HTML correspondiente (ej: *"Título principal (`h1`)"*).
   - Anotando junto a cada bloque al menos 2 propiedades CSS que le aplicarían y su valor (ej: `color: azul`, `padding: grande`, `display: flex`).

2. **(25 min) Producción grupal:** los grupos trabajan de forma autónoma en su hoja. El docente circula ofreciendo ayuda puntual y haciendo preguntas que fuercen justificación: *"¿Por qué elegiste flex aquí y no un bloque normal?"*

3. **(5 min)** Cada grupo revisa que su boceto tenga: al menos una sección con `header`, `main` y `footer`; al menos una lista; al menos un elemento con propiedades de caja anotadas; y al menos una decisión de alineación (flex/grid) justificada por escrito.

### ✅ Resultado esperado
Una hoja por grupo que representa una página web completa, con su estructura semántica y sus decisiones de estilo explícitas y justificadas por escrito.

---

## Bloque 7 — Presentación relámpago y cierre (10 min)

### 💻 Desarrollo

1. **(6 min)** Cada grupo sostiene en alto su hoja de boceto y tiene 60-90 segundos para presentarla al resto de la clase, explicando una decisión de estructura y una decisión de estilo.

2. **(2 min)** Votación simple: cada estudiante escribe en una esquina de su propia hoja el nombre del grupo (distinto al suyo) que consideró mejor justificado, y se hace un conteo rápido a mano alzada o en el tablero.

3. **(2 min) Cierre del docente:**
   > *"Todo lo que construyeron hoy con papel y lápiz es exactamente la lógica que van a escribir la próxima clase con código real: etiquetas que se abren y cierran, cajas dentro de cajas, y decisiones de estilo que responden a un porqué. Ya tienen el modelo mental — ahora solo falta la sintaxis."*

---

## 📊 Rúbrica de evaluación sugerida

| Criterio | Nivel bajo (1) | Nivel medio (2) | Nivel alto (3) |
|---|---|---|---|
| **Anidamiento correcto** | Cajas dibujadas se cruzan o no hay relación clara | Anidamiento mayormente correcto, con 1-2 errores | Anidamiento correcto y coherente en todo el diagrama |
| **Uso de semántica** | Solo usa bloques genéricos sin nombrar etiquetas | Usa 2-3 etiquetas semánticas correctamente | Usa `header`, `nav`, `main`, `footer` con propósito claro y justificado |
| **Modelo de caja** | No se referencian margin/padding/border | Se mencionan pero sin justificación | Se dibujan y justifican con criterio de diseño |
| **Alineación (Flex/Grid)** | No hay decisión de alineación | Se menciona una propiedad sin justificar | Se justifica por escrito una decisión de alineación |
| **Trabajo en equipo** | Participación desigual | La mayoría participa | Todos los integrantes explican al menos una parte |

---

## 📎 Anexo 1 — Lista de etiquetas HTML para dictar en el Bloque 2

El docente puede escribir esta lista en el tablero o dictarla en voz alta para que cada grupo la copie antes de armar su árbol de anidamiento:

**Estructura:** `html`, `head`, `body`, `header`, `nav`, `main`, `footer`

**Texto:** `h1`, `h2`, `p`, `strong`, `em`

**Listas y tablas:** `ul`, `li`, `table`, `tr`, `td`

**Multimedia y enlaces:** `img` (recordar: es una etiqueta "vacía", sin cierre), `a`, `div`, `section`, `article`

---

## 📎 Anexo 2 — Vocabulario de propiedades CSS para el Bloque 5

Lista de referencia que el docente puede escribir en el tablero como "banco de opciones" mientras los grupos trabajan:

| Propiedad | Valores de ejemplo |
|---|---|
| `color` | rojo, azul, verde, negro... |
| `background-color` | amarillo, gris claro, blanco... |
| `font-size` | pequeño, mediano, grande |
| `padding` | pequeño, mediano, grande |
| `margin` | pequeño, mediano, grande |
| `border` | sí / no |
| `display` | flex, block |
| `flex-direction` | row (fila), column (columna) |
| `justify-content` | center, space-between |
| `text-align` | izquierda, centro, derecha |

---

## 📎 Anexo 3 — Modelo de "brief" de proyecto (uno distinto por grupo)

El docente dicta o escribe en el tablero uno de estos briefs por grupo:

```
PROYECTO: [Nombre ficticio del sitio]

Objetivo del sitio: _______________________

Secciones obligatorias:
1. _______________________
2. _______________________
3. _______________________

Público objetivo: _______________________

Un dato/detalle especial que debe incluir el sitio: _______________________
```

**Ejemplos de briefs listos para dictar:**
- *Café "La Esquina"* — secciones: menú, historia del lugar, ubicación y horarios.
- *Club Deportivo Los Halcones* — secciones: equipos, calendario de partidos, formulario de inscripción.
- *Fundación Patitas* — secciones: animales en adopción, cómo donar, historias de adopción exitosas.
- *Mi portafolio personal* — secciones: sobre mí, proyectos, contacto.

---

## 🚀 Transición a la práctica digital

Cuando el grupo tenga acceso a computadores, se recomienda iniciar la siguiente sesión retomando **el mismo boceto construido en este taller** como base para escribir el código real (HTML y CSS), de modo que la transición de lo analógico a lo digital sea directa y el estudiante reconozca inmediatamente la correspondencia entre lo que dibujó a mano y lo que ahora escribe en pantalla.
