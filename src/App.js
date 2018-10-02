import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const News = ({match}) => {
  return (<h1>News Page {match.params.id}</h1>)
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact strict render={() => {
              return (<h1>Home Page</h1>)
            }}/>{/*exact eşitse yönlendir demek, eğer konulmazsa / ve /contactda da '/' olduğu için homepage hep render edilir*/}
            <Route path="/contact" exact strict render={() => {
              return (<h1>Contact Page</h1>)
            }}/>{/*strict /contact ve /contact/ yerine sadece /contact ın geçerli olmasını sağlar, birebir eşirse render et demektir*/}
            <Route path="/news/:id" exact strict component={News}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
