import "./Navbar.css"

import {NavLink} from "react-router-dom"
import Cart from "../../assets/Icons/cart.svg"

const Navbar = ({handleCart, itemCount}) => {
  return (
    <nav className="navbar">
      <div className="brand-title">BRAND NAME</div>
      <div className="navbar-links">
        <ul>
          <li className="li">
            <NavLink to="/main">MAIN</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="cart-icon">
            <img
              className="cart"
              src={Cart}
              alt="A cart"
              onClick={handleCart}
            ></img>
            <h4>{itemCount}</h4>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
