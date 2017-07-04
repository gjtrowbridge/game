import { fetchGithubUserInfo } from 'Actions/actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// CSS
import 'CSS/GithubUserInfo.scss';

class GithubUserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onUpdateUsername(this.input.value);
    event.preventDefault();
  }

  render() {
    const repoListItems = this.props.repositoriesFound.map((repoName, index) => {
      return <li key={index}>{repoName}</li>;
    });

    return (
      <div className="GithubUserInfo">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-github-user">
            Search for github user:
            <input id="search-github-user" ref={(input) => { this.input = input; }} />
          </label>
          <input type="submit" value="Go" />
        </form>
        <div>
          <h2>Repositories Found:</h2>
          <ul>
            {repoListItems}
          </ul>
        </div>
      </div>
    );
  }
}

GithubUserInfo.propTypes = {
  repositoriesFound: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpdateUsername: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state.githubUserInfo;
};

const mapDispatchToProps = (dispatch) => {
  const onUpdateUsername = (username) => {
    dispatch(fetchGithubUserInfo(username, ['repo1', 'repo2', 'repo3']));
  };
  return {
    onUpdateUsername,
  };
};

const ConnectedGithubUserInfo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GithubUserInfo);

export default ConnectedGithubUserInfo;
