export function Card({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: [];
}) {
  return (
    <div className="bg-background w-100 flex flex-col">
      <div className="flex flex-col border rounded-lg p-4 gap-4 flex-1">
        <h4 className="uppercase text-2xl font-bold">{title}</h4>
        <p className="flex-1">{description}</p>
        <div className="flex gap-4 flex-wrap">
          {technologies.map((item, i) => (
            <span
              className="border border-white px-2 py-1 rounded-full"
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
