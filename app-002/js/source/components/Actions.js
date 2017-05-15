/**
 * Created by AChechel on 15.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Actions = props =>
    <div className="Actions">
        <span tabIndex="0" className="ActionsInfo" title="More info" onClick={props.onAction.bind(null, 'info')}>&#10000;</span>
        <span tabIndex="0" className="ActionsDelete" title="Delete" onClick={props.onAction.bind(null, 'delete')}>x</span>
    </div>;



export default Actions