import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=> {

// is an object where each key represents an item’s ID, and each value represents the quantity of that item in the cart.
// Initially, cartItems is an empty object {}, meaning no items are in the cart.
    const [cartItems,setCartItems] = useState({})

//This function takes an itemId as an argument and updates the cartItems state to reflect adding this item to the cart.
    const addToCart = (itemId) =>{
//If the item is not in the cart (!cartItems[itemId]):
//setCartItems is called with an updater function (prev) => ({ ...prev, [itemId]: 1 }), where:
//{ ...prev } copies the existing state.
//[itemId]: 1 sets the quantity of the new item to 1.

        if(!cartItems[itemId]){
            setCartItems((prev)=> ({...prev,[itemId]:1}))
        } else {
            setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
// Checks if the product id is matching the item means this product is available in the cart
//totalAmount += itemInfo.price* cartItems[item] is to find the quantity of the item
        const getTotalCartAmount = ()=>{
            let totalAmount = 0;
            for(const item in cartItems){
                if(cartItems[item]>0){
                    let itemInfo = food_list.find((product)=>product._id === item)
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
            return totalAmount;
        }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider