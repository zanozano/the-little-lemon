
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuDrawer from './MenuDrawer';
export default function Navbar() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <MenuDrawer />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        The Little Lemon
                    </Typography>
                </Toolbar>
            </AppBar>

        </Box>
    );
}
