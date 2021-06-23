import React from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = {value: "Enter the first name:", name: "Thara"}

    }
    render() {

        return <h2>{this.state.value}{this.state.name}</h2>
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({value: "Enter the last name:",name:"Sri"})
        }, 1000)
    }
}
ReactDOM.render(<Lifecycle/>,document.getElementById('root'));
