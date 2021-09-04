import {Route, Redirect, Switch} from "react-router-dom"
import {useState, useEffect} from "react"

import MainPage from "./pages/MainPage"
import AboutPage from "./pages/AboutPage"

import "./App.css"
import Navbar from "./components/Navbar/Navbar"

function App() {
  const [cartList, setCartList] = useState([])

  const [totalPrice, setTotalPrice] = useState(0)
  const [showCart, setShowCart] = useState(false)

  const [itemCount, setItemCount] = useState(0)

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
    const exist = cartList.find(product => product.id === item.id)
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
    } else setCartList(cartList.filter(product => product.id !== item.id))

    setTotalPrice(totalPrice - item.cost)
    setItemCount(itemCount - 1)
  }

  const handleRemoveAll = (item, id) => {
    cartList.map(item =>
      item.id !== id && itemCount > 0
        ? setItemCount(itemCount - item.qty)
        : setItemCount(itemCount)
    )
    cartList.map(item => item.id !== id)
      ? setTotalPrice(totalPrice - item.price)
      : setTotalPrice(totalPrice)

    setCartList(cartList.filter(product => product.id !== item.id))
  }

  const handleClearCart = id => {
    setCartList(cartList.filter(product => product.id === id))
    setTotalPrice(0)
    setItemCount(0)
  }

  const handleCart = () => {
    setShowCart(!showCart)
  }

  useEffect(() => {
    if (localStorage.getItem("cartList") === null) {
      localStorage.setItem("cartList", JSON.stringify([]))
      localStorage.setItem("totalPrice", JSON.stringify(0))
      localStorage.setItem("itemCount", JSON.stringify(0))
    } else {
      let cartLocal = JSON.parse(localStorage.getItem("cartList"))
      setCartList(cartLocal)
      let priceLocal = JSON.parse(localStorage.getItem("totalPrice"))
      setTotalPrice(priceLocal)
      let countLocal = JSON.parse(localStorage.getItem("itemCount"))
      setItemCount(countLocal)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList))
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice))
    localStorage.setItem("itemCount", JSON.stringify(itemCount))
  }, [cartList, totalPrice, itemCount])

  return (
    <div className="App">
      <Navbar
        handleCart={handleCart}
        cartList={cartList}
        itemCount={itemCount}
      />
      <Switch>
        <Route path="/" exact>
          <Redirect to="main" />
        </Route>
        <Route path="/main">
          <MainPage
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
            showCart={showCart}
          />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
