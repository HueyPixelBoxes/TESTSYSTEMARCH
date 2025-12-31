import {
    Button,
    Typography,
    Box,
} from '@mui/material';


export default function CartPanelHeader() {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
        }}>

            <Typography variant="h6">
                Shopping Cart ( items)
            </Typography>

            <Button
                variant="contained"
                color="error"
                size="small"
            >
                Clear Cart
            </Button>
        </Box>
    )
}