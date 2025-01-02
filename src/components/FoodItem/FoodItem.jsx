import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { StoreContext } from '../../content/StoreContext'
import { useNavigate } from 'react-router-dom';
const FoodItem = ({ id, name, price, description, image }) => {
    const navigate = useNavigate();

    const handleSelectClick = () => {
        navigate(`/recipe/${id}`);
      };
      const Prices = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
   
    const{cartItems,addToCart,removeFromCart}= useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />   
            </div>

            <div className='food-item-info'>
                <div className="food-item-name-rating">
                    <p> {name}</p>
                    <img src={assets.rating_starts} alt="" />

                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>{Prices}</p>
                <button className="food-item-select-button" onClick={handleSelectClick}>Select</button>
            </div>
        </div>
    )
}

export default FoodItem
