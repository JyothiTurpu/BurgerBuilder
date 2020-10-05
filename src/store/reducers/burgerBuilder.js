import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice:
          state.totalPrice +
          actionTypes.INGREDIENT_PRICE[action.ingredientName],
        building: true,
      };
    }

    case actionTypes.REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice:
          state.totalPrice -
          actionTypes.INGREDIENT_PRICE[action.ingredientName],
        building: true,
      };
    }

    case actionTypes.SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.ingredients,
        error: false,
        totalPrice: actionTypes.INIT_TOTAL_PRICE,
        building: false,
      };
    }

    case actionTypes.FETCH_INGREDIENTS_FAILED: {
      return {
        ...state,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
