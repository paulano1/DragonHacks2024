'use client';
import { useEffect, useState } from 'react';
import HomePage from './components/homePage';
import FirstLoad from './components/firstLoad';

export default function Home() {
    const [showHomePage, setShowHomePage] = useState(false);
    const totalImages = 60;

    useEffect(() => {
        const preloadImages = () => {
            return Promise.all(
                Array.from({ length: totalImages }, (_, i) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = `/slideShow/${i}.jpg`;
                        img.onload = resolve;
                        img.onerror = reject;
                    });
                })
            );
        };

        preloadImages().then(() => {
            const delay = 4500;
            const timeoutId = setTimeout(() => {
                setShowHomePage(true);
            }, delay);
            return () => clearTimeout(timeoutId);
        }).catch(error => {
            console.error('Failed to preload images', error);
        });
    }, []);

    return (
        <div>
            {showHomePage ? <HomePage /> : <FirstLoad />}
        </div>
    );
}
