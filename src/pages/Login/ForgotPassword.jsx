import React from 'react'
import { Button, TextField } from '@mui/material'

const ForgotPassword = () => {
  return (
    <div className="w-75% grid px-4 mt-12 md:w-full md:px-96">
        <div className="border w-75% p-8 shadow-lg rounded-lg md:w-full md:px-32 mt-16">
            <div className="flex justify-center">
                <img src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7876.jpg?w=740&t=st=1674107191~exp=1674107791~hmac=b13efbb7e06fd3c6566a6de2e3f87b1e9b3c650ecac7962899ea4041518e2735" height="200" width="200" alt=""/>
            </div>
            <div className="grid gap-4 mt-6">
                <h1 className="text-center text-4xl">Forgot Password?</h1>
                <p>No worries! Just enter your email and we'll send you a reset password link</p>
                <TextField label="Email" variant='outlined' size='small'/>                
            </div>
            <div className="mt-3 flex justify-center">
                <Button sx={{paddingX:5}} variant="contained">Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword
