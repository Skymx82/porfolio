// Repère visible pour une information manquante. À retirer dès que l'information est fournie.
export default function Todo({ children, kind = "À COMPLÉTER" }: { children: React.ReactNode; kind?: "À COMPLÉTER" | "CAPTURE" }) {
  return (
    <span className="inline-block rounded-md border border-amber-400 bg-amber-50 px-2 py-0.5 text-sm font-semibold text-amber-900">
      [{kind} : {children}]
    </span>
  );
}
