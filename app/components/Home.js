const React = require('react');
const styled = require('styled-components').default;
const keyframes = require('styled-components').keyframes;
const WebFont = require('webfontloader');

    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });

    const animatedBackground = keyframes`
       from { background-position: 0 0; }
       to { background-position: 100% 0; }
       `;

    const Page = styled.div `
	   width:100%;
     text-align: center;
     padding-top: 70px;
     height: 1000px;
     display:table;
     animation: ${animatedBackground} 40s linear infinite;
     background-image: url(https://davidwalsh.name/demo/bg-clouds.png);
     background-size: cover;
    `;

    const Text = styled.div `
	   margin-top: 110px;
    `;

    const Name = styled.h1 `
	   font-size: 96px;
     margin: 0;
     font-weight: normal;
     color: #fff;
     font-family: Montserrat;
    `;

    const Description = styled.h2 `
	   text-align: center;
     font-size: 2.8rem;
     font-family: Montserrat;
     color: #fff;
     margin: 0;
    `;

class Home extends React.Component {
  render() {
    return (
      <section id='home'>
      <Page>
        <Text>
           <Name>Zakariya Moallin</Name>
           <Description>Aspiring Web Developer</Description>
        </Text>
      </Page>
      </section>
    )
  }
}

module.exports = Home;
