import React,{useEffect, useState} from 'react'
import Hamburger from 'hamburger-react' 
import logo from '../../assets/img/netflix-logo.png'
import './Header.css'
function Header() {
  const [isOpen, setOpen] = useState(false)
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
        <Hamburger toggled={isOpen} toggle={setOpen}/>
      </div>
     </header>
    </div>
  )
}

export default Header