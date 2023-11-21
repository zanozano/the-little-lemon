import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import lemonSvg from '/src/assets/lemon.svg';

export const SimpleForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { firstName, lastName, email, phoneNumber });
        setIsSent(true);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Message Sent successfully",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            setIsSent(false);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
        }, 5000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const trimmedValue = value.trim();

        if (trimmedValue) {
            if (name === 'firstName') {
                setFirstName(trimmedValue);
            } else if (name === 'lastName') {
                setLastName(trimmedValue);
            } else if (name === 'email') {
                setEmail(trimmedValue);
            } else if (name === 'phoneNumber') {
                setPhoneNumber(trimmedValue);
            }
        }
    };

    return (
        <>
            {!isSent ? (

                <form onSubmit={handleSubmit} >
                    <TextField
                        label="First Name"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleChange}
                    />
                    <Button fullWidth size="large" variant="contained" color="primary" type="submit" sx={{ marginTop: 3 }}>
                        Send your message
                    </Button>
                </form>
            ) :
                (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={lemonSvg} alt="Lemon Icon" width="100" />
                    </Box>
                )
            }
        </>
    )
}
