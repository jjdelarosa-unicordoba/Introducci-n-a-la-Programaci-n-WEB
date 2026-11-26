/* =====================================================================
   js/suscriptores.js — Guardar y obtener suscriptores (Firebase Firestore)

   ⚠️ ARCHIVO DEL PROFESOR: los estudiantes NO deben modificarlo.
   Requiere que js/articulos.js se cargue ANTES (usa su conexión a Firebase).

   FUNCIONES QUE PUEDES USAR EN TU CÓDIGO
   ---------------------------------------------------------------------
   guardarSuscriptor({ nombre, correo })
       → Guarda un suscriptor nuevo.
       → Devuelve (con await): { id, nombre, correo, fecha }
       → Lanza un Error si el correo YA estaba suscrito
         (usa try/catch para mostrar el mensaje al usuario).

   obtenerSuscriptores()
       → Devuelve (con await) un ARRAY con todos los suscriptores:
         [ { id, nombre, correo, fecha }, ... ]

   NOTA: validar que el nombre no esté vacío y que el correo sea
   correcto es TRABAJO TUYO, antes de llamar a estas funciones.

   EJEMPLO
   ---------------------------------------------------------------------
   try {
     await guardarSuscriptor({ nombre: "Ana", correo: "ana@correo.com" });
     console.log("¡Suscrita!");
   } catch (error) {
     console.error(error.message);
   }
   ===================================================================== */

const COLECCION_SUSCRIPTORES = "suscriptores";

async function guardarSuscriptor(datos) {
  const nombre = String((datos && datos.nombre) || "").trim();
  const correo = String((datos && datos.correo) || "").trim().toLowerCase();

  if (!nombre || !correo) {
    throw new Error("guardarSuscriptor necesita nombre y correo.");
  }

  const bd = obtenerBD(); // viene de js/articulos.js
  const coleccion = bd.collection(COLECCION_SUSCRIPTORES);

  // ¿Ya existe este correo?
  const existente = await coleccion.where("correo", "==", correo).limit(1).get();
  if (!existente.empty) {
    throw new Error("Este correo ya está suscrito.");
  }

  const fecha = formatearFecha(new Date()); // viene de js/articulos.js
  const referencia = await coleccion.add({
    nombre: nombre,
    correo: correo,
    fecha: fecha,
    creadoEn: firebase.firestore.FieldValue.serverTimestamp()
  });

  return { id: referencia.id, nombre, correo, fecha };
}

async function obtenerSuscriptores() {
  const bd = obtenerBD();
  const resultado = await bd.collection(COLECCION_SUSCRIPTORES).get();

  return resultado.docs.map((doc) => {
    const d = doc.data();
    return {
      id: doc.id,
      nombre: d.nombre || "",
      correo: d.correo || "",
      fecha: d.fecha || ""
    };
  });
}
