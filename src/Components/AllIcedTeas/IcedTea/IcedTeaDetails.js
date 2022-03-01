import classes from "./IcedTeaDetails.module.css";
import { useContext } from "react";
import IcedTeaForm from "./IcedTeaForm";
import CartContext from "../../../Store/cart-context";

function IcedTeaDetails(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.productCard}>
      <img className={classes.productImg} src={props.img} alt={props.altText} />
      <div className={classes.productInfo}>
        <h1>{props.name}</h1>
        <hr />
        <p>{props.description}</p>
        <hr />
        <IcedTeaForm
          id={props.id}
          price={props.price}
          onAddToCart={addToCartHandler}
        />
        <hr />
        <button
          type="submit"
          form={props.id}
          // onClick={submitHandler}
          className={classes.addToCartBtn}
        >
          ADD TO CART
        </button>
      </div>
    </li>
  );
}

export default IcedTeaDetails;
