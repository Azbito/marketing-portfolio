"use client";
import { About } from "@/components/about";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CopiedPopup } from "@/components/copied-popup";
import { Intro } from "@/components/intro";
import { Keywords } from "@/components/keywords";
import { StarredText } from "@/components/starred-text";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { copyToClipboard } from "@/utils/clipboard";
import { useCallback, useState } from "react";

export default function Home() {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const handleButtonClick = useCallback(
    (item: { label: string; url: string }) => {
      if (item.label === "LinkedIn") {
        window.open(profile.linkedIn, profile.portfolio);
        return;
      }

      copyToClipboard(item.url);
      setShowPopUp(true);
    },
    []
  );

  return (
    <div className="flex items-center justify-center flex-col overflow-x-hidden">
      <Intro />

      <div className="bg-foreground p-16 max-w-screen w-full flex items-center justify-start flex-col relative">
        <Keywords />
        <About />
      </div>
      <div className="mix-blend-difference -translate-y-7">
        <h3 className="uppercase font-bold text-6xl">projetos</h3>
      </div>
      <div className="flex flex-wrap gap-8 h-full items-stretch justify-center pb-16">
        {projects.map((item, index) => (
          <Card
            title={item.title}
            description={item.description}
            technologies={item.technologies as []}
            key={`card-${index}`}
          />
        ))}
      </div>
      <h3 className="uppercase font-bold text-6xl mb-16">Habilidades</h3>
      <div className="flex flex-wrap px-8 items-center justify-center pb-16">
        {skills.map((item) => (
          <StarredText key={item} label={item} />
        ))}
      </div>
      <a className="my-12" href="/cv.pdf" download>
        <Button isDark={false}>Currículo</Button>
      </a>
      <div className="mix-blend-difference translate-y-7">
        <h3 className="uppercase font-bold text-6xl">contato</h3>
      </div>
      <div className="bg-white w-screen">
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          {profile.contacts.map((item) => (
            <Button onClick={() => handleButtonClick(item)} key={item.label}>
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      <CopiedPopup onClick={() => setShowPopUp(false)} show={showPopUp} />
    </div>
  );
}
