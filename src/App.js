import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact strict render={()=>{return (<h1>Home Page</h1>)}}/>{/*exact eşitse yönlendir demek, eğer konulmazsa / ve /contactda da '/' olduğu için homepage hep render edilir*/}
            <Route path="/contact" exact strict render={()=>{return (<h1>Contact Page</h1>)}}/>{/*strict /contact ve /contact/ yerine sadece /contact ın geçerli olmasını sağlar, birebir eşirse render et demektir*/}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
