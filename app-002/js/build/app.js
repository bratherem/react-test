'use strict';

var _Excel = require('./components/Excel');

var _Excel2 = _interopRequireDefault(_Excel);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Suggest = require('./components/Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!headers) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        _react2.default.createElement(_Logo2.default, null),
        ' Welcome to Whinepad!'
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Excel2.default, { headers: headers, initialData: data })
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Button2.default, { href: "#", defaultValue: "Link", className: ["aHref", "LinkTo"] })
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Button2.default, { href: null, defaultValue: "Button", className: ["buttNoHref", "ButtTo"] })
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'Suggestion'
        ),
        _react2.default.createElement(_Suggest2.default, { options: ['eenie', 'mennie', 'mine', 'mo'] })
    )
), document.getElementById('pad'));