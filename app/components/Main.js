const React = require('react');
const Nav = require('./Nav');
const Home = require('./Home');
const About = require('./About');
const Portfolio = require('./Portfolio');
const Contact = require('./Contact');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav/>  
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    )
  }
}

module.exports = Main;