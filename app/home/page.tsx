"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { WavyBackground } from "../ui/wavy-background";
import { FloatingNavbar } from "../ui/navbar";
import Faq from "../ui/accordian";
import { Sponsors } from "../ui/sponsors";

export default function LayoutGridApp() {
  return (
    <FloatingNavbar>
    <div className="h-screen py-20 w-full ">
      <div className="bg-black" >
        <WavyBackground className="max-w-4xl mx-auto pb-40 ">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
               Dragon Hacks 2024
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                Welcome to the 10th edition of Dragon Hacks!
            </p>
            <div className="flex justify-center mt-8">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => {
              window.location.href = "/register"
            }}>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
                  Register
                </span>
            </button>
            
            </div>
    </WavyBackground>
    </div>
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Who are we?

        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
        Dragon Hacks is Drexel University&apos;s 24-hour hackathon, a thrilling event where students from all backgrounds come together to create exciting projects from scratch. Organized by the Drexel University IEEE student chapter, Dragon Hacks challenges participants to push their limits, collaborate with like-minded individuals, and showcase their creativity, innovation, and problem-solving skills in a fun and fast-paced environment.
        </p>
        <ul className="text-neutral-400 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          <li>24 hours of non-stop hacking </li>
          <li>Open to all skill levels</li>
          <li>Exciting prizes and swag</li>
          <li>Workshops and mentorship</li>
        </ul>

        <ul className="text-neutral-400 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          <li>📅 Date: April </li>
          <li>📍 Location: Bossone Engineering Building, Drexel</li>
        </ul>

      </div>
    </div>
    <Sponsors />
      <Faq />

    </div>
    </FloatingNavbar>
  );
}



const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
