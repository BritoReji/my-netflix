import React,{useEffect, useState} from 'react'
import Hamburger from 'hamburger-react' 
import logo from '/home/brito/Desktop/my-netflix/src/assets/img/netflix-logo.png'
import './Header.css'
function LandingPage() {
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    console.log(isOpen);
  })
  return (
    <div className='container'>
     <header>
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen}/>
      </div>
     </header>
    </div>
  )
}

export default LandingPage