// pages/register.tsx
'use client';

import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // for storing user data
import { getStorage, ref, uploadBytes } from 'firebase/storage'; // for storing files

const db = getFirestore(); // initialize Firestore
const storage = getStorage(); // initialize Storage


export default function RegisterPage() {
    const [loginEmail, setLoginEmail] = useState('');
    const [notificationEmail, setNotificationEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [university, setUniversity] = useState('');
    const [hackathonExperience, setHackathonExperience] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cvFile, setCvFile] = useState<File | null>(null);

    const [error, setError] = useState(''); // For displaying error messages

    const handleRegister = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();
  
      // Check if passwords match
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
  
      // Check if all fields are filled
      if (!loginEmail || !notificationEmail || !dateOfBirth || !university || !hackathonExperience || !cvFile) {
        setError('Please fill in all fields.');
        return;
      }
  
      // Check if the file is a PDF
      if (cvFile && cvFile.type !== 'application/pdf') {
        setError('Only PDF files are allowed for CV.');
        return;
      }
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, password);
        const user = userCredential.user;
  
        // Store user info in Firestore
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          notificationEmail,
          dateOfBirth,
          university,
          hackathonExperience
        });
  
        // Upload CV file to Firebase Storage
        const cvRef = ref(storage, `cvs/${user.uid}/${cvFile.name}`);
        await uploadBytes(cvRef, cvFile);
  
        console.log('User registered and additional data stored!');
        setError(''); // Clear any previous errors
      } catch (error) {
        console.error('Registration Error', error);
        setError('Registration failed. Please try again.');
      }
    };
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
    
            // Check if the file is a PDF
            if (file.type === 'application/pdf') {
                setCvFile(file);
                setError(''); // Clear any previous error
            } else {
                setCvFile(null); // Clear the file input
                setError('Only PDF files are allowed for CV.'); // Set an error message
            }
        }
    };
    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg">
          <h2 className="mb-6 text-center text-3xl font-extrabold">Register</h2>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900">Login Email</label>
              <input type="email" id="loginEmail" className="input input-bordered w-full" required
                value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="notificationEmail" className="block mb-2 text-sm font-medium text-gray-900">Notification Email (Communication Email)</label>
              <input type="email" id="notificationEmail" className="input input-bordered w-full" required
                value={notificationEmail} onChange={(e) => setNotificationEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
              <input type="date" id="dob" className="input input-bordered w-full" required
                value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-900">University</label>
              <input type="text" id="university" className="input input-bordered w-full" required
                value={university} onChange={(e) => setUniversity(e.target.value)} />
            </div>
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-gray-900">How comfortable are you with hackathons?</p>
              <div className="flex flex-col gap-2">
                <label className="label cursor-pointer">
                  <input type="radio" name="hackathonExperience" className="radio radio-primary" value="Beginner" 
                    checked={hackathonExperience === 'Beginner'} onChange={(e) => setHackathonExperience(e.target.value)} />
                  <span className="label-text ml-2">Beginner (We love beginners!!)</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="radio" name="hackathonExperience" className="radio radio-primary" value="Intermediate" 
                    checked={hackathonExperience === 'Intermediate'} onChange={(e) => setHackathonExperience(e.target.value)} />
                  <span className="label-text ml-2">Intermediate</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="radio" name="hackathonExperience" className="radio radio-primary" value="Expert" 
                    checked={hackathonExperience === 'Expert'} onChange={(e) => setHackathonExperience(e.target.value)} />
                  <span className="label-text ml-2">Expert!</span>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="cv" className="block mb-2 text-sm font-medium text-gray-900">Upload your CV</label>
              <input type="file" id="cv" className="block w-full text-sm text-gray-900 file:btn file:btn-primary" 
                onChange={handleFileChange} />
            </div>
            <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input type="password" id="password" className="input input-bordered w-full" required
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
            <input type="password" id="confirmPassword" className="input input-bordered w-full" required
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>
      </div>
    </div>
  );
}