import React from 'react';
import Game from 'Components/Game';
// CSS
import 'CSS/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Game</h1>
        <Game height={400} width={400} />
      </div>
    );
  }
}

export default App;
