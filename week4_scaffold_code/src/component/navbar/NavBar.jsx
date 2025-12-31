import {
    AppBar,
    Badge,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';

import {
    ShoppingCart as ShoppingCartIcon,
    Store as StoreIcon
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { useCartContext } from '../cart/context/cartContext';
import { ACTIONS } from '../cart/reducer/cartReducer';


const Navbar = ( ) => {

    const { cartDispatch, totalItems } = useCartContext();

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
          <Toolbar>
            <StoreIcon sx={{ mr: 2 }} />
            
            
              <Typography variant="h6" 
                          component="div" 
                          sx={{ mr: 4 }}>
                          
                <Link to="/"> Our Store </Link>
              </Typography>
            
              <Typography variant="h6" 
                          component="div" 
                          sx={{ flexGrow: 1 }}>
                          
                <Link to="/promotion"> Promotion </Link>
              </Typography>
            

            <IconButton 
              color="inherit"
              onClick={() => {
                cartDispatch({ type: ACTIONS.TOGGLE_CART })
              }}
            >
              <Badge 
                color="error"
                badgeContent={totalItems}
                >
                <ShoppingCartIcon />
              </Badge>
              
            </IconButton>
          </Toolbar>
        </AppBar>
    )
}

export default Navbar