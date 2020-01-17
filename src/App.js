import React,{Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Movies from "./components/movies/movies";
import Customer from "./components/customers/customer";
import Rental from "./components/rentals/rentals";
import NotFound from "./components/common/notFound";
import NavBar from "./components/navbar/navBar";
import MoviesForm from "./components/movies/moviesForm";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/login/registerForm";

class App extends Component{
    render() {
        return(
            <React.Fragment>
                <NavBar/>
                <main className="container mt-3 text-center">
                    <Switch>
                        <Route path="/movies/:id" component={MoviesForm}/>
                        <Route path="/movies" component={Movies}/>
                        <Route path="/customer" component={Customer}/>
                        <Route path="/rentals" component={Rental}/>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/register" component={RegisterForm}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect from="/" exact to="/movies"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}

export default App;
