import { getAction } from 'Actions/actions';

export const UPDATE_GAME_EXECUTION_STATE = 'UPDATE_GAME_EXECUTION_STATE';

export const updateGameExecutionState = function updateGameExecutionState(isExecuting) {
  return getAction(UPDATE_GAME_EXECUTION_STATE, isExecuting);
};
