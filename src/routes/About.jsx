import { Box, Card, CardContent, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export const About = () => {
    return (
        <Box minHeight={'70vh'} sx={{ margin: '44px' }}>
            <Card elevation={1}>
                <CardMedia
                    sx={{ height: { xs: '200px', md: '400px' } }}
                    image="/public/images/restaurant.jpg"
                    title="Pizza"
                />
                <CardContent sx={{ padding: 6 }}>
                    <Typography variant='h4'>About Us</Typography>
                    <Divider sx={{ margin: '24px 0' }} />
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Welcome to The Little Lemon, a culinary haven where zest meets elegance, and flavors dance on the palate. Nestled in the heart of gastronomic excellence, The Little Lemon has earned its reputation as a globally acclaimed restaurant, captivating taste buds with a symphony of exquisite dishes that have garnered prestigious Michelin awards.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        At The Little Lemon, we believe in the transformative power of food, turning each dining experience into a journey of culinary discovery. Our chefs, true maestros of the kitchen, meticulously craft a menu that showcases a diverse range of flavors, drawing inspiration from global cuisines while infusing a touch of innovation that sets us apart.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        What sets The Little Lemon apart is not just the delectable dishes but the passion that goes into every detail. From the carefully selected ingredients sourced from local farmers and international suppliers to the artful presentation that delights the eyes as much as the taste buds, our commitment to excellence is evident in every aspect of our dining experience.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        As a recipient of Michelin awards, The Little Lemon stands as a beacon of culinary mastery, recognized for its commitment to quality, creativity, and exceptional service. Each dish is a testament to the dedication of our culinary team, who continuously push boundaries to redefine the art of fine dining.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
