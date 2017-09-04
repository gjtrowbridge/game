import React from 'react';
import Game from 'Components/Game';

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

class App extends React.Component {
  render() {
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

export default App;
