var Hapi  = require('hapi');
var nconf = require('nconf')
var _     = require('underscore');

module.exports = {

  init: function(){
    this.server  = new Hapi.Server();

    this.server.connection({
      host: nconf.get('HOST'),
      port: nconf.get('PORT'),
    });

    // Start API
    this.server.start(_.bind(function(){
      console.log('info', 'Server running at: ' + this.server.info.uri);
    }, this));

  }

};
