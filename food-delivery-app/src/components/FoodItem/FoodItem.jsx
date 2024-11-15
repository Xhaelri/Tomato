import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
// we gave it as props in the FoodDisplay.jsx
const FoodItem = ({id,name,price,description,image}) => {


    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-img-container">
            <img className='food-item-image' src={image} alt="" />
            {
                // the intial state for carItems is {} so it's empty, if it's not there we show add, if it's there
                // after we invoke the onclick function, it shows the food-item-counter.
                // ******* From the storecontext we pull the number and then transfer that number based on id to the cart***********
                !cartItems[id]? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                : <div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem