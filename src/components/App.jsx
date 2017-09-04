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
        <h2>Code Your Brain Here</h2>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          fontSize="18px"
          editorProps={{
            $blockScrolling: true,
          }}
        />
        <h2>Watch Your Brain In Action Here</h2>
        <Game height={400} width={400} />
      </div>
    );
  }
}

export default App;
