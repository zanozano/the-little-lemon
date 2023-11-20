import React from 'react'
import FoodItem from '../components/FoodItem'
import { Box, Grid } from '@mui/material'

export const Home = () => {
    return (
        <Box minHeight={'70vh'} margin={4} display={'flex'} justifyContent={'space-between'}>
            <FoodItem />
            <FoodItem />
            <FoodItem />
        </Box>
    )
}
