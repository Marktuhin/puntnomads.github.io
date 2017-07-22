var React = require('react');
const PropTypes = require('prop-types');
const Image = require('./Image');
const styled = require('styled-components').default;

    const Task = styled.div `
	 background-color: LightSkyBlue;
     padding-top: 5px;
     padding-bottom: 300px;
    `;

    const Title = styled.h1 `
	 font-size: 45px;
     font-family: Arial;
     font-weight: normal;
     height: 70px;
     text-align: center;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #e6e6e6;
     margin-top: 0;
     margin-bottom: 20px;
     background: linear-gradient(to right, #6190E8 , #a7bfe8);
     width: 83.33333333%;
     margin-left: auto;
     margin-right: auto;
     padding: 10px;
     box-sizing: border-box;
    `;

    const Text = styled.p `
	 font-family: Arial;
     margin-top: 10px;
     margin-bottom: 10px;
     text-align: center;
     color: #333;
     padding-left: 15%;
     padding-right: 15%;
     font-size: 26px;
    `;

    const Link = styled.a `
	 display: block;
     text-align: center;
     font-size: 30px;
     margin: 10px;
     padding-left: 15%;
     padding-right: 15%;
     text-decoration: none;
     color: #e6e6e6;
     &:hover {
      color: LawnGreen;
    }
    `;

function Project(props) {
    const name = props.name;
    const image = props.image;
    const alt = props.alt;
    const description = props.description;
    const technology = props.technology;
    const github = props.github;
    const preview = props.preview;
    return (
        <Task>
            <Title>{name}</Title>
            <Image 
            image={image}
            alt={alt}/>
            <Text>{description}</Text>
            <Text>{technology}</Text>
            <Link href={'https://github.com/puntnomads/'+github} target='_blank'>GitHub</Link>
            <Link href={'https://puntnomads.github.io/'+preview} target='_blank'>Live Preview</Link>
        </Task>
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