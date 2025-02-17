import React, { useState } from 'react'
import { beginRegistration, finishRegistration } from '../Services/AppService';
import { startRegistration } from '@simplewebauthn/browser';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const option = await beginRegistration(username);
            option.challenge = option.challenge.value;
            
            const credential = await startRegistration(option);
            await finishRegistration(credential);
            alert('Registration successful');
            navigate('/login');
            
        } catch (error) {
            console.log(error);
            alert('Registration failed');
        }
    }

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-10">
      <h1 className="text-6xl font-extrabold">WebAuthn PassKey Register</h1>
      <div className='flex gap-5'>
      <input className='border-black' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
      <button className='bg-black text-white p-2' onClick={() => handleRegister()}>Register</button>
      </div>
    </div>
  )
}

export default Register