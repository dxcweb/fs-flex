webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _fsFlex = __webpack_require__(185);
	
	__webpack_require__(193);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/11/18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Horizontal = function (_Component) {
	    _inherits(Horizontal, _Component);
	
	    function Horizontal() {
	        _classCallCheck(this, Horizontal);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    Horizontal.prototype.render = function render() {
	        var item = {
	            bc: '#37caec',
	            m: 10
	        };
	        return _react2.default.createElement(
	            'div',
	            { style: { padding: 20 } },
	            _react2.default.createElement(
	                'h1',
	                null,
	                '\u6C34\u5E73\u5E03\u5C40'
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20 },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '1'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '2'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '3'
	                )
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20 },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({ f: '1' }, item),
	                    '1'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '2'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '3'
	                )
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20 },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({ f: '1' }, item),
	                    '1'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({ f: '2' }, item),
	                    '2'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '3'
	                )
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20, j: 'c' },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '1'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '2'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '3'
	                )
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20, j: 'e' },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '1'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '2'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '3'
	                )
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20, j: 'a' },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '1'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '2'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '3'
	                )
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20, j: 'b' },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '1'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '2'
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    _extends({}, item, { w: 100, h: 100 }),
	                    '3'
	                )
	            ),
	            _react2.default.createElement(
	                _fsFlex.Block,
	                { hf: true, bd: true, mt: 20, h: 200, j: 'b' },
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    { a: 's' },
	                    _react2.default.createElement(
	                        _fsFlex.Block,
	                        _extends({}, item, { w: 100, h: 100 }),
	                        '1'
	                    )
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    { a: 'c' },
	                    _react2.default.createElement(
	                        _fsFlex.Block,
	                        _extends({}, item, { w: 100, h: 100 }),
	                        '2'
	                    )
	                ),
	                _react2.default.createElement(
	                    _fsFlex.Block,
	                    { a: 'e' },
	                    _react2.default.createElement(
	                        _fsFlex.Block,
	                        _extends({}, item, { w: 100, h: 100 }),
	                        '3'
	                    )
	                )
	            )
	        );
	    };
	
	    return Horizontal;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Horizontal, null), document.getElementById('__react-content'));

/***/ })
]);
//# sourceMappingURL=1.horizontal.js.map