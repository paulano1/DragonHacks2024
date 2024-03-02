import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from "react";
import { LampContainer } from "./lamp";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <LampContainer>
    <Accordion type="single" collapsible className="w-full text-white max-w-3xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a Hackathon?</AccordionTrigger>
        <AccordionContent>
        A hackathon is where you turn your crazy ideas into real projects. At DragonHacks, 
        for 24 hours in April on Drexel&apos;s campus, you&apos;ll 
        be learning and building in an energetic environment with people as
         passionate as you are! We have some epic prizes, world-renowned guest speakers, incredible mentors, 
         and deeply technical workshops and fun activities throughout the event. Basically,
          you take care of hacking and we&apos;ll take care of you!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Who can come?</AccordionTrigger>
        <AccordionContent>
        DragonHacks applications are open to any enrolled college student (undergrad or grad) from all over the world. All current Drexel students that register by appropriate deadlines will be guaranteed admission.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What does it cost?</AccordionTrigger>
        <AccordionContent>
          DragonHacks  is free for all admitted hackers! It&apos;s our pleasure to bring our virtual workshops, swag, and prizes to our hackers without any cost on your end. We&apos;re committed to making DragonHacks accessible!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What is the DragonHacks code of conduct?</AccordionTrigger>
        <AccordionContent>
        Dragon hacks abides by the MLH Code of Conduct, and the Drexel code of conduct. Every Dragon Hacks applicant must agree to this Code of Conduct to be considered for admission. Dragon Hacks is a safe place where everyone is welcome ❤️.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>What if I don&apos;t know how to code?</AccordionTrigger>
        <AccordionContent>
        Dragon Hacks is the perfect time and place to learn. We provide starter code “hack packs” on our github as well as beginner-friendly workshops and mentors to help you build something you can be proud of.        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>What if I don&apos;t have a team or idea?</AccordionTrigger>
        <AccordionContent>
        Many of our hackers don&apos;t have a team coming in, and find them at the event!  We have a ton of team-forming activities to help you find teammates and idea brainstorming sessions for all our tracks.        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
    </LampContainer>
  );
}
