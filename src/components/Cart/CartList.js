import {useState} from "react"

import CartListItem from "./CartListItem"

const CartList = ({cartList}) => {
  return (
    <div>
      <CartListItem cartList={cartList} />
    </div>
  )
}

export default CartList
