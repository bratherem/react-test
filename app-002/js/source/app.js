'use strict';

import Excel from './components/Excel';
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button";
import Suggest from "./components/Suggest";

let headers = localStorage.getItem('headers');
let data = localStorage.getItem('data');

if (!headers) {
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(
    <div>
        <h1>
            <Logo/> Welcome to Whinepad!
        </h1>
        <div>
            <Excel headers={headers} initialData={data}/>
        </div>
        <div>
            <Button href={"#"} defaultValue={"Link"} className={["aHref","LinkTo"]} />
        </div>
        <div>
            <Button href={null} defaultValue={"Button"}  className={["buttNoHref","ButtTo"]} />
        </div>
        <div>
            <h2>Suggestion</h2>
            <Suggest options={['eenie', 'mennie', 'mine', 'mo']} />
        </div>
    </div>,
    document.getElementById('pad')
);