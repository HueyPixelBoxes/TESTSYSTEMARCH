import {
    Typography,
    Box,
} from '@mui/material';

export default function CartItemNameAndPrice( { item } ) {
    return (
        <Box>
            <Typography variant="subtitle1">
                {item.title}
            </Typography>

            <Typography variant="body2" 
                        color="text.secondary">
                ${item.price}
            </Typography>
        </Box>
    )
}