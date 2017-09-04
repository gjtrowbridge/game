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
