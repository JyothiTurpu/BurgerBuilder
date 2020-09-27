import React from "react";

import classes from "./Order.css";

const Order = (props) => {
  let ingredients = [];

  for (let igName in props.ingredients) {
    ingredients.push({ name: igName, amount: props.ingredients[igName] });
  }

  let ingredientOutput = ingredients.map((ingredient) => {
    return (
      <span
        key={ingredient["name"]}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ingredient["name"]} {`(${ingredient["amount"]})`}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
