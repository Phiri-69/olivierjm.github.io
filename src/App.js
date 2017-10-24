import React, { Component } from 'react';
import { Header } from './components/Header';
import { MidSection } from './components/MidSection';
import { Experience } from './components/Experience';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MidSection />
        <Experience />
        
      </div>
    );
  }
}

export default App;
