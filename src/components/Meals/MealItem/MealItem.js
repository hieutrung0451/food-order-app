import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const ctxCart = useContext(CartContext);

  const formatPrice = `$ ${props.price.toFixed(2)}`;

  const addMealHandler = () => {
    ctxCart.addItem(props.meal);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formatPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onSubmit={addMealHandler} />
      </div>
    </li>
  );
};

export default MealItem;
