import { About } from "@/components/about";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Intro } from "@/components/intro";
import { Keywords } from "@/components/keywords";
import { StarredText } from "@/components/starred-text";

export default function Home() {
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
      <div className="flex flex-wrap gap-8 items-center justify-center pb-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
      <h3 className="uppercase font-bold text-6xl mb-16">Habilidades</h3>
      <div className="flex flex-wrap px-8 items-center justify-center pb-16">
        {Array.from({ length: 16 }).map((_, index) => (
          <StarredText label="habilidade" />
        ))}
      </div>
      <div className="mix-blend-difference translate-y-7">
        <h3 className="uppercase font-bold text-6xl">contato</h3>
      </div>
      <div className="bg-white w-screen">
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          {Array.from({ length: 3 }).map((_, index) => (
            <Button key={index}>label</Button>
          ))}
        </div>
      </div>
    </div>
  );
}
