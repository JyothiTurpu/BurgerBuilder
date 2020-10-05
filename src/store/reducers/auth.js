import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userId: null,
  error: null,
  loading: false,
  token: null,
  authRedirectPath: "/",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case actionTypes.AUTH_SUCCESS: {
      return {
        ...state,
        userId: action.userId,
        loading: false,
        token: action.idToken,
        error: null,
      };
    }
    case actionTypes.AUTH_FAIL: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case actionTypes.AUTH_LOGOUT: {
      return {
        ...state,
        userId: null,
        error: null,
        loading: false,
        token: null,
      };
    }
    case actionTypes.SET_AUTH_REDIRECT_PATH: {
      return {
        ...state,
        authRedirectPath: action.path,
      };
    }
    default:
      return state;
  }
};

export default reducer;
