import React from 'react'
import './MenuBar.css'
function MenuBar() {
  return (
    <div>
        <div className="menu" style={{display: 'none'}}>
            <ul>
               <li > <a>Home</a></li>
               <li ><a>Shop</a></li> 
             <li >   <a>About</a> </li>
              <li >  <a>Contact</a> </li>
            </ul>
        </div>
    </div>
  )
}

export default MenuBar