'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Form = require('./components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Actions = require('./components/Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Dialog = require('./components/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

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
        'h2',
        null,
        'Form'
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Form2.default, { fields: [{ label: 'Rating', type: 'rating', id: 'rateme', max: 5 }, { label: 'Greetings', id: 'freetext' }], initialData: { rateme: 4, freetext: 'Hello' } })
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'Actions'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Actions2.default, { onAction: function onAction(type) {
                    return alert(type);
                } })
        )
    ),
    _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'Dialog'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _Dialog2.default,
                { header: 'OUt-of-the-box-example', onAction: function onAction(type) {
                        return alert(type);
                    } },
                'Hello dialog!'
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _Dialog2.default,
                { header: 'No-cancel, custom button', hasCancel: false, confirmLabel: 'Whatever',
                    onAction: function onAction(type) {
                        return alert(type);
                    } },
                'Anything dose he see:',
                _react2.default.createElement(
                    _Button2.default,
                    null,
                    'A button'
                )
            )
        )
    )
), document.getElementById('pad'));