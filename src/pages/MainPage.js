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
  const [cartList, setCartList] = useState([])

  const [totalPrice, setTotalPrice] = useState(0)
  const [showCart, setShowCart] = useState(false)

  const [itemCount, setItemCount] = useState(0)

  // useEffect(() => {
  //   let updatedPrice = cartList.map(item => item.price * itemCount)
  //   setTotalPrice(updatedPrice)
  // }, [cartList])

  const handleAdd = item => {
    const exist = cartList.find(x => x.id === item.id)
    if (exist) {
      setCartList(
        cartList.map(x =>
          x.id === item.id
            ? {
                ...exist,
                qty: exist.qty + 1,
                price: (exist.qty + 1) * exist.cost,
              }
            : x
        )
      )
    } else setCartList([...cartList, {...item, qty: 1}])

    setTotalPrice(totalPrice + item.cost)
    setItemCount(itemCount + 1)
  }

  const handleRemove = item => {
    const exist = cartList.find(x => x.id === item.id)
    if (item.qty > 1) {
      setCartList(
        cartList.map(x =>
          x.id === item.id
            ? {
                ...exist,
                qty: exist.qty - 1,
                price: (exist.qty - 1) * exist.cost,
              }
            : x
        )
      )
    } else setCartList(cartList.filter(x => x.id !== item.id))

    setTotalPrice(totalPrice - item.cost)
    setItemCount(itemCount - 1)
  }

  const handleRemoveAll = () => {}

  const handleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="xxx">
      <Navbar
        toggleCart={handleCart}
        cartList={cartList}
        itemCount={itemCount}
      />
      <div className="container-slider">
        <Slider image={PrimarySlider} />
      </div>
      <div className="move-div">
        {showCart ? (
          <Cart
            cartList={cartList}
            setCartList={setCartList}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemCount={itemCount}
            setItemCount={setItemCount}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        ) : null}
      </div>
      <Cards />
      <Menu
        cartList={cartList}
        setCartList={setCartList}
        itemCount={itemCount}
        setItemCount={setItemCount}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        handleAdd={handleAdd}
      />
      <Slider image={SecondarySlider} />
      <IconCards />
      <Gallery />
      <Footer />
      <PageEnd />
    </div>
  )
}

export default MainPage
