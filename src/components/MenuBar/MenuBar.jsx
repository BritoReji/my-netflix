import React from 'react'
import './MenuBar.css'
function MenuBar() {
  return (
    <div>
        <div className="menu">
            <ul>
               <a href=""> <li>Home</li></a>
               <a href=""><li>Shop</li></a> 
             <a href="">   <li>About</li> </a>
              <a href="">  <li>Contact</li> </a>
            </ul>
        </div>
    </div>
  )
}

export default MenuBar