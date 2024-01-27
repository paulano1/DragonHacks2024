'use client';

import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect to home page or dashboard as needed
        console.log('Logged in!');
      } catch (error) {
        setError("User not found, click to create a new account!")
      }
    };

    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg">
          <h2 className="mb-6 text-center text-3xl font-extrabold">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="input input-bordered w-full" required
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
              <input type="password" id="password" className="input input-bordered w-full" required
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex items-center justify-between mb">
              <div className="text-center w-full">
                <a href="/register" className="text-sm text-red-600 hover:underline">{error}</a>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-center w-full">
                <a href="/resetpass" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    );
}
