import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const SimpleForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            phoneNumber,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Phone Number"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button fullWidth size='large' variant="contained" color="primary" type="submit" sx={{ marginTop: 3 }}>
                Send your message
            </Button>
        </form>
    )
}
