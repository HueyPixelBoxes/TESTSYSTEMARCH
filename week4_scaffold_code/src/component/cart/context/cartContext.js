import React from 'react';

const CartContext = React.createContext();

export function useCartContext() {
    const { cartState, cartDispatch, totalItems } 
        = React.useContext(CartContext).cartReducer;

    return { cartState, cartDispatch, totalItems };
}

export default CartContext