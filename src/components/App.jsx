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

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      if (this.props.isExecuting) {
        console.log('xcxc', this.aceEditor.getValue());
        //const editor = this.refs.aceEditor;
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
            width="500px"
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
