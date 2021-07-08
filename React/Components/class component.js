import React from "react";
import ReactDOM from 'react-dom';

class Details extends React.Component{
    render() {
        return(
<form>
             <h4>Components are two types</h4>
    <h4>It's a class component</h4>
    <input type={"text"} placeholder={"class component"}/>
</form>
    )
    }
}
ReactDOM.render((<Details/>) ,document.getElementById("root"))
