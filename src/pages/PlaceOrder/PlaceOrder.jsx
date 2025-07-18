import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import { useContext } from "react";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="number" placeholder="Phone number" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart total:</h2>
          <div className="cart-total-details">
            <p>Subtotal:</p>
            <p>{getTotalCartAmount()}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery fee:</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total:</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>

          <hr />

          <button>PAY</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
