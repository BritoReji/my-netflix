import React, { useEffect } from 'react'
import './MenuBar.css'
function MenuBar({currstate,toggmenu}) {
let togglemenu = ()=>{
  toggmenu(currstate)
  
}
  
  return (
    <div>
        <div className="menu" onClick={togglemenu} style={{display: 'none'}}>
            <ul>
               <li onClick={()=>alert('clicked home')} > <a>Home</a></li>
               <li onClick={()=>alert('clicked shop')}><a>Shop</a></li> 
             <li onClick={()=>alert('clicked about')}>   <a>About</a> </li>
              <li onClick={()=>alert('clicked contact')}>  <a>Contact</a> </li>
            </ul>
        </div>
    </div>
  )
}

export default MenuBar