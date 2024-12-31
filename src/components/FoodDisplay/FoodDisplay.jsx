import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../content/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

export const FoodDisplay = ({ region, category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (
            (region === 'All' || region === item.rid) &&
            (category === 'All' || category === item.category)
          ) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};


export default FoodDisplay;
