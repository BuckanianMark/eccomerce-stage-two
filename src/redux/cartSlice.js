import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'sonner'
const initialState = {
    cartItem:[]
}

export const cartSlice = createSlice({
    name:"watch",
    initialState,
    reducers:{
        addCartItem:(state,action) => {
            const check = state.cartItem.some(el => el.id === action.payload.id)
            if(check)
            {
                toast.info("Item already in cart")
            }else{
                const total = action.payload.price
                state.cartItem = [...state.cartItem,{...action.payload,qty:1,total}]
                toast.success("Item added to cart")
            }
        },
        deleteCartItem:(state,action) => {
            const index = state.cartItem.findIndex((el) => el.id === action.payload)
            state.cartItem.splice(index,1)
            toast.success("Item removed")
        },
        increaseQuantity:(state,action) => {
            const index = state.cartItem.findIndex((el) => el.id === action.payload)
            let qty = state.cartItem[index].qty;
            let qtyChange = ++qty;
            state.cartItem[index].qty = qtyChange;
            const price = state.cartItem[index].price;
            const total = price * qtyChange
            state.cartItem[index].total = total
        },
        decreaseQuantity:(state,action) => {
            const index = state.cartItem.findIndex((el) => el.id === action.payload)
            let qty = state.cartItem[index].qty
            if(qty > 1){
                const qtyChange = --qty
                state.cartItem[index].qty = qtyChange
                const price = state.cartItem[index].price;
                const total = price * qtyChange;
                state.cartItem[index].total = total;
            }
        }
    }
})

export const {addCartItem,decreaseQuantity,increaseQuantity,deleteCartItem} = cartSlice.actions

export default cartSlice.reducer