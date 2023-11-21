import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { SimpleForm } from '../components/SimpleForm'

export const ContactUs = () => {
    return (
        <Box minHeight={'70vh'} margin={4} justifyContent={'center'} width={'30%'} marginX={'auto'}>
            <Paper sx={{ padding: 8, display: 'flex', flexDirection: { xs: 'column', md: 'column' }, gap: 4 }}>
                <Typography variant='h2' textAlign={'center'}>Contact Us</Typography>
                <SimpleForm />
            </Paper>
        </Box>
    )
}
