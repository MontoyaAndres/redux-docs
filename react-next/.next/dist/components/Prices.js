'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/andres/Documents/react/react-next/components/Prices.js';


var Prices = function (_React$Component) {
  (0, _inherits3.default)(Prices, _React$Component);

  function Prices() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Prices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currency: 'USD'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Prices, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = '';

      if (this.state.currency === 'USD') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }, ' Bitcoin rate for ', this.props.bpi.USD.description, ': ', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }, this.props.bpi.USD.code), ' ', _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, ' Bitcoin rate for ', this.props.bpi.GBP.description, ': ', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, this.props.bpi.GBP.code), ' ', _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, ' Bitcoin rate for ', this.props.bpi.EUR.description, ': ', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, this.props.bpi.EUR.code), ' ', _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, this.props.bpi.EUR.rate));
      }

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('ul', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, list), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('select', { onChange: function onChange(e) {
          return _this2.setState({ currency: e.target.value });
        }, className: 'form-control', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('option', { value: 'USD', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'EUR')));
    }
  }]);

  return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsInN0YXRlIiwiY3VycmVuY3kiLCJsaXN0IiwicHJvcHMiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUIsQTs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDbkI7Z0JBQVEsQSxBQUNJO0FBREosQUFDTjs7Ozs7NkJBR087bUJBQ1A7O1VBQUksT0FBSixBQUFXLEFBRVg7O1VBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFkLEFBQTJCLE9BQU8sQUFDaEM7K0JBQU8sY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO1NBQUEsRUFBbUQsMkJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQWxFLEFBQXNFLGFBQWMsc0JBQUEsY0FBQSxVQUFNLFNBQU4sQUFBWTtzQkFBWjt3QkFBQSxBQUFtQztBQUFuQztnQkFBbUMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQXRJLEFBQW9GLEFBQXNELE9BQWEscUJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBUztBQUFUO0FBQUEsZ0JBQVMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQXRMLEFBQU8sQUFBdUosQUFBNEIsQUFDM0w7QUFGRCxpQkFFVSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTyxBQUN2QzsrQkFBTyxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7U0FBQSxFQUFtRCwyQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBbEUsQUFBc0UsYUFBYyxzQkFBQSxjQUFBLFVBQU0sU0FBTixBQUFZO3NCQUFaO3dCQUFBLEFBQW1DO0FBQW5DO2dCQUFtQyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBdEksQUFBb0YsQUFBc0QsT0FBYSxxQkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUFTO0FBQVQ7QUFBQSxnQkFBUyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBdEwsQUFBTyxBQUF1SixBQUE0QixBQUMzTDtBQUZNLE9BQUEsTUFFQSxJQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEyQixPQUFPLEFBQ3ZDOytCQUFPLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtTQUFBLEVBQW1ELDJCQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUFsRSxBQUFzRSxhQUFjLHNCQUFBLGNBQUEsVUFBTSxTQUFOLEFBQVk7c0JBQVo7d0JBQUEsQUFBbUM7QUFBbkM7Z0JBQW1DLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUF0SSxBQUFvRixBQUFzRCxPQUFhLHFCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQVM7QUFBVDtBQUFBLGdCQUFTLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUF0TCxBQUFPLEFBQXVKLEFBQTRCLEFBQzNMO0FBRUQ7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNHO0FBREg7U0FERixBQUNFLEFBR0E7O29CQUFBO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQSxZQUFRLFVBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLEVBQUEsQUFBRSxPQUFoQyxBQUFLLEFBQWMsQUFBb0I7QUFBekQsV0FBa0UsV0FBbEUsQUFBNEU7b0JBQTVFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFlBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUNBLHdCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQVROLEFBQ0UsQUFLRSxBQUdFLEFBSVA7Ozs7O0VBN0JpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJQcmljZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW5kcmVzL0RvY3VtZW50cy9yZWFjdC9yZWFjdC1uZXh0In0=