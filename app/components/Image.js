var React = require('react');
const PropTypes = require('prop-types');

function Image(props) {
    const image = props.image;
    const alt = props.alt;
    return (
        <img src={require( '../images/' + image + '.png')}  alt={alt}/>
    )
}

Image.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

module.exports = Image;