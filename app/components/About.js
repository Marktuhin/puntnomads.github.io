const React = require('react');
const Header = require('./Header');
const styled = require('styled-components').default;

    const Page = styled.div `
	   width:100%;
     text-align: center;
     padding-top: 70px;
     height: 1000px;
     background-color: LightBlue;
    `;

    const Description = styled.div `
	   background-color: #a7bfe8;
     width: 67%;
     margin: auto;
     margin-top: 20px;
    `;

    const Text = styled.h2 `
	   font-weight: normal;
     padding: 20px;
     margin: 0;
    `;

    const Title = styled.span `
	   font-weight: bold;
    `;

    const Link = styled.a `
     color: blue;
     &:hover {
       color: LawnGreen;
     }
    `;

class About extends React.Component {
  render() {


    return (
      <section id='about'>
      <Page>
        <Header header='About'/>
        <Description>
          <Text>This website presents a selection of the web apps I have developed using a range of frameworks & libraries.</Text>
          <Text>This portfolio website was developed using React.</Text>
        </Description>
        <Description>
          <Text><Title>Skills</Title></Text>
          <Text>JavaScript/ES6, HTML5, CSS, React, Redux, Webpack, Node, Express, MongoDB, Android.</Text>
        </Description>
        <Description>
          <Text><Title>Read more about me</Title></Text>
          <Text><Link
          href="https://drive.google.com/open?id=0B7Dg1cetZIyERDY2NEpLRUg0TzQ"
          target="_blank">
          Zakariya Moallin CV
          </Link></Text>
        </Description>
      </Page>
      </section>
    )
  }
}

module.exports = About;
