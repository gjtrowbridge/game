
const initialState = {};

export default function rootReducer(state = initialState, action) {
  console.log('action', action);
  return state;
}
