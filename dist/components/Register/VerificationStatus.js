'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _NetworkLogo = require('gittoken-svg-icons/dist/NetworkLogo');

var _NetworkLogo2 = _interopRequireDefault(_NetworkLogo);

var _RegistrationForm = require('./RegistrationForm');

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('br', {});

var _ref2 = _jsx('br', {});

var _ref3 = _jsx(_reactBootstrap.Col, {
  sm: 12
}, void 0, _jsx('hr', {}));

var VerificationStatusComponent = function (_Component) {
  _inherits(VerificationStatusComponent, _Component);

  function VerificationStatusComponent() {
    _classCallCheck(this, VerificationStatusComponent);

    return _possibleConstructorReturn(this, (VerificationStatusComponent.__proto__ || Object.getPrototypeOf(VerificationStatusComponent)).call(this));
  }

  _createClass(VerificationStatusComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;


      dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'verificationStatus', value: 'Verifying Organization...' });
      dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'organizationVerified', value: false });

      setTimeout(function () {
        // dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'activeSlide', value: 'start' })
        dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'verificationStatus', value: 'Verification Success' });
        dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'organizationVerified', value: true });
      }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          _props$Register = _props.Register,
          tos = _props$Register.tos,
          organization = _props$Register.organization,
          verificationStatus = _props$Register.verificationStatus,
          organizationVerified = _props$Register.organizationVerified;


      return _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        sm: 12
      }, void 0, _jsx('div', {
        style: { textAlign: 'center' }
      }, void 0, _jsx(_NetworkLogo2.default, {
        width: '50%',
        style: { marginBottom: '-10%' }
      }), _jsx('h1', {}, void 0, verificationStatus), _ref, organizationVerified ? _jsx(_reactBootstrap.Button, {
        onClick: function onClick() {
          dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'activeSlide', value: 'start' });
        },
        bsSize: 'sm',
        bsStyle: 'success',
        block: true
      }, void 0, 'Create GitToken') : null, _ref2)), _ref3);
    }
  }]);

  return VerificationStatusComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Register: store.Register
  };
};

var VerificationStatus = (0, _reactRedux.connect)(mapStoreToProps)(VerificationStatusComponent);

exports.default = VerificationStatus;