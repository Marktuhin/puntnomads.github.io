var React = require('react');
const HashLink = require( 'react-router-hash-link').HashLink;
const Headroom = require('react-headroom').default;
const styled = require('styled-components').default;

    const Menu = styled.ul `
	 margin: 0;
     padding: 0;
     height: 100%;
     width: 100%;
     display: table;
    `;

    const Section = styled.li `
	 display: inline-block;
     width: 25%;
     margin-bottom: 10px;
     margin-top: 10px;
     color: #fff;
     font-size: 24px;
     text-align: center;
     vertical-align: middle;
     display: table-cell;
    `;

    const Link = styled(HashLink) `
	 text-decoration: none;
     color: #e6e6e6;
    `;

function Nav() {
    return (
            <Headroom disableInlineStyles>
                <Menu>
                    <Section><Link to='/#home'>Home</Link></Section>
                    <Section><Link  to='/#about'>About</Link></Section>
                    <Section><Link  to='/#portfolio'>Portfolio</Link></Section>
                    <Section><Link  to='/#contact'>Contact</Link></Section>
                </Menu>
            </Headroom>
    )
}

module.exports = Nav;