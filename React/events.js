import React from 'react';
import ReactDOM from 'react-dom';
class Greeting extends React.Component {
    shoot = (a) => {
        alert(a);
    }
    render() {
        return (
            <button onClick={() => this.shoot("Welcome")} style={{color: "white",padding: "10px",fontSize:"18px",backgroundColor:"green"}}>Click me</button>
            );
    }
}
ReactDOM.render(<Greeting />, document.getElementById('root'));
