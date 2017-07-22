const React = require('react');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;
const Image = require('./Image');
const styled = require('styled-components').default;

    const Section = styled.div `
     box-sizing: border-box;
    `;

    const Text = styled.p `
     font-size: 26px;
    `;

    const Linky = styled(Link) `
     color: blue;
     &:hover {
       color: LawnGreen;
     }
    `;

class Preview extends React.Component {
  render() {
    const link = this.props.link;
    const name = this.props.name;
    const image = this.props.image;
    const alt = this.props.alt;
    return (
        <Section>
            <Linky to={'/'+link}>
            <Text>{name}</Text>
            <Image image={image} alt={alt}/>
            </Linky>
        </Section>
      
    )
  }
}

Preview.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired,  
  image: PropTypes.string.isRequired
}

module.exports = Preview;