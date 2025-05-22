import { profile } from "@/data/profile";

export function Intro() {
  return (
    <div className="h-[40rem] w-full overflow-hidden relative">
      <div className="flex items-center justify-center flex-col">
        <h1 className="mt-32 text-primary text-center font-bold uppercase tracking-widest text-6xl">
          {profile.role}
        </h1>
        <h2 className="text-6xl">{profile.name}</h2>
        <div className="absolute bottom-0 h-[18rem] w-[35rem] bg-primary rounded-t-full z-0" />
        <img
          className="h-[25rem] absolute bottom-0 z-10"
          src={profile.image}
          alt=""
        />
      </div>
    </div>
  );
}
