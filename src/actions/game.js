import { getAction } from 'Actions/actions';

export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';

export const updateGameState = function updateGameState(newGameState) {
  return getAction(
    UPDATE_GAME_STATE,
    newGameState,
  );
};
