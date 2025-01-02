import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../content/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartIngredients, removeIngredientFromCart } = useContext(StoreContext);

  useEffect(() => {
    console.log('Cart Ingredients:', cartIngredients);
  }, [cartIngredients]);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cartIngredients.map((ingredient, index) => (
          <div className='cart-items-title cart-items-item' key={index}>
            <img src={`http://localhost:4000/recipe${ingredient.ingredientId.image}`} alt='' />
            <p>{ingredient.ingredientId.name}</p>
            <p>{ingredient.ingredientId.price} VND</p>
            <p>{ingredient.quantity}</p>
            <p>{(ingredient.ingredientId.price * (ingredient.quantity / ingredient.ingredientId.quantity)).toFixed(2)}</p>
            <p onClick={() => removeIngredientFromCart(ingredient.ingredientId._id)} className='cross'>x</p>
          </div>
        ))}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;