var request = require('request');
var config = require('../config/config').config;

function obtenerMensajeCoordinacionAGuest(owner, hueco, callback) {

   var respuestaUrl = config.respuestaApiUrls.solicitarReunionAlGuest;

   // ej owner: {
   //     "name": "Sebastian",
   //     "lastname": "Perez",
   //     "botName": "Gaia",
   //     "botEmail": "gaia@gaiameet.com",
   //     "creationDate": "2017-09-19T16:30:01.315Z",
   //     "email": "sebalanus@gmail.com",
   //     "id": "59c14609ff49692cd6ba21d1"
   //   }

   // ej fechas: [
   //    "2017-08-22T00:00:00.000-03:00"
   // ]

   request.post({
      url: respuestaUrl,
      json: true,
      body: {
         owner: owner,
         hueco: hueco
      }
   }, function (error, response, body) {

      callback(body);

   });

}

module.exports.obtenerMensajeCoordinacionAGuest = obtenerMensajeCoordinacionAGuest;
