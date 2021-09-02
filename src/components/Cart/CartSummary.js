import "./CartSummary.css"

const CartSummary = ({cartList, totalPrice}) => {
  const deliveryPrice = 2
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
    </div>
  )
}

export default CartSummary
