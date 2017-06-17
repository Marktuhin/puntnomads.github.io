var React = require('react');
const PropTypes = require('prop-types');
const Image = require('./Image');

function Project(props) {
    const name = props.name;
    const image = props.image;
    const alt = props.alt;
    const description = props.description;
    const technology = props.technology;
    const github = props.github;
    const preview = props.preview;
    return (
        <div className='project'>
            <h1>{name}</h1>
            <Image 
            image={image}
            alt={alt}/>
            <p>{description}</p>
            <p>{technology}</p>
            <a href={'https://github.com/puntnomads/'+github} target='_blank'>GitHub</a>
            <a href={'https://puntnomads.github.io/'+preview} target='_blank'>Live Preview</a>
        </div>
    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
}

module.exports = Project;