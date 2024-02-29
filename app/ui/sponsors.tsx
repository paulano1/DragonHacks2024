import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Sponsors() {
  return (
    <div className="bg-black">
     <motion.h1
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  >
   Our proud sponsors
  </motion.h1>
    <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
              <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
          ))}
      </BentoGrid></div>
  );
}
const IEEE = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
        src="https://1000logos.net/wp-content/uploads/2019/03/IEEE-Logo.jpg"
        alt="placeholder"
        className="rounded-xl"
        />

  </div>
);
const Pennoni = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyctJADNVv7KeYGcdNPkwFY9xqKZvmUg8izgyHeHUaQpdFLPZuya-ywvhT8CxIPS00_M&usqp=CAU"
        alt="placeholder"
        className="rounded-xl"
        />

  </div>
);

const CollegeOfEngineering = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img
        src="https://drexel.edu/~/media/Images/engineering/news/0-news.ashx?h=400&la=en&w=600&hash=7066625FCD924D63A0DC6C92D331CD31970F3B26"
        alt="placeholder"
        className="rounded-xl"
        />

  </div>
);

const items = [
  {
    title: "IEEE Philadelphia Section",
    description: "",
    header: <IEEE />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Drexel Pennoni Honors College",
    header: <Pennoni />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: "Drexel College of Engineering",
    header: <CollegeOfEngineering/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  }
];
