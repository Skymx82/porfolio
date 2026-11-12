// Repères pour une information manquante : visibles en développement et sur les aperçus Vercel,
// jamais sur le site en production. NODE_ENV et NEXT_PUBLIC_VERCEL_ENV sont remplacés au build,
// donc le serveur et le navigateur affichent la même chose (pas d'écart d'hydratation).
export const SHOW_TODOS =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

export default function Todo({ children, kind = "À COMPLÉTER" }: { children: React.ReactNode; kind?: "À COMPLÉTER" | "CAPTURE" }) {
  if (!SHOW_TODOS) return null;
  return (
    <span className="inline-block rounded-md border border-amber-400 bg-amber-50 px-2 py-0.5 text-sm font-semibold text-amber-900">
      [{kind} : {children}]
    </span>
  );
}
