import {useState} from "react"

import CartListItem from "./CartListItem"

const CartList = ({cartList, setCartList, handleTotalPrice}) => {
  return (
    <div>
      <CartListItem
        cartList={cartList}
        setCartList={setCartList}
        handleTotalPrice={handleTotalPrice}
      />
    </div>
  )
}

export default CartList
