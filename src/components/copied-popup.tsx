export function CopiedPopup({
  show,
  onClick,
}: {
  show: boolean;
  onClick: () => void;
}) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 fade-in right-4 px-4 py-2 bg-black text-white rounded shadow-md z-50 transition-opacity duration-300"
    >
      Copiado!
    </button>
  );
}
