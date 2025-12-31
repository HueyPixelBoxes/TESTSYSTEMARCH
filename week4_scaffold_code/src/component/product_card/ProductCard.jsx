
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Box,
  } from '@mui/material';
import { ACTIONS } from '../cart/reducer/cartReducer';
import { useCartContext } from '../cart/context/cartContext';

export default function ProductCard ( { product } ) {
    const { cartDispatch } = useCartContext();
    
    return (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>

                <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: 'contain' }}
                    image={product.image}
                    alt={product.title}
                />

                <CardContent>

                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        mb: 1 
                    }}>

                        <Typography variant="h6">
                            {product.title}
                        </Typography>
                        
                        <Typography variant="h6">
                            ${product.price}
                        </Typography>
                    
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                
                </CardContent>
                
                <CardActions>

                    <Button 
                        fullWidth 
                        variant="contained"
                        onClick={() => {
                            cartDispatch({
                                type: ACTIONS.ADD_TO_CART,
                                payload: product
                            })
                        }}
                    >
                        Add to Cart
                    </Button>

                </CardActions>
                
            </Card>
        </Grid>
    )
}
