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

var _index = require('../Generic/index');

var _index2 = require('../../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('h3', {}, void 0, 'Create Registry');

var CreateComponent = function (_Component) {
  _inherits(CreateComponent, _Component);

  function CreateComponent() {
    _classCallCheck(this, CreateComponent);

    return _possibleConstructorReturn(this, (CreateComponent.__proto__ || Object.getPrototypeOf(CreateComponent)).call(this));
  }

  _createClass(CreateComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      console.log('registryActions', _index2.registryActions);
    }
  }, {
    key: 'setValue',
    value: function setValue(e) {
      var dispatch = this.props.dispatch;
      var _e$target = e.target,
          value = _e$target.value,
          id = _e$target.id;


      dispatch({ type: 'SET_REGISTRATION_DETAILS', id: id, value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$admin = this.props.admin,
          address = _props$admin.address,
          signer = _props$admin.signer;


      return _jsx('div', {
        style: { height: '1200px', textAlign: 'center' }
      }, void 0, _jsx(_reactBootstrap.Row, {}, void 0, _jsx(_reactBootstrap.Col, {
        sm: 12
      }, void 0, _ref, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        },
        collapsible: true,
        expanded: true
      }, void 0, _jsx(_index.FormItem, {
        type: 'text',
        value: address,
        placeholder: '0x0',
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Admin Ethereum Address',
        controlId: 'address',
        help: "Please enter your Ethereum address (e.g. 0x7c6e58f14fe93bf4fca9a4dd0eb63b3e174a2205)"
      }), _jsx(_index.FormItem, {
        type: 'text',
        value: signer,
        placeholder: '0x0',
        onChange: this.setValue.bind(this),
        validationState: function validationState() {
          return null;
        },
        label: 'Admin Ethereum Address',
        controlId: 'signer',
        help: "Please enter your Ethereum address (e.g. 0x7c6e58f14fe93bf4fca9a4dd0eb63b3e174a2205)"
      })))));
    }
  }]);

  return CreateComponent;
}(_react.Component);

var mapStoreToProps = function mapStoreToProps(store, props) {
  return {
    Admin: store.Admin
  };
};

var Create = (0, _reactRedux.connect)(mapStoreToProps)(CreateComponent);

exports.default = Create;