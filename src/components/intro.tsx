import { profile } from "@/data/profile";
import Image, { StaticImageData } from "next/image";

export function Intro() {
  return (
    <div className="h-[40rem] w-full overflow-hidden relative">
      <div className="flex items-center justify-center flex-col">
        <h1 className="mt-32 max-[860px]:mt-16 text-primary text-center font-bold uppercase tracking-widest text-6xl max-[460px]:text-2xl">
          {profile.role}
        </h1>
        <h2 className="text-6xl">{profile.name}</h2>
        <div className="absolute bottom-0 h-[18rem] w-[35rem] bg-primary rounded-t-full z-0" />
        <div className="absolute w-130 h-130 left-[50%] -translate-x-[50%] bottom-0">
          <Image
            className="relative z-10"
            layout="fill"
            objectFit="contain"
            src={profile.image as StaticImageData}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
