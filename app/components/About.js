const React = require('react');
const Header = require('./Header');

class About extends React.Component {
  render() {
    return (
      <section id='about'>
      <div className='page height about'>
        <Header header='About'/>
        <div className='desc'>
          <h2>This website presents a selection of the web apps I have developed using a range of frameworks & libraries.</h2>
          <h2>This portfolio website was developed using React.</h2>
        </div>
        <div className='desc'>
          <h2><span>Skills</span></h2>
          <h2>JavaScript/ES6, HTML5, CSS, React, Redux, Webpack, Node, Express, MongoDB, Android.</h2>
        </div>
        <div className='desc'>
          <h2><span>Read more about me</span></h2>
          <h2><a 
          href="https://drive.google.com/open?id=0B7Dg1cetZIyEWlFzeVlxdFh5bW8"
          target="_blank">
          Zakariya Moallin CV
          </a></h2>
        </div>
      </div>
      </section>
    )
  }
}

module.exports = About;