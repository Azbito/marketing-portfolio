import { profile } from "@/data/profile";

export function About() {
  return (
    <div className="mt-32 shadow-sm border-black border p-4 rounded-lg">
      <h3 className="text-black text-3xl lowercase font-bold">Sobre.</h3>
      <p className="text-black">
        {profile.about}
        <span className="relative inline-block mx-1">
          <span className="relative z-10  px-1 text-black font-bold">
            há {profile.years} anos de experiência
          </span>
          <span className="absolute left-0 right-0 bottom-1 h-[7px] bg-primary rounded-md z-0" />
        </span>
      </p>
    </div>
  );
}
