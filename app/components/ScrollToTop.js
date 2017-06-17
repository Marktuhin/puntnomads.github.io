const React = require('react');
const ReactRouter = require('react-router-dom');
const withRouter = ReactRouter.withRouter;

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

module.exports = withRouter(ScrollToTop);