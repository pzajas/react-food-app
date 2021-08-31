import {useState, useEffect} from "react"

import Navbar from "../components/Navbar/Navbar"
import Slider from "../components/Slider/Slider"
import Cart from "../components/Cart/Cart"
import Cards from "../components/Card/ImageCards/Cards"
import IconCards from "../components/Card/IconCards/IconCards"
import Menu from "../components/Menu/Menu"
import Gallery from "../components/Gallery/Gallery"
import Footer from "../components/Footer/Footer"
import PageEnd from "../components/Footer/PageEnd"

import PrimarySlider from "../assets/Images/PrimarySlider.jpg"
import SecondarySlider from "../assets/Images/SecondarySlider.jpg"

import "./MainPage.css"

const MainPage = () => {
  const [cartList, setCartList] = useState([
    {id: 4, name: "Hamburger", description: "", price: 12},
    {id: 5, name: "Hamburger", description: "", price: 10},
    {id: 6, name: "Hamburger", description: "", price: 10},
  ])

  const [totalPrice, setTotalPrice] = useState([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    let updatedPrice = cartList.map(item => item.price)
    setTotalPrice(
      updatedPrice.reduce((prevValue, currValue) => prevValue + currValue, 0)
    )
  }, [cartList])

  const handleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="xxx">
      <Navbar toggleCart={handleCart} cartList={cartList} />
      <div className="container-slider">
        <Slider image={PrimarySlider} />
      </div>
      <div className="move-div">
        {showCart ? <Cart cartList={cartList} totalPrice={totalPrice} /> : null}
      </div>
      <Cards />
      <Menu cartList={cartList} setCartList={setCartList} />
      <Slider image={SecondarySlider} />
      <IconCards />
      <Gallery />
      <Footer />
      <PageEnd />
    </div>
  )
}

export default MainPage
