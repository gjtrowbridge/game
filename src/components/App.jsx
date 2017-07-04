import React from 'react';
import GithubUserInfo from 'Components/GithubUserInfo.jsx';

// CSS
import 'CSS/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to front-end-project-starter</h1>
        <GithubUserInfo />
      </div>
    );
  }
}

console.log('This is an example log statement to demonstrate sourcemaps.');

export default App;
