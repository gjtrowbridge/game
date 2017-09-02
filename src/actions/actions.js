import fetch from 'isomorphic-fetch';

// Helper function used by other action creators -- creates an action
// Follows standard here: https://github.com/acdlite/flux-standard-action
export const getAction = function _getAction(type, payload, isError, meta) {
  const action = { type };
  if (payload !== undefined) {
    action.payload = payload;
  }
  if (isError !== undefined) {
    action.error = isError;
  }
  if (meta !== undefined) {
    action.meta = meta;
  }
  return action;
};

// The action that dispatches when a github user's info is first requested
export const REQUEST_GITHUB_USER_INFO = 'REQUEST_GITHUB_USER_INFO';
const requestGithubUserInfo = function requestGithubUserInfo(username) {
  return getAction(
    REQUEST_GITHUB_USER_INFO,
    {
      username,
    },
  );
};

// The action that dispatches when a github user's info returns
export const RECEIVE_GITHUB_USER_INFO = 'RECEIVE_GITHUB_USER_INFO';
const receiveGithubUserInfo = function receiveGithubUserInfo(username, repositoriesFound, isError) {
  return getAction(
    RECEIVE_GITHUB_USER_INFO,
    { username, repositoriesFound, isError },
  );
};

// The async action that handles the overall fetching of a github user's info
export const fetchGithubUserInfo = function fetchGithubUserInfo(username) {
  // This action creator returns a function because this is an async action creator
  return (dispatch) => {
    // First, dispatch an action indicating that a request for user info has gone out
    dispatch(requestGithubUserInfo(username));

    // Then, fetch the data
    const urlToFetch = `https://api.github.com/users/${username}/repos`;
    fetch(urlToFetch).then(

      // If request is successful, pull out json and pass to next "then" block
      (response) => {
        if (response.status === 404) {
          return [{
            name: '404: username not found',
          }];
        }
        return response.json();
      },

      // Handler if request fails
      () => {
        dispatch(receiveGithubUserInfo(
          username,
          [],
          true,
        ));
      },
    ).then(
      // Parse the json response and dispatch the resulting repo info as an action
      (json) => {
        const repositoriesFound = json.map((repositoryInfo) => {
          return repositoryInfo.name;
        });
        dispatch(receiveGithubUserInfo(
          username,
          repositoriesFound,
        ));
      },
    );
  };
};
