import React from 'react'
import FoodItem from '../components/FoodItem'
import { Box, Grid } from '@mui/material'

export const Home = () => {
    return (
        <Box margin={4} display={'flex'} justifyContent={'space-between'}>
            <FoodItem />
            <FoodItem />

            <FoodItem />


        </Box>
    )
}
