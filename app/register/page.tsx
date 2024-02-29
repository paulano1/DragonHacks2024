"use client"
import { useState } from 'react'
import { SparklesCore } from '../ui/sparkles'
import InputForm from './formhandling'
import { Terms } from './terms'

export default function Register() {
    const [acceptTerms, setAcceptTerms] = useState(false)

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-auto rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 mt-2">
        Register
      </h1>
      <div className="w-full flex justify-center relative z-20 mt-8">
     
      {!acceptTerms ? <Terms onAcceptTerms={setAcceptTerms} /> : <InputForm />}

    </div>
    </div>
  )
}