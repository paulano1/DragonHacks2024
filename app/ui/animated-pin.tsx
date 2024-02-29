import React from "react";
import { PinContainer } from "./3D-pin";

const content = [
  {
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    href: "https://twitter.com/mannupaaji",
  },
  {
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components.",
    href: "https://twitter.com/mannupaaji",
  },
  // Add more pins as needed
];

export function Sponsors() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {content.map((item, index) => (
        <AnimatedPin key={index} {...item} />
      ))}
    </div>
  );
}

export function AnimatedPin({ title, description, href } : { title: string, description: string, href: string }) {
  return (
    <div className="flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
          <h3 className="!pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
