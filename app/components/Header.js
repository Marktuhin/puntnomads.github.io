const React = require('react');
const PropTypes = require('prop-types');
const styled = require('styled-components').default;

const Headline = styled.div `
 display: inline-block;
`;

const Tile = styled.h1 `
 font-size: 96px;
 margin: 0;
 font-weight: normal;
`;

const Underline = styled.div `
 width: 375px;
 height: 20px;
 background: linear-gradient(to right, #6190E8 , #a7bfe8);
`;   

class Header extends React.Component {
  render() {
    return (
      <Headline>
        <Tile>{this.props.header}</Tile>
        <Underline/>
      </Headline>
    )
  }
}

Header.propTypes = {
  header: PropTypes.string.isRequired
}

module.exports = Header;
