const React = require('react');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;
const Image = require('./Image');

class Preview extends React.Component {
  render() {
    const link = this.props.link;
    const name = this.props.name;
    const image = this.props.image;
    const alt = this.props.alt;
    return (
        <div className='preview'>
            <Link to={'/'+link}>
            <p>{name}</p>
            <Image image={image} alt={alt}/>
            </Link>
        </div>
      
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