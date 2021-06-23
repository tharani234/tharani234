
import React from 'react';
import ReactDOM from 'react-dom';

class Name extends React.Component {
    render() {
        return <h2>Enter the name:{this.props.name}</h2>;
            }
}
class Age extends React.Component {
    render() {
        return <h2>Enter the age:{this.props.age}</h2>;
        }
}
class Details extends React.Component {
    render() {
        return (
            <div>
                <Name name="thara" />
                <Age age="21"/>
            </div>
        );
    }
}

ReactDOM.render(<Details />, document.getElementById('root'));
