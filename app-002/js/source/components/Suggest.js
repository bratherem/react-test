/**
 * Created by AChechel on 12.05.2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Suggest extends Component {
    getValue() {
        return this.refs.lowlevelinput.value;
    }

    render() {
        const randomid = Math.random().toString(16).substr(2);

        return (
            <div>
                <input
                    list={randomid}
                    defaultValue={this.props.defaultValue}
                    ref="lowlevelinput"
                    id={this.props.id} />
                <datalist id={randomid}>
                    { this.props.options.map( (item, idx) => <option value={item} key={idx} /> ) }
                </datalist>
            </div>
        );
    }
}

Suggest.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
};

export default Suggest