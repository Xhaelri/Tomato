import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id ="explore-menu">
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from diverse menu featuring a delectable array of dishes crafter with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining ecperience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return ( 
                    // When a menu item is clicked, the code checks if the current category (prev) is the same as the clicked item’s menu_name.
                    // If the category is already selected (i.e., prev === item.menu_name), setCategory sets the category to "All", effectively deselecting 
                    // that item and returning to a "show all items" state.
                    <div onClick={()=>setCategory(prev=> prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu