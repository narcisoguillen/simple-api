var LdapController = require('./controllers/ldapController');
var serverService  = require('./services/server');

var LdapNameSpace = [
  { method: 'GET',    path: '/LDAPServerIP',                            config : { handler: LdapController.config   } },
  { method: 'POST',   path: '/api/onelogin_ldap/v1/users/authenticate', config : { handler: LdapController.authenticate } },
  { method: 'POST',   path: '/api/onelogin_ldap/v1/users/ldap_search',  config : { handler: LdapController.search  } },
  { method: 'GET',    path: '/api/onelogin_ldap/v1/users/ldap_search',  config : { handler: LdapController.search  } },
];

module.exports = function(){
  serverService.server.route(LdapNameSpace);
};
