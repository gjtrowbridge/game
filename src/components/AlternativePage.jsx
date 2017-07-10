import React from 'react';


class AlternativePage extends React.Component {
  render() {
    return (
      <div className="Alternative Page">
        <h1>Welcome to the other page</h1>
        <p>This really only exists to demonstrate{' '}
          <a href="http://redux.js.org/docs/advanced/UsageWithReactRouter.html">how to use React Router with redux</a>
        </p>
        <ul>
          <li><a href="https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf">Another tutorial</a></li>
        </ul>
      </div>
    );
  }
}

export default AlternativePage;
