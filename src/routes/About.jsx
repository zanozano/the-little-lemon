import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export const About = () => {
    return (
        <Box margin={4} display={'flex'}>
            <Paper sx={{ padding: 8, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                <Typography variant='body1' sx={{ flex: 1 }}>
                    <p>
                        Welcome to The Little Lemon, a culinary haven where zest meets elegance, and flavors dance on the palate. Nestled in the heart of gastronomic excellence, The Little Lemon has earned its reputation as a globally acclaimed restaurant, captivating taste buds with a symphony of exquisite dishes that have garnered prestigious Michelin awards.
                    </p>
                    <br />
                    <p>
                        At The Little Lemon, we believe in the transformative power of food, turning each dining experience into a journey of culinary discovery. Our chefs, true maestros of the kitchen, meticulously craft a menu that showcases a diverse range of flavors, drawing inspiration from global cuisines while infusing a touch of innovation that sets us apart.
                    </p>
                    <br />
                    <p>
                        What sets The Little Lemon apart is not just the delectable dishes but the passion that goes into every detail. From the carefully selected ingredients sourced from local farmers and international suppliers to the artful presentation that delights the eyes as much as the taste buds, our commitment to excellence is evident in every aspect of our dining experience.
                    </p>
                    <br />
                    <p>
                        As a recipient of Michelin awards, The Little Lemon stands as a beacon of culinary mastery, recognized for its commitment to quality, creativity, and exceptional service. Each dish is a testament to the dedication of our culinary team, who continuously push boundaries to redefine the art of fine dining.
                    </p>
                    <br />
                    <p>
                        Our menu boasts a tantalizing array of options, ranging from classic favorites with a modern twist to avant-garde creations that push the boundaries of gastronomy. Whether you crave the comforting warmth of a perfectly executed risotto or the bold flavors of an innovative fusion dish, The Little Lemon promises a dining experience that transcends expectations.
                    </p>
                    <br />
                    <p>
                        As we welcome guests from around the world, The Little Lemon remains a destination for those seeking not just a meal but an unforgettable culinary adventure. Our commitment to excellence has turned The Little Lemon into a global sensation, earning accolades that reflect our dedication to providing a world-class dining experience.
                    </p>
                    <br />
                    <p>
                        Join us at The Little Lemon, where every dish tells a story, and every bite is a celebration of the culinary arts. Experience the magic that has made us an icon in the world of fine dining, and let The Little Lemon be the stage for your next gastronomic masterpiece.
                    </p>
                </Typography>
                <Box sx={{ flex: 1 }}>
                    <img src="/public/images/restaurant.jpg" alt="The Little Lemon Restaurant" style={{ width: '100%' }} />
                </Box>
            </Paper>
        </Box>
    )
}
