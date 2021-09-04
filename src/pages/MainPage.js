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

const MainPage = ({
  cartList,
  setCartList,
  totalPrice,
  setTotalPrice,
  itemCount,
  setItemCount,
  handleAdd,
  handleRemove,
  handleRemoveAll,
  handleClearCart,
  showCart,
}) => {
  return (
    <div className="xxx">
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
            handleClearCart={handleClearCart}
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
