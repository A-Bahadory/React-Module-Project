import { useState } from "react";
import RestaurantButton from "../RestaurantButton/RestaurantButton.jsx";

function Order() {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li className="restaurant__item">
      Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}

export default Order;
