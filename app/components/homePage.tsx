'use client';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function HomePage() {
  const totalImages = 60;
  const gridSize = 20;
  const [imageIndices, setImageIndices] = useState<number[]>([]); // Update the type to number[]
  const [inProp, setInProp] = useState(false);

  // Function to generate a shuffled array of image indices
  const shuffleImages = () => {
    let indices = Array.from({ length: totalImages }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, gridSize);
  };

  useEffect(() => {
    setImageIndices(shuffleImages()); // Initial shuffle
    setInProp(true);

    const interval = setInterval(() => {
      setInProp(false);
      setTimeout(() => {
        setImageIndices(shuffleImages());
        setInProp(true);
      }, 500); // The timeout should match the CSS transition duration
    }, 9000);

    return () => clearInterval(interval);
  }, []);


      return (
        <div className="relative bg-black text-white h-screen flex flex-col justify-center items-center">
          <div className="text-left z-10">
            <div className="responsive-text uppercase tracking-widest">April 13th 2024 @ Drexel University</div>
            <h1 className="responsive-heading font-bold my-5 gradient-text">Dragon Hacks turns 10!</h1>
            <p className="responsive-text uppercase tracking-widest mb-10">
              Interested in sponsoring?
              <a href="mailto:teamdragonhacks@gmail.com" className="text-blue-500 underline">Contact us!</a>
            </p>
            <Link href="/register">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-6 py-3 text-center me-2 mb-2">
                Apply
            </button>
            </Link>
          </div>
          <div className="absolute left-10 flex flex-col justify-center top-1/2 -translate-y-1/2 responsive-large-numbers leading-none font-bold opacity-60 z-10">
          <div>2</div>
          <div>0</div>
          <div>2</div>
          <div>4</div>
        </div>
          <div className="absolute top-0 left-0 w-full h-full z-0 grid grid-cols-5 grid-rows-4">
        {imageIndices.map((imageIndex, idx) => (
          <CSSTransition in={inProp} timeout={500} classNames="fade" key={idx}>
            <div className="relative w-full h-full">
              <Image
                src={`/slideShow/${imageIndex}.jpg`}
                layout="fill"
                objectFit="cover"
                className="tinted-image"
                alt=""
              />
            </div>
          </CSSTransition>
        ))}
      </div>

        </div>
      )
    }

