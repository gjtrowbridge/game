
const GET_GITHUB_USER_INFO = 'GET_GITHUB_USER_INFO';

// Helper function used by other action creators -- creates an action
// Follows standard here: https://github.com/acdlite/flux-standard-action
const _getAction = function _getAction(type, payload, is_error, meta) => {
  const action = { type: type };
  if (payload !== undefined) {
    action.payload = payload;
  }
  if (is_error !== undefined) {
    action.error = is_error;
  }
  if (meta !== undefined) {
    action.meta = meta;
  }

  return action;
};

export const getGithubUserInfo = function getGithubUserInfo(username) {
  return _getAction(
    GET_GITHUB_USER_INFO,
    { username: username }
  );
};
