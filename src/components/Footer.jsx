import { Box, Typography } from '@mui/material'
import React from 'react'
import lemonSvg from '/src/assets/lemon.svg';

export const Footer = () => {
    return (
        <Box
            sx={{
                paddingY: '32px',
                backgroundColor: '#DBA507',
                display: 'flex',
                justifyContent: 'space-evenly',
                gap: { xs: 4, md: 0 },
                flexDirection: { xs: 'column', md: 'row' },
            }}>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                <img src={lemonSvg} alt="Lemon Icon" width="100" />
                <Box>
                    <Typography variant="h6">
                        The Little Lemon Restaurant
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ textAlign: { xs: 'center', md: 'left' }, }}>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', justifyContent: 'center', textAlign: { xs: 'center', md: 'left' }, }}>
                <Typography variant="body2" color="textSecondary">
                    123 Main Street, Cityville, Country
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    +1 (123) 456-7890
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    info@littlelemonrestaurant.com
                </Typography>
            </Box>
        </Box>
    )
}
