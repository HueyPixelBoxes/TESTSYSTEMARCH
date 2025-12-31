
import {
    IconButton,
    Typography,
    Box,
} from '@mui/material';

import {
    Add as AddIcon,
    Remove as RemoveIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';

export default function CartItemActionPanel( { item } ) {


    return (
        <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1 
            }}
        >
            <IconButton
                size="small"
            >
                <RemoveIcon />
            </IconButton>
            
            <Typography>{item.qty}</Typography>
            
            <IconButton
                size="small"
            >
                <AddIcon />
            </IconButton>

            <IconButton
                size="small"
                color="error"
            >
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}