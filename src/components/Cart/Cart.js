import "./Cart.css"
import CartList from "./CartList"
import CartSummary from "./CartSummary"

const Cart = ({
  cartList,
  totalPrice,
  handleAdd,
  handleRemove,
  handleRemoveAll,
}) => {
  return (
    <div className="cart-div">
      <div>
        <div className="cart-cart">
          {cartList.length > 0 ? `This is your cart:` : `Your cart is empty`}
        </div>
        <CartList
          cartList={cartList}
          totalPrice={totalPrice}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
        <CartSummary cartList={cartList} totalPrice={totalPrice} />
      </div>
    </div>
  )
}

export default Cart
