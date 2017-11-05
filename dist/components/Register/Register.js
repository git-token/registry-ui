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

var _index = require('../Generic/index');

var _GettingStarted = require('./GettingStarted');

var _GettingStarted2 = _interopRequireDefault(_GettingStarted);

var _RegistrationForm = require('./RegistrationForm');

var _RegistrationForm2 = _interopRequireDefault(_RegistrationForm);

var _VerificationStatus = require('./VerificationStatus');

var _VerificationStatus2 = _interopRequireDefault(_VerificationStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_RegistrationForm2.default, {});

var _ref2 = _jsx(_VerificationStatus2.default, {});

var _ref3 = _jsx(_GettingStarted2.default, {});

var RegisterComponent = function (_Component) {
  _inherits(RegisterComponent, _Component);

  function RegisterComponent() {
    _classCallCheck(this, RegisterComponent);

    return _possibleConstructorReturn(this, (RegisterComponent.__proto__ || Object.getPrototypeOf(RegisterComponent)).call(this));
  }

  _createClass(RegisterComponent, [{
    key: 'setValue',
    value: function setValue(e) {
      var dispatch = this.props.dispatch;
      var _e$target = e.target,
          value = _e$target.value,
          id = _e$target.id;


      dispatch({ type: 'SET_REGISTRATION_DETAILS', id: id, value: value });
    }
  }, {
    key: 'renderSlide',
    value: function renderSlide() {
      var activeSlide = this.props.Register.activeSlide;

      switch (activeSlide) {
        case 'registrationForm':
          return _ref;
          break;
        case 'verification':
          return _ref2;
          break;
        default:
          return _ref3;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          activeSlide = _props.Register.activeSlide;


      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420'
        },
        header: _jsx('h1', {}, void 0, _jsx(_NetworkLogo2.default, {
          width: '42px',
          style: { marginTop: '-10px', marginBottom: '-16px', marginRight: '-8px' }
        }), '  | Register Organization'),
        collapsible: true,
        expanded: true
      }, void 0, this.renderSlide()));
    }
  }]);

  return RegisterComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Register: store.Register
  };
};

var Register = (0, _reactRedux.connect)(mapStoreToProps)(RegisterComponent);

exports.default = Register;