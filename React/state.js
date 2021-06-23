
import React from 'react';
import ReactDOM from 'react-dom';

class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"priya",
            mobile: "samsung",
            color: "black",
            year: 2
        };
    }
    render() {
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <p>
                    My new mobile {this.state.mobile} {this.state.color} color
                        {this.state.year} year warranty.
                </p>
            </div>
        );
    }
}

ReactDOM.render(<Mobile />, document.getElementById('root'));
