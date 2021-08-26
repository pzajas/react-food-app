import {useState} from "react"

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
  const [showCart, setShowCart] = useState(false)

  const handleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="xxx">
      <Navbar toggleCart={handleCart} />
      <div className="container-slider">
        <Slider image={PrimarySlider} />
      </div>
      <div className="move-div">{showCart ? <Cart /> : null}</div>
      <Cards />
      <Menu />
      <Slider image={SecondarySlider} />
      <IconCards />
      <Gallery />
      <Footer />
      <PageEnd />
    </div>
  )
}

export default MainPage
