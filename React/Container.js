import React from "react";
import './App.css'
import{Container}from '@material-ui/core'
// eslint-disable-next-line no-unused-vars
import {render} from "@testing-library/react";
import * as ReactDOM from "react-dom";

function App()
{
    return(
        <div>
            <Container style={{color:"red"}}>
                <h2>React Container method</h2>
            </Container>
            <form style={{border:"1px solid",width:"300px",left:"300px",position:"relative"}}>
                <Container>
                    <h4>Name:anu</h4>
                    <h4>Age:20</h4>
                    <h4>Place:chennai</h4>
                    <h4>Mobile:9878765654</h4>
                </Container>
            </form>
        </div>
    );
}

// eslint-disable-next-line no-undef
ReactDOM.render((<App/>) ,document.getElementById("root"))
