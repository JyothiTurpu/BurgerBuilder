import axios from "../../axios-orders";

import * as actionTypes from "./actionTypes";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://burgerbuilder-19565.firebaseio.com/ingredients.json")
      .then((response) => {
        console.log(response);
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchIngredientsFailed());
      });
  };
};