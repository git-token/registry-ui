'use strict';

var _RegistryActions = require('./RegistryActions');

var _RegistryActions2 = _interopRequireDefault(_RegistryActions);

var _appConfig = require('../../app.config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  registryActions: new _RegistryActions2.default({
    torvaldsNetwork: _appConfig.torvaldsNetwork,
    registryAddress: _appConfig.registryAddress
  })
};