"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border-2 border-gray-900 px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white"
    >
      Imprimer
    </button>
  );
}
