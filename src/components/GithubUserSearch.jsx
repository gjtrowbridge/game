import React from 'react';

// CSS
import 'CSS/GithubUserSearch.scss';

class GithubUserSearch extends React.Component {
  render() {
    return (
      <div className="GithubUserSearch">
        <label htmlFor="search-github-user">
          Search for github user: <input id="search-github-user" />
        </label>
        <button>Go</button>
      </div>
    );
  }
}

export default GithubUserSearch;
