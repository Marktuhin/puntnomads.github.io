const React = require('react');
const Header = require('./Header');
const Icon = require('react-fa').Icon;
const styled = require('styled-components').default;

    const Page = styled.div `
     width:100%;
     text-align: center;
     padding-top: 70px;
     height: 1000px;
     background-color: LightSkyBlue;
     height: 800px;
    `;

    const Icony = styled(Icon) `
     width: 20%;
     font-size: 70px;
     height: 50px;
     margin-top: 140px;
     box-sizing: border-box;
     color: #fff;
     &:hover {
       color: LawnGreen;
    }
    `;

    const Link = styled.a `
     font-size: 70px;
    `;

class Contact extends React.Component {
  render() {
    return (
      <section id='contact'>
        <Page>
          <Header header='Contact'/>
          <div>
            <Link
            href="mailto:puntnomads@gmail.com"
            target="_top"
            ><Icony name="envelope"/></Link>
            <Link
            href="https://www.linkedin.com/in/zakariyamoallin"
            target="_blank"
            ><Icony name="linkedin"/></Link>
            <Link
            href="https://github.com/puntnomads"
            target="_blank"
            ><Icony name="github"/></Link>
            <Link
            href="https://www.freecodecamp.com/puntnomads"
            target="_blank"
            ><Icony name="fire"/></Link>
            <Link
            href="https://codepen.io/puntnomads/"
            target="_blank"
            ><Icony name="codepen"/></Link>
          </div>
        </Page>
      </section>  
    )
  }
}

module.exports = Contact;
