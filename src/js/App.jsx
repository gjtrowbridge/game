import React from 'react';

require('../css/App.scss');

class App extends React.Component {
  render() {
    return <h1 className="App">Hello from Webpack!</h1>;
  }
}

console.log('This is an example log statement to demonstrate sourcemaps.');

export default App;
