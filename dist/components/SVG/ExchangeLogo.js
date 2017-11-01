"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx("path", {
	className: "path",
	d: "M 100 250 A 50 50 0 1 1 300 250 A 50 50 0 1 0 100 200 A 50 50 0 1 1 300 200 A 50 50 0 1 1 100 150 A 50 50 0 1 0 300 150 A 50 50 0 1 1 100 200 A 50 50 0 1 0 300 200 ",
	fill: "transparent",
	strokeLinejoin: "round",
	stroke: "#3e128c",
	strokeWidth: "6",
	strokeDasharray: "500, 500",
	strokeDashoffset: "1000"
});

var _ref2 = _jsx("path", {
	d: "M 200 200 L 300 150 L 300 250 L 200 300 L 100 250 L 100 150 L 200 100 L 255 127 ",
	fill: "transparent",
	strokeLinejoin: "round",
	stroke: "#cc5333",
	strokeWidth: "12"
});

var _ref3 = _jsx("circle", {
	cx: "255",
	cy: "127",
	r: "14",
	fill: "#cc5333"
});

var _ref4 = _jsx("circle", {
	cx: "255",
	cy: "127",
	r: "8",
	fill: "#2a1e38"
});

var _ref5 = _jsx("circle", {
	cx: "200",
	cy: "200",
	r: "14",
	fill: "#cc5333"
});

var _ref6 = _jsx("circle", {
	cx: "200",
	cy: "200",
	r: "8",
	fill: "#2a1e38"
});

var NetworkLogo = function (_Component) {
	_inherits(NetworkLogo, _Component);

	function NetworkLogo(opts) {
		_classCallCheck(this, NetworkLogo);

		return _possibleConstructorReturn(this, (NetworkLogo.__proto__ || Object.getPrototypeOf(NetworkLogo)).call(this, opts));
	}

	_createClass(NetworkLogo, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    height = _props.height,
			    style = _props.style;

			return _jsx("svg", {
				width: width,
				height: height,
				viewBox: "0 0 400 400",
				style: style
			}, void 0, _ref, _ref2, _ref3, _ref4, _ref5, _ref6);
		}
	}]);

	return NetworkLogo;
}(_react.Component);

exports.default = NetworkLogo;