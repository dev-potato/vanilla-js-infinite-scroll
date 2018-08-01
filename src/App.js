import React, { Component } from 'react';
import './App.css';
import ContactList from './components/index'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Infinite Load Contacts</h1>
        <ContactList />
      </div>
    );
  }
}

export default App;
