import { REQUEST_GITHUB_USER_INFO, RECEIVE_GITHUB_USER_INFO } from 'Actions/actions';

const defaultState = {
  name: '',
  repositoriesFound: ['None'],
};

export default function githubUserInfoReducer(state = defaultState, action) {
  if (action.type === REQUEST_GITHUB_USER_INFO) {
    return {
      name: action.payload.username,
      repositoriesFound: ['fetching...'],
    };
  } else if (action.type === RECEIVE_GITHUB_USER_INFO) {
    // Handle error
    if (action.error) {
      return {
        name: action.payload.username,
        repositoriesFound: ['** error fetching results **'],
      };
    }

    // Handle success
    let repositoriesFound = ['None'];
    if (action.payload.repositoriesFound.length > 0) {
      repositoriesFound = action.payload.repositoriesFound;
    }
    return {
      name: action.payload.username,
      repositoriesFound,
    };
  }
  return state;
}
