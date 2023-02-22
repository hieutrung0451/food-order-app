import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: `amount + ${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
