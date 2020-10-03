import React from 'react';
import './css/style.css'
import Navbar from "./Page/Navbar";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import DetailUser from "./Page/DetailUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";
import ProtectedUserLogin from "./Component/ProtectedRouter";
import Login from "./Page/Login";
import Register from "./Page/Register";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Switch>
            <ProtectedRoute exact path="/">
                <Navbar>
                <Home />
                </Navbar>
            </ProtectedRoute>
            <Route path="/about">
                <Navbar>
                <About />
                </Navbar>
            </Route>
            <Route path="/contact">
                <Navbar>
                <Contact />
                </Navbar>
            </Route>
            <Route path="/DetailUser/:id">
                <DetailUser />
            </Route>
            <ProtectedUserLogin path="/login" component={Login} />
            <ProtectedUserLogin path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
        </div>
    );
}
