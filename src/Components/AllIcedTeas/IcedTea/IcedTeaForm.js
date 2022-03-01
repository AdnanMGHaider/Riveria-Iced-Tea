import React, { useState, useRef } from "react";
import classes from "./IcedTeaForm.module.css";

const IcedTeaForm = (props) => {
  const [amount, setAmount] = useState(1);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const increment = (event) => {
    event.preventDefault();
    setAmount((prevState) => {
      if (prevState === 5) {
        return amount;
      } else {
        return amount + 1;
      }
    });
  };
  const decrement = (event) => {
    event.preventDefault();
    setAmount((prevState) => {
      if (prevState === 1) {
        return prevState;
      } else {
        return prevState - 1;
      }
    });
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <form id={props.id} onSubmit={submitHandler}>
      {/* <select>
        <option value="0">8 pack</option>
        <option value="1">12 pack</option>
        <option value="2">24 pack</option>
      </select> */}
      <div className={classes.quantityAndPrice}>
        <div className={classes.quantity}>
          <label>QUANTITY (12 pack)</label>
          <div className={classes.incDecInput}>
            <button onClick={decrement} className={classes.decrement}>
              -
            </button>
            <input ref={amountInputRef} value={amount} />
            <button onClick={increment} className={classes.increment}>
              +
            </button>
          </div>
        </div>
        <div className={classes.price}>
          <label>PRICE</label>
          <h2>{price}</h2>
        </div>
      </div>
    </form>
  );
};

export default IcedTeaForm;
