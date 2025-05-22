export function Card() {
  return (
    <div className="bg-background w-80">
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
  );
}
