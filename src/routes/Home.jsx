import React from 'react'
import FoodItem from '../components/FoodItem'
import { Box, Typography } from '@mui/material'


const items = [
    { title: 'Fast Food', image: '/images/fast-food.jpg' },
    { title: 'Dessert', image: '/images/dessert.jpg' },
    { title: 'Healthy', image: '/images/healthy.jpg' },
    { title: 'Salad', image: '/images/salad.jpg' },
];

export const Home = () => {
    return (
        <Box minHeight={'70vh'} margin={4}>
            <Typography variant='h2' textAlign={'center'} marginBottom={6}>Our Categories</Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                {items.map(({ title, image }) => (
                    <FoodItem key={title} title={title} image={image} />
                ))}
            </Box>
        </Box>
    )
}
