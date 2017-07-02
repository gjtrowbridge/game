import React from 'react';
import GithubUserSearch from 'Components/GithubUserSearch.jsx';

// CSS
import 'CSS/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to front-end-project-starter</h1>
        <GithubUserSearch />
      </div>
    );
  }
}

console.log('This is an example log statement to demonstrate sourcemaps.');

export default App;
