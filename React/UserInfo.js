import React from "react";
import * as ReactDOM from "react-dom";
function TestOutput(props) {
    return null;
}
class App extends React.Component {
    firstName;
    lastName;
    first_name;
    last_name;

    render() {
        this.state = [
            {
                avatar: "https://reqres.in/img/faces/2-image.jpg",
                email: "janet.weaver@reqres.in",
                first_name: "Janet",
                id: 2,
                last_name: "Weaver", name: "janat weaver",
            },
            {
                id: 7,
                email: "michael.lawson@reqres.in",
                first_name: "Michael",
                last_name: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg",
                name: "michael lawson"
            },
            {
                id: 10,
                email: "byron.fields@reqres.in",
                first_name: "Byron",
                last_name: "Fields",
                avatar: "https://reqres.in/img/faces/10-image.jpg"
            },
        ];
        return (
            <div>
                {this.state.map((userInfo) => {
                    return (
                        <div>
                            <img src={userInfo.avatar}/>
                            <h1>{userInfo.name}</h1>
                            <h1>{userInfo.id}</h1>
                            <span>{userInfo.age}</span>
                            <p>{userInfo.email}</p>
                        </div>
                    );
                })}
            </div>
        );
    }

}
ReactDOM.render(<App />, document.getElementById('root'));
