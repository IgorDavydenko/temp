import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';

import Header from './Header/index.js'
import Content from './Content/index.js'
import Footer from './Footer/index.js'

import backgroundImg from "../assets/background.jpg";


function App() {
  return (
    <div>
      <Router>
        <div className="charityApp">
            <Header />
            <Content />
            <Footer />
        </div>
        {/* <section className="banner"></section> */}
      </Router>
      {/* <div className="banner"
              style={{ backgroundImage: `url(${backgroundImg})` }}/> */}
    </div>
  );
}

export default App;
