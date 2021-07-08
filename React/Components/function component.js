
import React from 'react';
import ReactDOM from 'react-dom';
function Details() {
const name = "Hema";
const id="30";
const place="chennai"
    return (
        <div className="App">
            <p> {name} </p>
            <h3>{id}</h3>
            <h3>{place}</h3>
        </div>
    );
}
ReactDOM.render(<Details />, document.getElementById('root'));
