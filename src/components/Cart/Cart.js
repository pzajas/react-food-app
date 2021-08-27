import "./Cart.css"
import CartList from "./CartList"
import CartSummary from "./CartSummary"

const Cart = ({cartList, totalPrice}) => {
  return (
    <div className="cart-div">
      <div>
        <div className="cart-cart">Cart total price: {totalPrice}</div>
        <CartList cartList={cartList} />
        {/* <CartSummary totalPrice={totalPrice} /> */}
      </div>
    </div>
  )
}

export default Cart
