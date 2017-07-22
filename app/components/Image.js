var React = require('react');
const PropTypes = require('prop-types');
const styled = require('styled-components').default;

    const Picture = styled.img `
	 margin-bottom: 20px;
     width: 320px;
     display: block;
     margin: 0 auto;
     height: 240px;
     border: 1px solid black;
    `;

function Image(props) {
    const image = props.image;
    const alt = props.alt;
    return (
        <Picture src={require( '../images/' + image + '.png')}  alt={alt}/>
    )
}

Image.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

module.exports = Image;