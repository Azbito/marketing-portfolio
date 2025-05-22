export function Intro() {
  return (
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
  );
}
