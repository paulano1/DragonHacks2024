// pages/register.tsx
'use client';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import app, { auth } from '../config/firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { redirect } from 'next/navigation';
import CrossAnimation from '../test/page';

const FileUpload: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [notificationEmail, setNotificationEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [university, setUniversity] = useState('');
  const [hackathonExperience, setHackathonExperience] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const firestore = getFirestore(app);
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!loginEmail || !notificationEmail || !dateOfBirth || !university || !hackathonExperience || !file) {
      setError('Please fill in all fields.');
      return;
    }

    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed for CV.');
      return;
    }

    handleUpload().then(() => {
      window.location.href = '/success';
    });
  };

  const handleUpload = async () => {
    setDisabled(true);
    const storage = getStorage(app);
    try {
      
      if (!file) {
        setError('Please select a file.');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, password);
      const user = userCredential.user;
      console.log('user created')
      if (!userCredential) {
        setError('Error creating user.');
        return;
      }
      const fileRef = ref(storage, `cvs/${user.uid}/${file.name}`);
      const fileSnapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      console.log('File uploaded to: ', url);
      
      await addDoc(collection(firestore, user.uid), {
        name: name,
        notificationEmail: notificationEmail,
        dateOfBirth: dateOfBirth,
        university: university,
        hackathonExperience: hackathonExperience,
        cvUrl: url,
        createdAt: new Date()
      });
    } catch (error) {
      console.error('Error saving the file and name: ', error);
      alert('Error registering. Please try again with a different email.');
      setLoginEmail('');
      setNotificationEmail('');
      setDateOfBirth('');
      setUniversity('');
      setHackathonExperience('');
      setPassword('');
      setConfirmPassword('');
      setFile(null);
      setName('');
      setError('Error registering. Please try again with a different email.');
      setDisabled(false);
      
    }
  };

  return (
    <CrossAnimation disabled={!disabled}>
    <div className="flex items-center justify-center h-screen ">
        <div className="p-8 bg-white shadow-lg rounded-lg w-1/2 bg-gray-100 z-10">
          <h2 className="mb-6 text-center text-3xl font-extrabold">Register</h2>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <form onSubmit={handleRegister}>
          <div className="mb-4">
              <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
              <input type="email" id="loginEmail" className="input input-bordered w-full" required
                value={loginEmail} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900">Login Email</label>
              <input type="email" id="loginEmail" className="input input-bordered w-full" required
                value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="notificationEmail" className="block mb-2 text-sm font-medium text-gray-900">Notification Email (.edu Email)</label>
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
                  <span className="label-text ml-2">Intermediate(2-3 hackathons) </span>
                </label>
                <label className="label cursor-pointer">
                  <input type="radio" name="hackathonExperience" className="radio radio-primary" value="Expert" 
                    checked={hackathonExperience === 'Expert'} onChange={(e) => setHackathonExperience(e.target.value)} />
                  <span className="label-text ml-2">{'Expert!(Professional Hackathon Enjoyer)'}</span>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="cv" className="block mb-2 text-sm font-medium text-gray-900">Upload your CV</label>
              <input type="file" id="cv" className="block w-full text-sm text-gray-900 file:btn file:btn-primary" 
                onChange={
                  (e) => {
                    if (e.target.files) {
                      setFile(e.target.files[0]);
                    }
                  }
                } />
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
          <button type="submit" className="btn btn-primary w-full" disabled={
            disabled
          }>Register</button>
        </form>
      </div>
    </div>
    </CrossAnimation>
  );
};

export default FileUpload;