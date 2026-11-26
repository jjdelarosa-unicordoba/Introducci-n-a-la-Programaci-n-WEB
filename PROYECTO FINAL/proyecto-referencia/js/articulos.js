/* =====================================================================
   js/articulos.js — Guardar y obtener artículos (Firebase Firestore)

   ⚠️ ARCHIVO DEL PROFESOR: los estudiantes NO deben modificarlo.

   FUNCIONES QUE PUEDES USAR EN TU CÓDIGO
   ---------------------------------------------------------------------
   guardarArticulo({ titulo, imagen, contenido, autor })
       → Guarda un artículo. "autor" es opcional.
       → Devuelve (con await) el artículo guardado:
         { id, titulo, imagen, contenido, autor, fecha }

   obtenerArticulos()
       → Devuelve (con await) un ARRAY con todos los artículos,
         del más reciente al más antiguo. Cada artículo tiene:
         { id, titulo, imagen, contenido, autor, fecha }

   formatearFecha(fecha)   → "dd/mm/aaaa"
   escaparHTML(texto)      → versión segura de un texto para usar con innerHTML

   EJEMPLO
   ---------------------------------------------------------------------
   try {
     const lista = await obtenerArticulos();
     console.log(lista.length + " artículos");
   } catch (error) {
     console.error(error.message);   // mensaje claro si algo falla
   }
   ===================================================================== */

function mostrarArticulos(lista) {
  grid.innerHTML = "";
  lista.forEach((articulo) => {
    grid.appendChild(crearTarjeta(articulo));
  });
}

/* ---------------------------------------------------------------------
   CONFIGURACIÓN (solo el DOCENTE edita esta parte)
   Copia aquí los datos de tu proyecto de Firebase:
   Consola de Firebase → Configuración del proyecto → Tus apps → Web
   --------------------------------------------------------------------- */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC1VVec-a6JOoFpSPt2L4FuWD-BQCfYFF4",
  authDomain: "proy-ed185.firebaseapp.com",
  projectId: "proy-ed185",
  storageBucket: "proy-ed185.firebasestorage.app",
  messagingSenderId: "635360505755",
  appId: "1:635360505755:web:af7bdf5b77b7644473bb3e",
  measurementId: "G-LLR3KY09X9"
};

const COLECCION_ARTICULOS = "articulos";
const AUTOR_POR_DEFECTO = "Redacción Estudiantil";


/* ---------------------------------------------------------------------
   CONEXIÓN CON FIREBASE (la usan también los otros archivos de js/)
   --------------------------------------------------------------------- */
let _baseDeDatos = null;

function obtenerBD() {
  if (_baseDeDatos) return _baseDeDatos;

  if (typeof firebase === "undefined") {
    throw new Error(
      "No se cargó Firebase. Revisa que en index.html estén las líneas <script> " +
      "de firebase-app-compat.js y firebase-firestore-compat.js ANTES de js/articulos.js."
    );
  }
  if (FIREBASE_CONFIG.apiKey === "TU_API_KEY") {
    throw new Error(
      "Firebase no está configurado. El docente debe completar FIREBASE_CONFIG " +
      "al inicio de js/articulos.js."
    );
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  _baseDeDatos = firebase.firestore();
  return _baseDeDatos;
}


/* ---------------------------------------------------------------------
   UTILIDADES
   --------------------------------------------------------------------- */
function formatearFecha(fecha) {
  const f = fecha instanceof Date ? fecha : new Date(fecha);
  const dia = String(f.getDate()).padStart(2, "0");
  const mes = String(f.getMonth() + 1).padStart(2, "0");
  return dia + "/" + mes + "/" + f.getFullYear();
}

function escaparHTML(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Convierte un documento de Firestore en un objeto sencillo para el estudiante
function _documentoAArticulo(doc) {
  const d = doc.data();
  const fechaGuardada = d.creadoEn && d.creadoEn.toMillis
    ? formatearFecha(new Date(d.creadoEn.toMillis()))
    : "";
  return {
    id: doc.id,
    titulo: d.titulo || "",
    imagen: d.imagen || "",
    contenido: d.contenido || "",
    autor: d.autor || AUTOR_POR_DEFECTO,
    fecha: d.fecha || fechaGuardada
  };
}

function _milisegundos(doc) {
  const t = doc.data().creadoEn;
  return t && t.toMillis ? t.toMillis() : 0;
}


/* ---------------------------------------------------------------------
   FUNCIONES PRINCIPALES
   --------------------------------------------------------------------- */
async function guardarArticulo(datos) {
  const titulo = String((datos && datos.titulo) || "").trim();
  const imagen = String((datos && datos.imagen) || "").trim();
  const contenido = String((datos && datos.contenido) || "").trim();
  const autor = String((datos && datos.autor) || "").trim() || AUTOR_POR_DEFECTO;

  if (!titulo || !imagen || !contenido) {
    throw new Error("guardarArticulo necesita titulo, imagen y contenido.");
  }

  const bd = obtenerBD();
  const fecha = formatearFecha(new Date());

  const referencia = await bd.collection(COLECCION_ARTICULOS).add({
    titulo: titulo,
    imagen: imagen,
    contenido: contenido,
    autor: autor,
    fecha: fecha,
    creadoEn: firebase.firestore.FieldValue.serverTimestamp()
  });

  return { id: referencia.id, titulo, imagen, contenido, autor, fecha };
}

async function obtenerArticulos() {
  const bd = obtenerBD();
  const resultado = await bd.collection(COLECCION_ARTICULOS).get();

  const documentos = resultado.docs.slice();
  documentos.sort((a, b) => _milisegundos(b) - _milisegundos(a)); // más recientes primero

  return documentos.map(_documentoAArticulo);
}


/* ---------------------------------------------------------------------
   SOLO DOCENTE: crea 3 artículos de ejemplo para probar el sitio.
   Ábrelo en el navegador, abre la consola (F12) y escribe:
        docenteSembrarArticulos()
   Úsalo UNA sola vez.
   --------------------------------------------------------------------- */
async function docenteSembrarArticulos() {
  const ejemplos = [
    {
      titulo: 'Proyecto "Huerta Escolar"',
      imagen: "https://picsum.photos/seed/huerta/800/400",
      autor: "Equipo Ambiental",
      contenido: "Un gran movimiento ha llegado a nuestra escuela: un proyecto que combina educación ambiental, trabajo en equipo y conciencia ciudadana.\n\nLos estudiantes han sembrado hortalizas, aromáticas y plantas medicinales."
    },
    {
      titulo: "Feria de ciencias",
      imagen: "https://picsum.photos/seed/ciencias/800/400",
      autor: "Área de Ciencias",
      contenido: "La feria de ciencias anual fue un éxito rotundo, con más de 40 proyectos presentados por estudiantes de todos los grados."
    },
    {
      titulo: "Nueva biblioteca",
      imagen: "https://picsum.photos/seed/biblioteca/800/400",
      autor: "Rectoría",
      contenido: "Estrenamos la apertura de nuestra biblioteca renovada, con tecnología de última generación y nuevos espacios de lectura."
    }
  ];
  for (const articulo of ejemplos) {
    await guardarArticulo(articulo);
  }
  console.log("✅ Se crearon " + ejemplos.length + " artículos de ejemplo.");
}
