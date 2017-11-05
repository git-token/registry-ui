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

var _index2 = require('../../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_reactBootstrap.Col, {
  sm: 12
}, void 0, _jsx('hr', {}));

var RegistrationFormComponent = function (_Component) {
  _inherits(RegistrationFormComponent, _Component);

  function RegistrationFormComponent() {
    _classCallCheck(this, RegistrationFormComponent);

    return _possibleConstructorReturn(this, (RegistrationFormComponent.__proto__ || Object.getPrototypeOf(RegistrationFormComponent)).call(this));
  }

  _createClass(RegistrationFormComponent, [{
    key: 'setValue',
    value: function setValue(e) {
      var dispatch = this.props.dispatch;
      var _e$target = e.target,
          value = _e$target.value,
          id = _e$target.id;


      dispatch({ type: 'SET_REGISTRATION_DETAILS', id: id, value: value });
    }
  }, {
    key: 'validateOrganization',
    value: function validateOrganization() {
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          Register = _props.Register;
      var showRegistration = Register.showRegistration,
          organization = Register.organization,
          symbol = Register.symbol,
          decimals = Register.decimals,
          adminAddress = Register.adminAddress,
          adminUsername = Register.adminUsername,
          authToken = Register.authToken,
          tokenName = Register.tokenName,
          tos = Register.tos;


      var min = 0;
      var max = 18;

      return _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        sm: 6
      }, void 0, _jsx('form', {}, void 0, _jsx(_index.FormItem, {
        type: 'text',
        value: adminAddress != '0x0' ? adminAddress : '',
        placeholder: '0x0',
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Admin Ethereum Address',
        controlId: 'adminAddress',
        help: "Please enter your Ethereum address (e.g. 0x7c6e58f14fe93bf4fca9a4dd0eb63b3e174a2205)"
      }), _jsx(_index.FormItem, {
        type: 'text',
        value: adminUsername ? adminUsername : '',
        placeholder: '',
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Admin GitHub Username',
        controlId: 'adminUsername',
        help: "Please enter your GitHub Username"
      }), _jsx(_index.FormItem, {
        type: 'password',
        value: authToken ? authToken : '',
        placeholder: '',
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Enter GitHub Open Authorization Token',
        controlId: 'authToken',
        help: "Please enter your GitHub Open Authorization Token (e.g. 4ab299c8ad6ed14f31923dd94f8b5f5cb89dfb54)"
      }), _jsx(_index.FormItem, {
        type: 'text',
        value: organization ? organization : '',
        placeholder: 'git-token',
        onChange: this.setValue.bind(this),
        validationState: this.validateOrganization,
        label: 'Organization Name',
        controlId: 'organization',
        help: 'Please input your GitHub organization name. (e.g. git-token)'
      }))), _jsx(_reactBootstrap.Col, {
        sm: 6
      }, void 0, _jsx('form', {}, void 0, _jsx(_index.FormItem, {
        type: 'text',
        value: tokenName ? tokenName : '',
        placeholder: 'GitToken',
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Organization Token Name',
        controlId: 'tokenName',
        help: "Please set your organization's GitToken name. (e.g. GitToken)"
      }), _jsx(_index.FormItem, {
        type: 'text',
        value: symbol ? symbol : '',
        placeholder: 'GTK',
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Organization Token Symbol',
        controlId: 'symbol',
        help: "Please set your organization's GitToken symbol. (e.g. GTK)"
      }), _jsx(_index.FormItem, {
        type: 'number',
        value: decimals ? decimals : 8,
        placeholder: 8,
        min: min,
        max: max,
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Token Decimals',
        controlId: 'decimals',
        help: 'Enter desired token decimal places of precision. Min=' + min + '; Max=' + max
      }))), _jsx(_reactBootstrap.Col, {
        sm: 12
      }, void 0, _jsx(_reactBootstrap.Button, {
        bsSize: 'sm',
        bsStyle: 'primary',
        onClick: function onClick() {
          dispatch({ type: 'SET_REGISTRATION_DETAILS', id: 'activeSlide', value: 'verification' });
          dispatch(_index2.registryActions.verifyOrganization({
            admin: adminAddress,
            username: adminUsername,
            token: authToken,
            organization: organization
          }));
        },
        block: true
      }, void 0, ' Verify GitHub Organization')), _ref);
    }
  }]);

  return RegistrationFormComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Register: store.Register
  };
};

var RegistrationForm = (0, _reactRedux.connect)(mapStoreToProps)(RegistrationFormComponent);

exports.default = RegistrationForm;