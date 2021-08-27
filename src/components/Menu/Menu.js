import {useState} from "react"

import Burger1 from "../../assets/Menu/Transparent/Burger1.png"

import "./Menu.css"

const Menu = ({cartList, setCartList}) => {
  const initialState = [
    {
      id: 1,
      name: "Hamburger",
      description:
        "A hamburger (also burger for short) is a food, typically considered a sandwich",
      price: 10,
    },
    {
      id: 2,
      name: "Hamburger 2",
      description:
        "A hamburger (also burger for short) is a food, typically considered a sandwich",
      price: 15,
    },
    {
      id: 3,
      name: "Hamburger 3",
      description:
        "A hamburger (also burger for short) is a food, typically considered a sandwich",
      price: 8,
    },
  ]

  const [menu, setMenu] = useState(initialState)

  const addItemToCart = item => {
    setCartList([...cartList, item])
  }

  return (
    <div className="menu">
      <ul>
        {menu.map(item => (
          <li key={item.id} className="menu-item">
            <div className="item-photo">
              <img src={Burger1} alt="Menu item" />
            </div>
            <div className="item-name">{item.name}</div>
            <div className="item-description"> {item.description}</div>
            <div className="item-price"> {item.price}</div>
            <input type="submit" onClick={() => addItemToCart(item)} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
