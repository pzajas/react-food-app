import {useEffect, useState} from "react"

import Burger1 from "../../assets/Menu/Transparent/Burger1.png"

import "./Menu.css"

const Menu = ({cartList, setCartList}) => {
  const initialState = [
    {
      id: Math.random() * 1000,
      name: "Hamburger",
      description:
        "A hamburger (also burger for short) is a food, typically considered a sandwich",
      price: 10,
    },
    {
      id: Math.random() * 1000,
      name: "Pizza",
      description:
        "A hamburger (also burger for short) is a food, typically considered a sandwich",
      price: 15,
    },
    {
      id: Math.random() * 1000,
      name: "Sushi",
      description:
        "A hamburger (also burger for short) is a food, typically considered a sandwich",
      price: 8,
    },
  ]

  const [menu, setMenu] = useState(initialState)
  const [filteredMenu, setFilteredMenu] = useState([])

  const [status, setStatus] = useState("All")

  const addItemToCart = item => {
    setCartList([...cartList, item])
  }

  const handleStatus = e => {
    setStatus(e.target.value)
  }

  useEffect(() => {
    switch (status) {
      case "Hamb":
        setFilteredMenu(menu.filter(item => item.name === "Hamburger"))
        break
      case "Pizza":
        setFilteredMenu(menu.filter(item => item.name === "Pizza"))
        break
      case "Sushi":
        setFilteredMenu(menu.filter(item => item.name === "Sushi"))
        break
      default:
        setFilteredMenu(menu)
    }
  }, [menu, status])

  return (
    <div className="menu">
      <button onClick={handleStatus} value="All">
        All
      </button>
      <button onClick={handleStatus} value="Hamb">
        Hamb
      </button>
      <button onClick={handleStatus} value="Pizza">
        Pizza
      </button>
      <button onClick={handleStatus} value="Sushi">
        Sushi
      </button>
      <ul>
        {filteredMenu.map(item => (
          <li key={item.id} className="menu-item">
            <div className="item-photo">
              <img src={Burger1} alt="Menu item" />
            </div>
            <div className="item-name hamburger">{item.name}</div>
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
