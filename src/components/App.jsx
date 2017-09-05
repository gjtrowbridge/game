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

function onChange(newValue) {
  console.log('change', newValue);
}

const updateTimer = 2000;
let count = 0;

class App extends React.Component {
  componentDidUpdate() {
  }
  render() {
    console.log('yo yo yo', this.props);
    if (this.props.isExecuting) {
      // Schedule next update
      setTimeout(() => {
        console.log('doing new turn');
        const newGameState = {
          ...this.props.game,
        };
        newGameState.items.push({
          row: count,
          column: count,
          type: 'tree',
        });
        count++;
        this.props.dispatch(updateGameState(newGameState));
      }, updateTimer);
    }
    return (
      <div className="App">
        <div className="column editor">
          <h2>Code Your Brain Here</h2>
          <AceEditor
            mode="javascript"
            theme="monokai"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            fontSize="18px"
            width="500px"
            height="500px"
            editorProps={{
              $blockScrolling: true,
            }}
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
