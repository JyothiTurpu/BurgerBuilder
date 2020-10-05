import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("Auth Reducer", () => {
  it("Should Return the InitialState", () => {
    expect(reducer(undefined, {})).toEqual({
      userId: null,
      error: null,
      loading: false,
      token: null,
      authRedirectPath: "/",
    });
  });

  it("Should Store the token upon LOGIN", () => {
    expect(
      reducer(
        {
          userId: null,
          error: null,
          loading: false,
          token: null,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "Some-user-ID",
        }
      )
    ).toEqual({
      userId: "Some-user-ID",
      error: null,
      loading: false,
      token: "some-token",
      authRedirectPath: "/",
    });
  });
});
