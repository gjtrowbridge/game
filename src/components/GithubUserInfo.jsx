import { getGithubUserInfo } from 'Actions/actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// CSS
import 'CSS/GithubUserInfo.scss';

class GithubUserInfo extends React.Component {
  render() {
    const repoListItems = this.props.repositoriesFound.map((repoName, index) => {
      return <li key={index}>{repoName}</li>;
    });

    return (
      <div className="GithubUserInfo">
        <label htmlFor="search-github-user">
          Search for github user: <input id="search-github-user" />
        </label>
        <button onClick={this.props.onButtonClick}>Go</button>
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
  repositoriesFound: PropTypes.arrayOf(PropTypes.string),
  onButtonClick: PropTypes.func,
};
GithubUserInfo.defaultProps = {
  repositoriesFound: [],
  onButtonClick: () => {
    console.log('button was clicked: ', arguments);
  },
};

const mapStateToProps = (state) => {
  return state.githubUserInfo;
};

const mapDispatchToProps = (dispatch) => {
  const onButtonClick = () => {
    dispatch(getGithubUserInfo('gjtrowbridge', ['repo1', 'repo2', 'repo3']));
  };
  return {
    onButtonClick,
  };
};

const ConnectedGithubUserInfo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GithubUserInfo);

export default ConnectedGithubUserInfo;
