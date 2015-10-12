var nconf       = require('nconf');
var parseFilter = require('ldapjs').parseFilter;
var crypto      = require('crypto');
var _           = require('underscore');

module.exports = {

  config: function(request, reply){
    return reply({ ServerIP: nconf.get('Server:IP') }).code(200);
  },


  authenticate: function(request, reply){
    var response = { success: true };
    return reply(response).code(200);
  },

  search: function(request, reply){
    var response = { success: true };
    return reply(result).code(200);
  }

};
