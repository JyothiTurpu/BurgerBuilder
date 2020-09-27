import React, { Component } from "react";
import axios from "../../axios-orders";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import Order from "../../components/Order/Order";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        console.log("Orders Response ", response.data);

        let orders = [];
        for (let key in response.data) {
          console.log(response.data[key]);
          orders.push({ id: key, ...response.data[key] });
        }

        this.setState({ orders: orders, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
