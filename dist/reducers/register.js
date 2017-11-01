'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = register;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
  organization: '',
  adminAddress: '0x0',
  adminUsername: '',
  authToken: '',
  decimals: 8,
  symbol: '',
  tokenName: '',
  registered: false,
  showRegistration: true
};

function register() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_REGISTRATION_VALUE':
      return _extends({}, state, _defineProperty({}, action.id, action.value));
      break;
    default:
      return state;
  }
}