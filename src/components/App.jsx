import React from 'react';
import Game from 'Components/Game';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateGameState } from 'Actions/game';

// Ace editor
import 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

// CSS
import 'CSS/App.scss';

const updateTimer = 2000;

const defaultEditorContents = `var possibleMoves = [
  'North',
  'South',
  'East',
  'West',
];

// The "move" function is your character's "brain"
// It tells your character what to do each turn
var move = function(gameState) {
  // You can see the game state
  // (or any other state) in your console
  console.log('Game State is: ', gameState);

  // This "example" brain is rather scattered:
  // It chooses a random direction each turn
  var randomNumber = Math.random();
  if (randomNumber < 0.25) {
    return possibleMoves[0];
  } else if (randomNumber < 0.5) {
    return possibleMoves[1];
  } else if (randomNumber < 0.75) {
    return possibleMoves[2];
  } else {
    return possibleMoves[3];
  }
};
`;

class App extends React.Component {
  componentDidMount() {
    this.aceEditor.setValue(defaultEditorContents);
    setInterval(() => {
      if (this.props.isExecuting) {
        this.props.dispatch(updateGameState(this.props.game));
      }
    }, updateTimer);
  }
  render() {
    return (
      <div className="App">
        <div className="column editor">
          <h2>Code Your Brain Here</h2>
          <AceEditor
            mode="javascript"
            theme="monokai"
            name="UNIQUE_ID_OF_DIV"
            fontSize="18px"
            width="700px"
            height="500px"
            editorProps={{
              $blockScrolling: true,
            }}
            ref={(aceEditorComponent) => { this.aceEditor = aceEditorComponent.editor; }}
          />
        </div>
        <div className="column game">
          <h2>Watch Your Brain In Action Here</h2>
          <Game height={500} width={500} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isExecuting: PropTypes.bool.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isExecuting: state.app.isExecuting,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
