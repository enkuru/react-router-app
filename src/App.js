import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';

import News from './components/News';
import Profile from './components/Profile';
import Error from './components/Error';

class App extends Component {
  state = {
    loggedIn: false,
  };

  onClickLogin = () => {
    this.setState(
      prevState => ({
        loggedIn: !prevState.loggedIn
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Router>{/*Route a path verilmezse yer sayfada gösterilir*/}
          <div>{/*
            <Link to={"/"}>Home</Link><br/>
            <Link to={"/contact"}>Contact</Link><br/>
            <Link to={"/news/2"}>News</Link><br/>*/}
            <NavLink activeStyle={{color: "red"}} exact
                     to={"/"}>Home</NavLink><br/>{/*activeStyle yerine acitveClassName ile class da verilebilir*/}
            <NavLink activeStyle={{color: "red"}} exact to={"/contact"}>Contact</NavLink><br/>
            <NavLink activeStyle={{color: "red"}} exact to={"/news/2"}>News</NavLink><br/>
            <NavLink activeStyle={{color: "red"}} exact to={"/profile"}>Profile</NavLink><br/><br/>
            <button onClick={this.onClickLogin}>{this.state.loggedIn ? "Logout" : "Login"}</button>

            <Switch>
              <Route path="/" exact strict render={() => {
                return (<h1>Home Page</h1>)
              }}/>{/*exact eşitse yönlendir demek, eğer konulmazsa / ve /contactda da '/' olduğu için homepage hep render edilir*/}
              <Route path="/contact" exact strict render={() => {
                return (<h1>Contact Page</h1>)
              }}/>{/*strict /contact ve /contact/ yerine sadece /contact ın geçerli olmasını sağlar, birebir eşirse render et demektir*/}
              <Route path="/news/:id" exact strict component={News}/>
              <Route path="/profile" exact strict
                     render={() => this.state.loggedIn ? (<Profile/>) : (<Redirect to="/"/>)}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
