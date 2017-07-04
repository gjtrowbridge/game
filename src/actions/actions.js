
export const GET_GITHUB_USER_INFO = 'GET_GITHUB_USER_INFO';

// Helper function used by other action creators -- creates an action
// Follows standard here: https://github.com/acdlite/flux-standard-action
const getAction = function _getAction(type, payload, isError, meta) {
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

export const getGithubUserInfo = function getGithubUserInfo(username, repositoriesFound) {
  return getAction(
    GET_GITHUB_USER_INFO,
    { username, repositoriesFound },
  );
};
