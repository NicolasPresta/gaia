var urlBaseProd = 'http://45.55.187.250'
var prod = process.env.ENTORNO == 'prod';

module.exports.config = {
   userApiUrls: {
      clientes: prod ? urlBaseProd + ":3000/api/Clients": "http://localhost:5555/test/user/api/Clientes"
   },
   iaApiUrls: {
      procesar: prod ? urlBaseProd + ":3003/process" : "http://localhost:5555/test/ia/process"
   },
   conversacionApiUrls: {
      conversaciones: prod ? urlBaseProd + ":9001/conversacion" : "http://localhost:5555/test/conversacion"
   },
   respuestaApiUrls: {
      solicitarReunionAlGuest: prod ? urlBaseProd + ":9000/respuesta/solicitarReunionAlGuest/parser" : "http://localhost:5555/test/respuesta/solicitarReunionAlGuest/parser",
      confirmarReunion: prod ? urlBaseProd + ":9000/respuesta/confirmarReunion/parser" : "http://localhost:5555/test/respuesta/confirmarReunion/parser"
   },
   calendarioApiUrls: {
      huecos: "http://localhost:5555/test/calendario/huecos"
   },
   ioApiUrls: {
      enviar: prod ? "104.131.40.146:4444/send" : "http://localhost:5555/test/io/send"
   }
};
