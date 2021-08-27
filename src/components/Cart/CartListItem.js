import "./CartListItem.css"

const CartListItem = ({cartList}) => {
  return (
    <div cart-item-div>
      <ul className="cart-ul">
        {cartList.map(item => (
          <li className="cart-item">
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartListItem
