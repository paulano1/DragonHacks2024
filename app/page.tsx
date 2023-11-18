'use client';
import Image from 'next/image';
import FirstLoad from './components/firstLoad';
import { useEffect, useState } from 'react';
import HomePage from './components/homePage';

export default function Home() {
    const [showHomePage, setShowHomePage] = useState(false);

    useEffect(() => {
        // Delay for 4500 milliseconds (4.5 seconds) before showing the HomePage
        const delay = 4500;
        const timeoutId = setTimeout(() => {
            setShowHomePage(true);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            {showHomePage ? <HomePage /> : <FirstLoad />}
        </div>
    );
}
