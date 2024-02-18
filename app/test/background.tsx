import React from 'react';
import './style.css'; // Assuming your CSS file is named CrossAnimation.css

export function CrossAnimation({ children, disabled }: { children: React.ReactNode, disabled?: boolean }) {
    // Utilize the `disabled` variable as needed within your component.
    // For demonstration, I'll just include it in the className conditionally.
    const className = `line${disabled ? 'disabled' : ''}`;
    return (
        <div className={`lines`}>
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
            {children}
        </div>
    );
};


export default CrossAnimation;
