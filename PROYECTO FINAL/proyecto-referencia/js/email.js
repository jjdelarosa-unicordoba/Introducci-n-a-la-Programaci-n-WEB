/* =====================================================================
   js/email.js — Enviar notificaciones por correo (EmailJS)

   ⚠️ ARCHIVO DEL PROFESOR: los estudiantes NO deben modificarlo.
   Requiere que js/articulos.js y js/suscriptores.js se carguen ANTES.

   FUNCIONES QUE PUEDES USAR EN TU CÓDIGO
   ---------------------------------------------------------------------
   notificarSuscriptores(articulo)
       → Envía un correo a TODOS los suscriptores avisando del artículo.
         "articulo" es el objeto que devuelve guardarArticulo().
       → Devuelve (con await):
         { total: 5, enviados: 4, fallidos: [ { correo, motivo } ] }

   enviarCorreo(suscriptor, articulo)
       → Envía un solo correo. "suscriptor" = { nombre, correo }.
         (Normalmente no la necesitas: usa notificarSuscriptores)

   EJEMPLO
   ---------------------------------------------------------------------
   const articulo = await guardarArticulo({ titulo, imagen, contenido });
   try {
     const resumen = await notificarSuscriptores(articulo);
     console.log(resumen.enviados + " de " + resumen.total + " correos enviados");
   } catch (error) {
     console.error(error.message);
   }
   ===================================================================== */


/* ---------------------------------------------------------------------
   CONFIGURACIÓN (solo el DOCENTE edita esta parte)
   Datos de tu cuenta en https://www.emailjs.com
   La plantilla (template) debe usar estas variables:
     {{to_name}} {{periodico}} {{titulo}} {{autor}} {{resumen}} {{enlace}}
   y en el campo "To Email" de la plantilla:  {{to_email}}
   --------------------------------------------------------------------- */
const EMAILJS_PUBLIC_KEY = "m58Wf6Ukz18UlEtFX";
const EMAILJS_SERVICE_ID = "service_pi547m8";
const EMAILJS_TEMPLATE_ID = "template_weu0sp1";
const NOMBRE_PERIODICO = "El Periódico Estudiantil";

const PAUSA_ENTRE_CORREOS_MS = 400; // evita enviar demasiado rápido


/* ---------------------------------------------------------------------
   INTERNO
   --------------------------------------------------------------------- */
let _emailListo = false;

function _iniciarEmailJS() {
  if (typeof emailjs === "undefined") {
    throw new Error(
      "No se cargó EmailJS. Revisa que en index.html esté la línea <script> " +
      "de EmailJS ANTES de js/email.js."
    );
  }
  if (EMAILJS_PUBLIC_KEY === "TU_PUBLIC_KEY") {
    throw new Error(
      "EmailJS no está configurado. El docente debe completar las constantes " +
      "EMAILJS_* al inicio de js/email.js."
    );
  }
  if (!_emailListo) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    _emailListo = true;
  }
}

function _esperar(ms) {
  return new Promise((resolver) => setTimeout(resolver, ms));
}

function _resumenCorto(texto, maximo) {
  const limpio = String(texto || "").replace(/\s+/g, " ").trim();
  return limpio.length > maximo ? limpio.slice(0, maximo).trim() + "..." : limpio;
}


/* ---------------------------------------------------------------------
   FUNCIONES PRINCIPALES
   --------------------------------------------------------------------- */
async function enviarCorreo(suscriptor, articulo) {
  _iniciarEmailJS();

  const parametros = {
    to_name: suscriptor.nombre,
    to_email: suscriptor.correo,
    periodico: NOMBRE_PERIODICO,
    titulo: articulo.titulo,
    autor: articulo.autor,
    resumen: _resumenCorto(articulo.contenido, 160),
    enlace: window.location.href
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, parametros);
}

async function notificarSuscriptores(articulo) {
  _iniciarEmailJS(); // si falta configuración, falla aquí con un mensaje claro

  const suscriptores = await obtenerSuscriptores(); // viene de js/suscriptores.js
  let enviados = 0;
  const fallidos = [];

  for (const suscriptor of suscriptores) {
    try {
      await enviarCorreo(suscriptor, articulo);
      enviados++;
    } catch (error) {
      fallidos.push({
        correo: suscriptor.correo,
        motivo: (error && (error.text || error.message)) || "Error desconocido"
      });
    }
    await _esperar(PAUSA_ENTRE_CORREOS_MS);
  }

  return { total: suscriptores.length, enviados: enviados, fallidos: fallidos };
}
