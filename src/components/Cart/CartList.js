import {useState} from "react"

import CartListItem from "./CartListItem"

const CartList = ({cartList, handleTotalPrice}) => {
  return (
    <div>
      <CartListItem cartList={cartList} handleTotalPrice={handleTotalPrice} />
    </div>
  )
}

export default CartList
