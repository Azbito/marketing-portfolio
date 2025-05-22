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
    <div className="bg-background w-80">
      <div className="w-full border rounded-lg p-4 flex flex-col gap-4">
        <h4 className="uppercase font-bold">{title}</h4>
        <p>{description}</p>
        <div className="flex gap-4 flex-wrap">
          {technologies.map((item, i) => (
            <span
              className="border border-white px-2 py-1 rounded-full "
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
