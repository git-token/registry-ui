'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.registry = exports.admin = undefined;

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

var _registry = require('./registry');

var _registry2 = _interopRequireDefault(_registry);

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.admin = _admin2.default;
exports.registry = _registry2.default;
exports.register = _register2.default;