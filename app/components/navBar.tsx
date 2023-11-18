'use client';
import './navbar.css'
export function Navbar() {
    return (
        <div className="navbar bg-transparent text-neutral-content" style={{ 
            position: 'fixed', 
            top: '2vh', 
            left: '-5vw', 
            right: '5vw', 
            zIndex: 100 
        }}>
            <div className="flex justify-end space-x-8 w-full pr-30%">
            <button className="btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white font-bold blue-button">About us</button>
                <button className="btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white font-bold">FAQ</button>
                <button className="btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white font-bold">Contact us</button>
            </div>
        </div>
    );
}
