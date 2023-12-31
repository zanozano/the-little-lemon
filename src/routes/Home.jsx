import React from 'react'
import FoodItem from '../components/FoodItem'
import { Box, Typography } from '@mui/material'


const items = [
    {
        title: 'Fast Food', image: '/images/fast-food.jpg', desc: `Indulge in the delicious world of fast food! Satisfy your cravings with our mouthwatering burgers, crispy fries, and a variety of savory treats. Quick, tasty, and perfect for those on the go`
    },
    {
        title: 'Dessert', image: '/images/dessert.jpg', desc: `Sweet delights await! Dive into a realm of decadent desserts that will tantalize your taste buds. From rich chocolates to fruity delights, our dessert menu offers a sweet ending to any meal or a delightful treat on its own`
    },
    {
        title: 'Healthy', image: '/images/healthy.jpg', desc: `Nourish your body with our healthy menu options. Discover a range of nutrient-packed dishes crafted to support your well-being without compromising on flavor. Eating well has never been this delicious`
    },
    {
        title: 'Salad', image: '/images/salad.jpg', desc: `Freshness meets flavor in our vibrant salad menu. Explore a variety of crisp, colorful salads featuring the finest ingredients. Whether you are a salad enthusiast or just looking for a light and refreshing option, our salads are a tasty choice`
    },
];

export const Home = () => {
    return (
        <Box minHeight={'70vh'} margin={4}>
            <Typography variant='h2' textAlign={'center'} marginBottom={6}>Our Categories</Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 3,
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {items.map(({ title, image, desc }) => (
                    <FoodItem key={title} title={title} image={image} desc={desc} />
                ))}
            </Box>
        </Box>
    )
}
