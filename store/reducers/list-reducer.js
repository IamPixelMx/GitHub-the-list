import {
  ADD_REPO,
  DELETE_REPO,
  ADD_USER,
  DELETE_USER,
  SET_LIST_PAGINATION
} from "../../constants/ActionTypes";

const INITIAL_STATE = {
  usersList: [],
  reposList: [],
//  usersTotalResults: "",
  pagination: { currentPage: "", lastPage: "" },
};

const listReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case ADD_REPO:
      return INITIAL_STATE;

    case DELETE_REPO: {
      return {
        ...state,
        usersTotalResults: payload.total_count,
        pagination: payload.pagination
      };
    }

/*     case GET_USERS_MATCH:
      return { ...state, searching: true };

    case GET_USERS_MATCH_FAIL:
      return { ...state, error: payload, searching: false };

    case GET_USERS_MATCH_SUCCESS:
      return {
        ...state,
        usersMatch: payload,
        searching: false,
        error: ""
      }; */

    default:
      return state;
  }
};

export default listReducer;
