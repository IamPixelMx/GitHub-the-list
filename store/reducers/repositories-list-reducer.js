import {
  UPDATE_REPOS_LIST,
  UPDATE_REPOS_LIST_SUCCESS,
  UPDATE_REPOS_LIST_FAIL
  //SET_REPOS_LIST_PAGINATION
} from "../../constants/ActionTypes";

const INITIAL_STATE = {
  loadingReposList: false,
  reposList: [],
  //reposTotalList: "",
  //pagination: { currentPage: "", lastPage: "" },
  error: ""
};

const reposListReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_REPOS_LIST:
      return { ...state, loadingReposList: true };

    case UPDATE_REPOS_LIST_SUCCESS:
      return {
        ...state,
        reposList: payload,
        loadingReposList: false,
        error: ""
      };

    case UPDATE_REPOS_LIST_FAIL:
      return { ...state, error: payload, loadingReposList: false };

    /*     case SET_REPOS_LIST_PAGINATION: {
      return {
        ...state,
        reposTotalList: payload.total_count,
        pagination: payload.pagination
      };
    } */

    default:
      return state;
  }
};

export default reposListReducer;
