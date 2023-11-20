import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuDrawer from './MenuDrawer';
import { IconButton } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

export default function Navbar() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <MenuDrawer />
                    <Typography component={Link} to={'/'} variant="h6" sx={{ flexGrow: 1 }}>
                        The Little Lemon
                    </Typography>
                    <IconButton component={Link} to={'/my-cart'}>
                        <ShoppingBasketIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
