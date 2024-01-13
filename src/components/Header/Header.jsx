import React,{useEffect, useState} from 'react'
import Hamburger from 'hamburger-react' 
import logo from '../../assets/img/netflix-logo.png'
import './Header.css'
import MenuBar from '../MenuBar/MenuBar'
function Header() {
  const [isOpen, setOpen] = useState(false)
  let toggmenu=(menu)=>{
    setOpen(!menu)
  }
  useEffect(() => {
    let menu =  document.querySelector('.menu')
    menu.style.display = isOpen ? 'block' : 'none'
  })
  return (
    <div className='container'>
     <header>
      <div className="logo">
        <img src={logo} alt="" className='logo' />
      </div>
      <div className="hamburger">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen}/>
      </div>
     </header>
     <MenuBar toggmenu={toggmenu} currstate={isOpen}/>
    </div>
  )
}

export default Header