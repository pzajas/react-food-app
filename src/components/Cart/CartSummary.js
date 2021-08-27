import "./CartSummary.css"

const CartSummary = ({totalPrice}) => {
  return (
    <div className="cart-summary">
      <div className="class-summary-items">
        <h4>Total Items Price: 15$</h4>
        <h4>Delivery Cost:</h4>
        <h4>Total Price:{totalPrice} </h4>
      </div>
    </div>
  )
}

export default CartSummary
