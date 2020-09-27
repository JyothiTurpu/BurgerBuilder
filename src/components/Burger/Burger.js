import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

const Burger = (props) => {
  let transformedIngredients = null;

  if (props.ingredients !== null)
    transformedIngredients = Object.keys(props.ingredients)
      .map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

  if (transformedIngredients === null || transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
