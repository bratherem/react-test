/**
 * Created by AChechel on 15.05.2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Dialog extends Component {
    render() {
        return (
            <div className={this.props.modal ? 'Dialog DialogModal':'Dialog'}>
                <div className={this.props.modal ? 'DialogModalWrap': null}>
                    <div className="DialogHeader">{this.props.header}</div>
                    <div className="DialogBody">{this.props.children}</div>
                    <div className="DialogFooter">{
                        this.props.hasCancel ?
                            <span className="DialogDismiss" onClick={this.props.onAction.bind(this, 'dismiss')}>Cancel</span>:
                            null
                    } <Button onClick={this.props.onAction.bind(this, this.props.hasCancel ? 'cancel': 'dismiss')}>
                        {this.props.confirmLabel}
                    </Button>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        document.body.classList.remove('DialogModalOpen');
    }

    componentDidMount() {
        if (this.props.modal) {
            document.body.classList.add('DialogModalOpen')
        }
    }
}

Dialog.propTypes = {
    header: PropTypes.string.isRequired,
    confirmLabel: PropTypes.string,
    modal: PropTypes.bool,
    onAction: PropTypes.func,
    hasCancel: PropTypes.bool
};

Dialog.defaultProps = {
    confirmLabel: 'ok',
    modal: false,
    onAction: () => {},
    hasCancel: true
};

export default Dialog