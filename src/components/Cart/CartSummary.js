import "./CartSummary.css"

const CartSummary = ({
  cartList,
  totalPrice,
  handleClearCart,
  setCartList,
  id,
}) => {
  const deliveryPrice = 2

  const xxx = () => {
    setCartList(cartList.filter(item => item.id === id))
  }
  return (
    <div>
      {cartList.length > 0 ? (
        <div className="cart-summary">
          <div className="summary-item">Total Price:{totalPrice}</div>
          <div className="summary-item">Delivery Price: {deliveryPrice} </div>
          <div className="summary-item">
            To pay:{totalPrice + deliveryPrice}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {cartList.length > 0 ? (
        <button className="summary-btn" onClick={() => handleClearCart()}>
          Clear le Cart
        </button>
      ) : null}
    </div>
  )
}

export default CartSummary
