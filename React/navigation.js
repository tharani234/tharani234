import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-undef
let ReactRouter;
const {Router, Route, Link} = ReactRouter;
const NavComponent = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <ul className="nav nav-pills">
                        <li><a href="#">Home</a></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/school">School </Link></li>
                        <li><Link to="/end">End</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
});
// eslint-disable-next-line no-unused-vars
const HomeComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Welcome to my home</h2>
            </div>
        );
    }
});
const SchoolComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Welcome to mu school </h2>
            </div>
        );
    }
});
const EndComponent = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Thank you</h2>
            </div>
        );
    }
});
ReactDOM.render(
    <Router>
        <Route path="/" component={NavComponent}>
            {/*Nesting Happens Here, notice since router is
         another component at it's core, these are it's children */}
            {/* eslint-disable-next-line no-undef */}
            <Route path ="/home" component={HomeComponent}/>
            <Route path ="/school" component={SchoolComponent}/>
        </Route>
        {/*This guy on the other hand is not*/}
        <Route path ="/end" component={EndComponent}/>
    </Router>,
    document.getElementById('App')
);
export default class App {
}
