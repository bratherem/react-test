/**
 * Created by AChechel on 12.05.2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends Component {
    render() {
        return this.props.href ? <a {...this.props} className={classNames('Button', this.props.className)} >{this.props.defaultValue}</a> : <button {...this.props} className={classNames('Button', this.props.className)} >{this.props.defaultValue}</button>;
    }
}

Button.propTypes = {
    href: PropTypes.string,
    defaultValue: PropTypes.string,
    className: PropTypes.arrayOf(PropTypes.string)
};

export default Button