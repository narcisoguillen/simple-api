var nconf = require('nconf')
nconf.argv().env().file({ file: './config/configuration.json' });

var serverService = require('./src/services/server');
serverService.init();

require('./src/endpoints')();
