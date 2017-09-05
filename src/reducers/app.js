import { UPDATE_GAME_EXECUTION_STATE } from 'Actions/app';

const defaultState = {
  isExecuting: true,
};

export default function appReducer(state = defaultState, action) {
  if (action.type === UPDATE_GAME_EXECUTION_STATE) {
    return {
      ...state,
      isExecuting: action.payload,
    };
  }

  return state;
}
