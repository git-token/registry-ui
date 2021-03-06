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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {}), _jsx('th', {})));

var _ref2 = _jsx('td', {}, void 0, 'Organization');

var _ref3 = _jsx('td', {}, void 0, 'Token Address');

var SummaryComponent = function (_Component) {
  _inherits(SummaryComponent, _Component);

  function SummaryComponent() {
    _classCallCheck(this, SummaryComponent);

    return _possibleConstructorReturn(this, (SummaryComponent.__proto__ || Object.getPrototypeOf(SummaryComponent)).call(this));
  }

  _createClass(SummaryComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var organization = this.props.organization;
      var _organization = organization._organization,
          _token = organization._token,
          _symbol = organization._symbol,
          _date = organization._date,
          _registeredBy = organization._registeredBy;


      return _jsx('div', {}, void 0, _jsx(_reactBootstrap.Panel, {
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: '5px',
          borderStyle: 'solid',
          borderColor: '#e95420'
        },
        header: _jsx('h3', {}, void 0, _organization, ' Summary')
      }, void 0, _jsx(_reactBootstrap.Table, {}, void 0, _ref, _jsx('tbody', {}, void 0, _jsx('tr', {}, void 0, _ref2, _jsx('td', {}, void 0, _organization)), _jsx('tr', {}, void 0, _ref3, _jsx('td', {}, void 0, _token))))));
    }
  }]);

  return SummaryComponent;
}(_react.Component);

exports.default = SummaryComponent;