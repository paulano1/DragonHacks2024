// pages/register.tsx
'use client';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import app, { auth } from '../config/firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { redirect } from 'next/navigation';
import CrossAnimation from '../test/background';

interface FileUploadProps {
  loginEmail: string;
  notificationEmail: string;
  dateOfBirth: string;
  phone: string;
  allergies: string;
  TshirtSize: string;
  Gender: string;
  university: string;
  classYear: string;
  major: string;
  hackathonExperience: string;
  password: string;
  confirmPassword: string;
  file: File | null;
  name: string;
  eligible: boolean;
  areasOfInterest: string;
  hardware: boolean;
  github: string;
  devpost: string;
  linkedin: string;
  mlhContestTerms: boolean;
  mlhTerms: boolean;
  mlhNewsletter: boolean;
}

const tmpFileUploadProps: FileUploadProps = {
  loginEmail: '',
  notificationEmail: '',
  dateOfBirth: '',
  phone: '',
  allergies: '',
  TshirtSize: '',
  Gender: '',
  university: '',
  classYear: '',
  major: '',
  hackathonExperience: '',
  password: '',
  confirmPassword: '',
  file:  null,
  name: '',
  eligible: false,
  areasOfInterest: '',
  hardware: false,
  github: '',
  devpost: '',
  linkedin: '',
  mlhContestTerms: false,
  mlhTerms: false,
  mlhNewsletter: false
};

const phoneNumberRegex = /^\d{10}$/;
const TshirtSize = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const classYear = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate', 'Other'];
const areasOfInterest = ['Web Development', 'Mobile Development', 'Machine Learning', 'Data Science', 'Cybersecurity', 'Robotics', 'Hardware', 'Other'];
const hackathonExperiences = ['Beginner(We love beginners!!)', 'Intermediate(2-3 hackathons)', 'Expert!(Professional Hackathon Enjoyer)'];
const dateValidation = (date: string) => {
  const dateOfBirth = new Date(date);
  const latest18YearsAgo = new Date();
  latest18YearsAgo.setFullYear(latest18YearsAgo.getFullYear() - 18);
  return dateOfBirth < latest18YearsAgo;
}



const FileUpload: React.FC = () => {
  const [formDetails, setFormDetails] = useState<FileUploadProps>(tmpFileUploadProps);
  const firestore = getFirestore(app);
  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { loginEmail, notificationEmail, dateOfBirth, university, hackathonExperience, password, confirmPassword, file, name,
      eligible, areasOfInterest, hardware, mlhContestTerms, mlhTerms, mlhNewsletter
    } = formDetails;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!phoneNumberRegex.test(formDetails.phone)) {
      setError('Invalid phone number.');
      return;
    }
    if (!eligible) {
      setError('You must be eligible to participate in the hackathon.');
      return;
    }
    if (!mlhContestTerms) {
      setError('You must agree to the MLH terms and conditions.');
      return;
    }
    if(name === '' || loginEmail === '' || notificationEmail === ''  || university === '' || hackathonExperience === '') {
      setError('Please fill out all the fields.');
      return;
    }
    if (!file) {
      setError('Please select a file.');
      return;
    }
    if (!dateValidation(dateOfBirth)) {
      setError('You must be at least 18 years old to participate in the hackathon.');
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
      const { loginEmail, notificationEmail, dateOfBirth, university, hackathonExperience, password, confirmPassword, file, name,
        eligible, areasOfInterest, hardware, mlhContestTerms, mlhTerms, mlhNewsletter, classYear, TshirtSize, phone, allergies
      } = formDetails;
      
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
        loginEmail: loginEmail,
        notificationEmail: notificationEmail,
        dateOfBirth: dateOfBirth,
        university: university,
        hackathonExperience: hackathonExperience,
        areasOfInterest: areasOfInterest,
        hardware: hardware,
        mlhContestTerms: mlhContestTerms,
        mlhTerms: mlhTerms,
        mlhNewsletter: mlhNewsletter,
        classYear: classYear,
        TshirtSize: TshirtSize,
        phone: phone,
        allergies: allergies,
        cvUrl: url,
        createdAt: new Date()
      });
    } catch (error) {
      console.error('Error saving the file and name: ', error);
      alert('Error registering. Please try again with a different email.');
      setError('Error registering. Please try again with a different email.');
      setDisabled(false);
      
    }
  };

  return (
    <CrossAnimation disabled={disabled}>
    <div className="flex items-center justify-center h-screen ">
    <div className="p-12 bg-white shadow-lg rounded-lg w-1/2 bg-gray-100 z-10 mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 overflow-auto max-h-[80%]">
          <h2 className="mb-6 text-center text-3xl font-extrabold">Registration is currently open</h2>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <form onSubmit={handleRegister}>
          <div className="mb-4">
              <label htmlFor="eligible" className="block mb-2 text-m font-medium text-gray-900">Eligibility</label>
              <p className="text-sm font-medium text-gray-900">You must be at least 18 years old and a currently-enrolled student (undergraduate or graduate) as of March 29, 2024, or have graduated within twelve months prior to March 29, 2024.</p>
              <label htmlFor="eligible" className="checkbox-label">
                            <input type="checkbox" id="eligible" className="input input-primary" required
                                  checked={formDetails.eligible} 
                                  onChange={(e) => setFormDetails({
                                    ...formDetails,
                                    eligible: e.target.checked
                                  })}
                            />
                            I agree with the terms
                          </label>
            </div>
            <div className="mb-4">
            <label htmlFor="eligible" className="block mb-2 text-m font-medium text-gray-900">Code of Conduct</label>
            <p className="text-sm font-medium text-gray-900">
            We take inclusivity and safety seriously, and as part of that goal, we uphold the community guidelines shared by all MLH Member Events.
             To attend, you must agree to abide by the terms of the  <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target="_blank" className="text-blue-500">MLH Code of Conduct</a>. 
             You must also agree to abide by the terms of the  MLH Contest Terms and Conditions.
              and the <a href='https://mlh.io/privacy' target="_blank" className="text-blue-500">MLH Privacy Policy</a>.
              Please note that you may receive pre and post-event informational e-mails and occasional messages about hackathons from MLH as per the MLH Privacy Policy.
            Since Dragon Hacks is hosted at Drexel University, the rules detailed in <a href='https://drexel.edu/studentlife/community-standards' target="_blank" className="text-blue-500">Drexel University{"'"}s Community Standards </a>
             take precedence for all things involving this hackathon.
              </p>
              <div className="mb-4">
              <label htmlFor="mlhContestTerms" className="checkbox-label">
                            <input type="checkbox" id="mlhContestTerms" className="input input-primary" required
                                  checked={formDetails.mlhContestTerms} 
                                  onChange={(e) => setFormDetails({
                                    ...formDetails,
                                    mlhContestTerms: e.target.checked
                                  })}
                            />
                             I have read and agree to the MLH Code of Conduct.
                          </label>
              </div>
              <div className="mb-4">
                          
              <label htmlFor="mlhContestTerms" className="checkbox-label">
                            <input type="checkbox" id="mlhContestTerms" className="input input-primary" 
                                  checked={formDetails.mlhTerms} 
                                  onChange={(e) => setFormDetails({
                                    ...formDetails,
                                    mlhTerms: e.target.checked
                                  })}
                            />
                             I authorize you to share my application/registration information for event administration, ranking, MLH administration, pre- and post-event informational e-mails, and occasional messages about hackathons in-line with the MLH Privacy Policy. I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy.
                </label>
                </div>
                <div className="mb-4">
                <label htmlFor="mlhContestTerms" className="checkbox-label">
                            <input type="checkbox" id="mlhContestTerms" className="input input-primary" 
                                  checked={formDetails.mlhNewsletter} 
                                  onChange={(e) => setFormDetails({
                                    ...formDetails,
                                    mlhNewsletter: e.target.checked
                                  })}
                            />
                            I authorize MLH to send me an email where I can further opt into the MLH Hacker, Events, or Organizer Newsletters and other communications from MLH.
                </label>
                </div>
            </div>
          <div className="mb-4">
              <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
              <input type="email" id="loginEmail" className="input input-bordered w-full bg-white" required
                value={formDetails.name} onChange={(e) => setFormDetails({
                  ...formDetails,
                  name: e.target.value
                })} />
            </div>
            <div className="mb-4">
              <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-gray-900">Login Email</label>
              <input type="email" id="loginEmail" className="input input-bordered w-full bg-white" required
                value={formDetails.loginEmail} onChange={(e) => setFormDetails({
                  ...formDetails,
                  loginEmail: e.target.value
                })} />
            </div>
            <div className="mb-4">
              <label htmlFor="notificationEmail" className="block mb-2 text-sm font-medium text-gray-900">Notification Email (.edu Email)</label>
              <input type="email" id="notificationEmail" className="input input-bordered w-full bg-white" required
                value={formDetails.notificationEmail} onChange={(e) => setFormDetails({
                  ...formDetails,
                  notificationEmail: e.target.value
                })} />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
              <input type="date" id="dob" className="input input-bordered w-full bg-white" required
                value={formDetails.dateOfBirth} onChange={(e) => setFormDetails({
                  ...formDetails,
                  dateOfBirth: e.target.value
                })} />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">T-shirt size</label>
              <select id="dob" className="input input-bordered w-full bg-white" required
                value={formDetails.TshirtSize} onChange={(e) => setFormDetails({
                  ...formDetails,
                  TshirtSize: e.target.value
                })} >
                {TshirtSize.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
              <input type="number" id="dob" className="input input-bordered w-full bg-white" required
                value={formDetails.phone} onChange={(e) => setFormDetails({
                  ...formDetails,
                  phone: e.target.value
                })} />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">class year</label>
              <select id="dob" className="input input-bordered w-full bg-white" required
                value={formDetails.classYear} onChange={(e) => setFormDetails({
                  ...formDetails,
                  classYear: e.target.value
                })} >
                {classYear.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Areas of interest</label>
              <select id="dob" className="input input-bordered w-full bg-white" required
                value={formDetails.classYear} onChange={(e) => setFormDetails({
                  ...formDetails,
                  areasOfInterest: e.target.value
                })} >
                {areasOfInterest.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-900">University</label>
              <input type="text" id="university" className="input input-bordered w-full bg-white" required
                value={formDetails.university} onChange={(e) => setFormDetails({
                  ...formDetails,
                  university: e.target.value
                })} />
            </div>
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-gray-900">How comfortable are you with hackathons?</p>
              <select id="exp" className="input input-bordered w-full bg-white" required value={formDetails.hackathonExperience} onChange={(e) => setFormDetails({
                ...formDetails,
                hackathonExperience: e.target.value
              })}>
                {hackathonExperiences.map((exp) => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            
            </div>
            <div className="mb-6">
              <label htmlFor="cv" className="block mb-2 text-sm font-medium text-gray-900">Upload your CV</label>
              <input type="file" id="cv" className="block w-full text-sm text-gray-900 file:btn file:btn-primary" 
                onChange={
                  (e) => {
                    if (e.target.files) {
                      setFormDetails({
                        ...formDetails,
                        file: e.target.files[0]
                      });
                    }
                  }
                } />
            </div>
            <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input type="password" id="password" className="input input-bordered w-full bg-white" required
              value={formDetails.password} onChange={(e) => setFormDetails({
                ...formDetails,
                password: e.target.value
              })} />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
            <input type="password" id="confirmPassword" className="input input-bordered w-full bg-white" required
              value={formDetails.confirmPassword} onChange={(e) => setFormDetails({
                ...formDetails,
                confirmPassword: e.target.value
              })} />
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