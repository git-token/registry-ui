'use strict';

var _RegistryActions = require('./RegistryActions');

var _RegistryActions2 = _interopRequireDefault(_RegistryActions);

var _appConfig = require('../../app.config.js');

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  registryActions: new _RegistryActions2.default(_appConfig2.default)
};