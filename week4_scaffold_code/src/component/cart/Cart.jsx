import {
    Paper,
    Typography,
    Box,
    Drawer
} from '@mui/material';

import CartItemNameAndPrice from './CartItemNameAndPrice';
import CartItemActionPanel from './CartItemActionPanel';
import CartPanelHeader from './CartPanelHeader';
import { useCartContext } from './context/cartContext';
import { ACTIONS } from './reducer/cartReducer';

const Cart = () => {

    const { cartState, cartDispatch } = useCartContext();

    return (
        <Drawer
            open={cartState.isCartOpen}
            anchor="right"
            onClose={() => {
                cartDispatch({ type: ACTIONS.TOGGLE_CART })
            }}
        >
            <Box sx={{ width: 350, p: 2 }}>
                
                <CartPanelHeader />

                <Box sx={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
                    {
                        cartState.cartItems.map((cartItem) => {
                            return (
                                <Paper key={cartItem.id} sx={{ p: 2, mb: 2 }}>
                                    <Box sx={
                                        {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }
                                    }
                                    >
                                        <CartItemNameAndPrice item={cartItem} />
                                        <CartItemActionPanel item={cartItem} />
                                    </Box>
                                </Paper>
                            )
                        })
                    }
                </Box>

                <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Typography variant="h6">
                        Total: 
                    </Typography>
                </Box>
            </Box>
        </Drawer>
    );
};

export default Cart