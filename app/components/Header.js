const React = require('react');
const PropTypes = require('prop-types');

class Header extends React.Component {
  render() {
    return (
       <div className='header'>
         <h1>{this.props.header}</h1>
         <div className='underline'></div>
        </div>
    )
  }
}

Header.propTypes = {
  header: PropTypes.string.isRequired
}

module.exports = Header;
