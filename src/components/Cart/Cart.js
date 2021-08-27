import "./Cart.css"
import CartList from "./CartList"

const Cart = ({cartList}) => {
  return (
    <div className="cart-div">
      <div>
        <div className="cart-cart">CAAAART</div>
        <CartList cartList={cartList} />
      </div>
    </div>
  )
}

export default Cart
