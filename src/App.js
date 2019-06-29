import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import './App.scss';
import AssignmentOne from "./pages/assignment-one/assignement-one";
import AssignmentTwo from "./pages/assignment-two/assignment-two-conatiner";
import BMSLogo from './assets/images/bms.jpg';

class App extends Component {
    render() {
        return (
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a href="/">
                                    <img className="logo" src={BMSLogo} alt="Logo"/>
                                    {/*<h3 className="title is-3">BMS</h3>*/}
                                </a>
                                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                        <span/>
                                        <span/>
                                        <span/>
                                    </span>
                            </div>
                            <div id="navbarMenuHeroA" className="navbar-menu">
                                <div className="navbar-end">
                                    <NavLink activeClassName="is-active" to="/one" className="navbar-item">
                                        Assignment One
                                    </NavLink>
                                    <NavLink activeClassName="is-active" to="/two" className="navbar-item">
                                        Assignment Two
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="hero-body">
                    <Switch>
                        <Route exact path="/one" component={AssignmentOne}/>
                        <Route exact path="/two" component={AssignmentTwo}/>
                        <Redirect to="/one"/>
                    </Switch>
                </div>
            </section>
        );
    }
}

export default App;
