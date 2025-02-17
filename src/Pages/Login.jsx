import React, { useState } from 'react'
import { beginLogin, finishLogin } from '../Services/AppService';
import { startAuthentication } from '@simplewebauthn/browser';

function Login() {

    const [username, setUsername] = useState('');

    const handleLogin = async () => {
        try {
            const option = await beginLogin(username);
            option.challenge = option.challenge.value;
            
            const credential = await startAuthentication(option);
            await finishLogin(credential);
            alert('Login successful');
        } catch (error) {
            console.log(error);
            alert('Login failed');
        }
    }

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-10">
    <h1 className="text-6xl font-extrabold">WebAuthn PassKey Register</h1>
    <div className='flex gap-5'>
    <input className='border-black' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
    <button className='bg-black text-white p-2' onClick={() => handleLogin()}>Login</button>
    </div>
  </div>
  )
}

export default Login;