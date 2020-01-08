import {
  UPDATE_USERS_LIST,
  UPDATE_USERS_LIST_SUCCESS,
  UPDATE_USERS_LIST_FAIL
  //  SET_USERS_LIST_PAGINATION
} from "../../constants/ActionTypes";

export const updateUsersList = (payload = {}) => ({
  type: UPDATE_USERS_LIST,
  payload
});

export const updateUsersListSuccess = payload => ({
  type: UPDATE_USERS_LIST_SUCCESS,
  payload
});

export const updateUsersListFail = payload => ({
  type: UPDATE_USERS_LIST_FAIL,
  payload
});

/* export const setUsersListPagination = payload => ({
  type: SET_USERS_LIST_PAGINATION,
  payload
}); */
