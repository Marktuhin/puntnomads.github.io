const React = require('react');
const Header = require('./Header');
const Icon = require('react-fa').Icon;

class Contact extends React.Component {
  render() {
    return (
      <section id='contact'>
        <div className='page height contact'>
          <Header header='Contact'/>
          <div className='icons'>
            <a
            href="mailto:puntnomads@gmail.com"
            target="_top"
            ><Icon name="envelope"/></a>
            <a
            href="https://www.linkedin.com/in/zakariyamoallin"
            target="_blank"
            ><Icon name="linkedin"/></a>
            <a
            href="https://github.com/puntnomads"
            target="_blank"
            ><Icon name="github"/></a>
            <a
            href="https://www.freecodecamp.com/puntnomads"
            target="_blank"
            ><Icon name="fire"/></a>
            <a
            href="https://codepen.io/puntnomads/"
            target="_blank"
            ><Icon name="codepen"/></a>
          </div>
        </div>
      </section>  
    )
  }
}

module.exports = Contact;
