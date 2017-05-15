'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button";
import Form from "./components/Form";
import Actions from "./components/Actions";
import Dialog from "./components/Dialog";

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(
    <div>
        <h2>Form</h2>
        <div>
            <Form fields={[
                {label: 'Rating', type: 'rating', id: 'rateme', max: 5},
                {label: 'Greetings', id: 'freetext'}
            ]} initialData={{rateme: 4, freetext: 'Hello'}}/>
        </div>
        <div>
            <h2>Actions</h2>
            <div><Actions onAction={type => alert(type)} /></div>
        </div>
        <div>
            <h2>Dialog</h2>
            <div><Dialog header="OUt-of-the-box-example" onAction={type => alert(type)} >Hello dialog!</Dialog></div>
            <div><Dialog header="No-cancel, custom button" hasCancel={false} confirmLabel="Whatever"
                         onAction={type => alert(type)} >Anything dose he see:<Button>A button</Button></Dialog></div>
        </div>
    </div>,
    document.getElementById('pad')
);