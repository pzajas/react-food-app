import "./CartListItem.css"

const CartListItem = ({cartList, setCartList}) => {
  const handleRemove = id => {
    setCartList(cartList.filter(item => item.id !== id))
  }

  return (
    <div cart-item-div>
      <ul className="cart-ul">
        {cartList.map(item => (
          <li className="cart-item">
            {item.name} {item.price}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartListItem
