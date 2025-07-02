export function Card({
  title,
  description,
  technologies,
  socialMedia,
}: {
  title: string;
  description: string;
  technologies: [];
  socialMedia: string;
}) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col border rounded-lg p-4 gap-4 flex-1 bg-background">
        <h4 className="uppercase text-2xl font-bold">{title}</h4>
        <p className="flex-1">{description}</p>
        <button
          onClick={() => window.open(socialMedia)}
          className="bg-white text-black p-2 rounded-md hover:bg-[#FFFFFFEF] transition-all cursor-pointer"
        >
          Instagram
        </button>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((item, i) => (
            <span
              className="border border-white px-2 py-1 rounded-full text-sm"
              key={`tech-${i}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
