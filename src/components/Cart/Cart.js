import "./Cart.css"
import CartList from "./CartList"
import CartSummary from "./CartSummary"

const Cart = ({cartList, setCartList, totalPrice}) => {
  return (
    <div className="cart-div">
      <div>
        <div className="cart-cart">Cart total price: {totalPrice}</div>
        <CartList cartList={cartList} setCartList={setCartList} />
        {/* <CartSummary totalPrice={totalPrice} /> */}
      </div>
    </div>
  )
}

export default Cart
