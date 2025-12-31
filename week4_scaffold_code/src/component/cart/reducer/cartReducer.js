const initialState = {
  cartItems: [],
  totalPrice: 0,
  isCartOpen: false
}

const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  REMOVE: 'REMOVE',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART'
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case (ACTIONS.ADD_TO_CART): {

      const newCartItem = action.payload

      const isExistingCartItem = state.cartItems.find(
        (item) => item.id === newCartItem.id
      )

      let updatedCartItems

      if (isExistingCartItem) {
        updatedCartItems = state.cartItems.map((item) => {
          if (item.id === newCartItem.id) {
            return {
              ...item,
              qty: item.qty + 1
            }
          }
          return item
        })
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { ...newCartItem, qty: 1 }
        ]
      }

      return {
        ...state,
        cartItems: updatedCartItems
      }
    }
    case (ACTIONS.TOGGLE_CART): {
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      }
    }
    case (ACTIONS.CLEAR_CART): {

      // Set the cartItems to empty
      // Set total price to 0
    }
  }
}

const calculateTotalItemQty = (cartItems) => {
  return cartItems.reduce(
    (sum, item) => sum + item.qty, 
    0
  )
}

export { initialState, ACTIONS, cartReducer, calculateTotalItemQty }