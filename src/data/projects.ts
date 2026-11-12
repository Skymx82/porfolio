// Projets affichés : uniquement ceux qu'on peut vérifier (capture réelle et lien qui répond).

export type ProjectLink = { label: string; href: string; external?: boolean };

export type Project = {
  slug: string;
  title: string;
  context: string;
  /** Une phrase sur le problème résolu */
  problem: string;
  note?: string;
  stack: string[];
  image: { src: string; alt: string; width: number; height: number };
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "autosoft",
    title: "AutoSoft",
    context: "Projet principal · en production",
    problem:
      "Un seul logiciel pour gérer une auto-école : élèves, planning des moniteurs, contrats, encaissements, caisse et dossiers administratifs.",
    stack: ["Next.js", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "shadcn/ui"],
    image: {
      src: "/projet/autosoft/planning.png",
      alt: "Planning de la semaine dans AutoSoft : les leçons de chaque moniteur sur un seul écran",
      width: 2442,
      height: 1312,
    },
    links: [
      { label: "Lire l'étude de cas", href: "/projets/autosoft" },
      { label: "auto-soft.fr", href: "https://www.auto-soft.fr", external: true },
    ],
  },
  {
    slug: "smiletex",
    title: "SmileTex",
    context: "Site e-commerce · en ligne",
    problem:
      "Permettre aux clients de personnaliser un vêtement avec leurs textes et leurs photos, puis de le commander et de le payer en ligne.",
    stack: ["Next.js", "Supabase", "Stripe", "Fabric.js", "Tailwind CSS"],
    image: {
      src: "/projet/smiletex/smiletex.png",
      alt: "Page d'accueil de SmileTex, boutique de vêtements personnalisables",
      width: 2396,
      height: 1278,
    },
    links: [{ label: "smiletex.fr", href: "https://www.smiletex.fr", external: true }],
  },
  {
    slug: "odyssee-sucree",
    title: "Odyssée Sucrée",
    context: "Stage · mai à juin 2025",
    problem:
      "Suivre en temps réel les stocks par marché ou par événement, les recettes et les dépenses d'une pâtisserie qui vend sur les marchés gourmands.",
    note: "La capture montre le site public ; l'outil de gestion est dans l'espace d'administration, privé.",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
    image: {
      src: "/projet/odyssee-sucree/accueil.jpg",
      alt: "Page d'accueil du site public d'Odyssée Sucrée",
      width: 2160,
      height: 1152,
    },
    links: [{ label: "Voir le site", href: "https://odysseesucree.vercel.app", external: true }],
  },
  {
    slug: "tolarys",
    title: "Tolarys",
    context: "Agence web · activité arrêtée",
    problem:
      "Aider les entreprises à rendre leur site conforme aux normes d'accessibilité RGAA et EN 301 549.",
    note: "Ma première expérience d'entrepreneur, aujourd'hui terminée. Le site reste en ligne en archive.",
    stack: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    image: {
      src: "/projet/Tolarys/TolarysV2.png",
      alt: "Page d'accueil de Tolarys : audit d'accessibilité gratuit",
      width: 2444,
      height: 1278,
    },
    links: [{ label: "Voir le site (archive)", href: "https://tolarys-toulouse.vercel.app", external: true }],
  },
];
