'use client'
import React, { useState, useEffect } from 'react';

export default function FirstLoad() {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        { prefix: '$', code: 'npm install dragon-hacks', className: '' },
        { prefix: '>', code: 'installing collaboration', className: 'text-warning' },
        { prefix: '>', code: 'installing cool prizes', className: 'text-warning' },
        { prefix: '>', code: 'Finally installing Fun library', className: 'text-warning' },
        { prefix: '>', code: 'SUCCESS! Ambition can\'t wait', className: 'text-success' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-2/5 mx-auto">
        <div className="mockup-code">
                {steps.slice(0, currentStep + 1).map((step, index) => (
                    <pre key={index} data-prefix={step.prefix} className={step.className}>
                        <code>{step.code}</code>
                    </pre>
                ))}
            </div>
            </div>
        </div>
    );
}
