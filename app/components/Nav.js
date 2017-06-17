var React = require('react');
const HashLink = require( 'react-router-hash-link').HashLink;
const Headroom = require('react-headroom').default;

function Nav() {
    
    return (
        <div className='headroom-wrapper'>
            <Headroom disableInlineStyles>
                <ul>
                    <li><HashLink  to='/#home'>Home</HashLink></li>
                    <li><HashLink  to='/#about'>About</HashLink></li>
                    <li><HashLink  to='/#portfolio'>Portfolio</HashLink></li>
                    <li><HashLink  to='/#contact'>Contact</HashLink></li>
                </ul>
            </Headroom>
        </div>
    )
}

module.exports = Nav;