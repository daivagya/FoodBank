import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
      <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="Logo" /></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>{setMenu("home")}} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href = '#explore-menu' onClick={()=>{setMenu("menu")}} className={menu === "menu" ? "active" : ""}>Menu</a>
          <a href = '#app-download' onClick={()=>{setMenu("mobile-app")}} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
          <a href = '#footer' onClick={()=>{setMenu("contact-us")}} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
        </ul>
        <ul className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className='navbar-bucket-icon'>
            <Link to ='/cart'><img src={assets.basket_icon} alt=""/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
        </ul>
      </div>
  )
}

export default Navbar;
