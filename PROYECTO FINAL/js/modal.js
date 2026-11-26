/* =====================================================================
   js/modal.js — Abrir y cerrar el modal de lectura de un artículo

   ⚠️ ARCHIVO DEL PROFESOR: los estudiantes NO deben modificarlo.

   FUNCIONES QUE PUEDES USAR EN TU CÓDIGO
   ---------------------------------------------------------------------
   abrirModal(articulo)
       → Rellena el modal con los datos del artículo y lo muestra.
         "articulo" = { titulo, imagen, autor, fecha, contenido }

   cerrarModal()
       → Oculta el modal.

   ELEMENTOS QUE DEBEN EXISTIR EN TU index.html (por su id)
   ---------------------------------------------------------------------
   modal, modal-imagen, modal-titulo, modal-autor, modal-fecha, modal-contenido

   CÓMO FUNCIONA
   ---------------------------------------------------------------------
   El modal se muestra añadiendo la clase CSS "abierto" al elemento #modal
   y se oculta quitándola. TU style.css decide cómo se ve en cada caso:
       .modal         { display: none; }
       .modal.abierto { display: flex; }

   TAREA DE LOS ESTUDIANTES
   ---------------------------------------------------------------------
   Este archivo NO conecta el botón X. Eso lo haces tú en tu <script>:
       document.getElementById("modal-cerrar").addEventListener("click", cerrarModal);
   (Reto extra: ¿cómo lo cerrarías también con la tecla Escape?)
   ===================================================================== */

const CLASE_MODAL_ABIERTO = "abierto";

// Busca un elemento por id y avisa con un mensaje claro si no existe
function _elemento(id) {
  const elemento = document.getElementById(id);
  if (!elemento) {
    throw new Error('No encuentro el elemento con id="' + id + '" en tu index.html.');
  }
  return elemento;
}

function abrirModal(articulo) {
  const modal = _elemento("modal");

  const imagen = _elemento("modal-imagen");
  imagen.src = articulo.imagen || "";
  imagen.alt = articulo.titulo || "";

  _elemento("modal-titulo").textContent = articulo.titulo || "";
  _elemento("modal-autor").textContent = articulo.autor || "";
  _elemento("modal-fecha").textContent = articulo.fecha || "";

  // El contenido se escribe como párrafos (un párrafo por cada salto de línea)
  const contenedor = _elemento("modal-contenido");
  contenedor.textContent = "";
  String(articulo.contenido || "")
    .split(/\n+/)
    .filter((linea) => linea.trim() !== "")
    .forEach((linea) => {
      const parrafo = document.createElement("p");
      parrafo.textContent = linea;
      contenedor.appendChild(parrafo);
    });

  modal.classList.add(CLASE_MODAL_ABIERTO);
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // evita que la página de atrás se desplace
}

function cerrarModal() {
  const modal = _elemento("modal");
  modal.classList.remove(CLASE_MODAL_ABIERTO);
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
