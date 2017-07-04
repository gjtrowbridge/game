import { GET_GITHUB_USER_INFO } from 'Actions/actions';

const defaultState = {
  name: '',
  repositoriesFound: ['None'],
};

export default function githubUserInfoReducer(state = defaultState, action) {
  if (action.type === GET_GITHUB_USER_INFO) {
    return {
      name: action.payload.username,
      repositoriesFound: action.payload.repositoriesFound,
    };
  }
  return state;
}
