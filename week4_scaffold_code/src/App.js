
import { useReducer } from "react";
import Cart from "./component/cart/Cart";
import CartContext from "./component/cart/context/cartContext";
import Navbar from "./component/navbar/NavBar";
import RouteConfig from "./router/RouteConfig";
import { BrowserRouter } from 'react-router-dom';
import { calculateTotalItemQty, cartReducer, initialState } from "./component/cart/reducer/cartReducer";

function App() {

  const [ cartState, cartDispatch ] = useReducer(cartReducer, initialState)

  const totalItems = calculateTotalItemQty(cartState.cartItems)

  return (
    <div className="App">

      <CartContext.Provider value={
        {
          cartReducer: { cartState, cartDispatch, totalItems }
        }
        
      }>

        <BrowserRouter>

          <Navbar />

          <Cart />

          <main>
            <RouteConfig />
          </main>

        </BrowserRouter>

      </CartContext.Provider>

    </div>
  );
}

export default App;
