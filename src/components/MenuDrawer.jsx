import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { Divider, IconButton, ListItemIcon, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import lemonSvg from '/src/assets/lemon.svg';

//icon
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const navigation = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'My Cart', path: '/my-cart', icon: <ShoppingBasketIcon /> },
    { text: 'Menu', path: '/menu', icon: <RestaurantMenuIcon /> },
    { text: 'About', path: '/about', icon: <InfoIcon /> },
    { text: 'Contact Us', path: '/contact-us', icon: <ContactSupportIcon /> },
];

export default function MenuDrawer() {
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: 4,
                marginBottom: 2,
                gap: 2
            }}>
                <img src={lemonSvg} alt="Lemon Icon" width="100" />
                <Typography variant='h6'>
                    The Little Lemon
                </Typography>
            </Box>
            <Divider />
            <List>
                {navigation.map(({ text, path, icon }, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={Link} to={path}>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer('left', true)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={state.left}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>

        </div>
    );
}
