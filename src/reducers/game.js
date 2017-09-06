import { UPDATE_GAME_STATE } from 'Actions/game';
import { game } from 'Game/gameExecutor';

const defaultState = game.toHash();

export default function gameReducer(state = defaultState, action) {
  if (action.type === UPDATE_GAME_STATE) {
    return action.payload;
  }

  return state;
}
