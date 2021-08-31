import "./Navbar.css"

import {NavLink} from "react-router-dom"
import Cart from "../../assets/Icons/cart.svg"

const Navbar = ({toggleCart, cartList}) => {
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
              onClick={toggleCart}
            ></img>
            <h4>{cartList.length}</h4>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
