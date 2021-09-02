import CartListItem from "./CartListItem"

import "./CartList.css"

const CartList = ({cartList, handleAdd, handleRemove, handleRemoveAll}) => {
  return (
    <div>
      {cartList.map(item => (
        <li key={item.id} className="cart-ul">
          <div>{item.name}</div>
          <div>
            {item.qty} x ${item.price}
          </div>
          <div>
            <button onClick={() => handleAdd(item)}>+</button>
            <button onClick={() => handleRemove(item)}>-</button>
            <button onClick={() => handleRemoveAll(item)}>Remove All</button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default CartList
