export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col overflow-x-hidden">
      <div className="h-[40rem] w-full overflow-hidden relative">
        <div className="flex items-center justify-center flex-col">
          <h1 className="mt-32 text-primary text-center font-bold uppercase tracking-widest text-6xl">
            Marketing & Growth
          </h1>
          <h2 className="text-6xl">Vitor Schultz</h2>
          <div className="absolute bottom-0 h-[18rem] w-[35rem] bg-primary rounded-t-full z-0" />
          <img
            className="h-[25rem] absolute bottom-0 z-10"
            src="https://pngimg.com/d/man_PNG6531.png"
            alt=""
          />

          <div className="w-fit py-1 px-4 rounded-full bg-foreground absolute left-[20vw] top-[20rem]">
            <h2 className="text-black font-bold">ADS</h2>
          </div>
          <div className="w-fit py-1 px-4 rounded-full bg-foreground absolute left-[10vw] top-[25rem]">
            <h2 className="text-black font-bold">Social Media</h2>
          </div>

          <div className="w-fit py-1 px-4 rounded-full bg-foreground absolute right-[20vw] top-[25rem]">
            <h2 className="text-black font-bold">ADS</h2>
          </div>
          <div className="w-fit py-1 px-4 rounded-full bg-foreground absolute right-[10vw] top-[30rem]">
            <h2 className="text-black font-bold">Social Media</h2>
          </div>
        </div>
      </div>

      <div className="bg-foreground p-16 max-w-screen w-full flex items-center justify-start flex-col relative">
        <div className="p-2 -rotate-3 z-20 top-0 absolute mix-blend-difference">
          <p className="whitespace-nowrap text-white font-bold tracking-widest text-xl">
            SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL
            SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL
            SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL
            SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL SKILL
          </p>
        </div>

        <div className="mt-32 shadow-sm border-black border p-4 rounded-lg">
          <h3 className="text-black text-3xl lowercase font-bold">Sobre.</h3>
          <p className="text-black">
            sobre o vitor sobre o vitor sobre o vitor sobre o vitor sobre o
            vitor sobre o vitor sobre o vitor sobre o vitor sobre o vitor sobre
            o vitor sobre o vitor sobre o vitor sobre o vitor sobre o vitor
            sobre o vitor sobre o vitor sobre o vitor sobre o vitor sobre o
            vitor sobre o vitor sobre o vitor sobre o vitor sobre o vitor sobre
            o vitor sobre o vitor sobre o vitor sobre o vitor
            <span className="relative inline-block mx-1">
              <span className="relative z-10  px-1 text-black font-bold">
                5 anos de experiência
              </span>
              <span className="absolute left-0 right-0 bottom-1 h-[7px] bg-primary rounded-md z-0" />
            </span>
          </p>
        </div>
      </div>
      <div className="mix-blend-difference -translate-y-7">
        <h3 className="uppercase font-bold text-6xl">projetos</h3>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center pb-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-background w-80">
            <div className="w-full border rounded-lg p-4 flex flex-col gap-4">
              <h4 className="uppercase font-bold">Nome do projeto</h4>
              <p>descrição do projeto</p>
              <div className="flex gap-4 flex-wrap">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    className="border border-white px-2 py-1 rounded-full "
                    key={i}
                  >
                    SEO
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="uppercase font-bold text-6xl mb-16">Habilidades</h3>
      <div className="flex flex-wrap px-8 items-center justify-center pb-16">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="w-4 h-4 mx-2 bg-primary [clip-path:polygon(50%_0%,_61%_35%,_100%_50%,_61%_65%,_50%_100%,_39%_65%,_0%_50%,_39%_35%)] rounded-full shadow-lg"></div>
            <b>Habilidade</b>
          </div>
        ))}
      </div>
      <div className="mix-blend-difference translate-y-7">
        <h3 className="uppercase font-bold text-6xl">contato</h3>
      </div>
      <div className="bg-white w-screen">
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              className="bg-black hover:bg-black/80 transition-all cursor-pointer rounded-md px-4 py-2"
              key={index}
            >
              label
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
