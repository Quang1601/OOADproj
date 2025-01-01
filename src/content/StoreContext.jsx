import { createContext, useEffect, useState } from "react";
import { food_list as initialFoodList } from "../assets/assets/frontend_assets/assets";
import { populateFoodListPrices } from "../utils/populateFoodListPrices";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [food_list, setFoodList] = useState(initialFoodList); 
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const updateFoodPrices = async () => {
            try {
                const updatedList = await populateFoodListPrices(initialFoodList);
                setFoodList(updatedList);
            } catch (error) {
                console.error("Error updating food prices:", error.message);
            }
        };
        updateFoodPrices();
    }, []);

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
