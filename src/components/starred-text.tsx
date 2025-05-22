export function StarredText({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-4 h-4 mx-2 bg-primary [clip-path:polygon(50%_0%,_61%_35%,_100%_50%,_61%_65%,_50%_100%,_39%_65%,_0%_50%,_39%_35%)] rounded-full shadow-lg"></div>
      <b>{label}</b>
    </div>
  );
}
