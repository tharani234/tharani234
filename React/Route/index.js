import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import{BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Employee from "./first student";
import Department from "./second student";

function App(){
    return(
        <div>
            <h2>Student Details</h2>
            <ul>
                <li><Link to="/student_one">Student_one</Link></li>
                <li><Link to="/student_two">Student_two</Link></li>
            </ul>
            <Route path="/student_one" component={Employee}/>
            <Route path="/student_two" component={Department}/>
        </div>
    )
}
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"));
