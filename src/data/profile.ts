// Source unique des informations de profil : le site les lit ici (et le CV les lira aussi).
// Dates, lieux et intitulés : alignés sur LinkedIn. Ne rien ajouter qui ne soit pas vérifiable.

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  description: string;
  technologies: string[];
  link?: { label: string; href: string };
  /** Information manquante, affichée comme repère [À COMPLÉTER : …] */
  todo?: string;
};

export type Education = {
  id: string;
  period: string;
  degree: string;
  school: string;
  details?: string;
};

export const profile = {
  name: "Mattias Mathevon",
  initials: "MM",
  role: "Développeur full-stack",
  email: "mattias.mathevon@gmail.com",
  phone: "+33 6 79 33 68 12",
  location: "Toulouse, France",
  photo: "/image/pp1.PNG",
  cvUrl: "/CV.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/mattias-mathevon/",
    github: "https://github.com/Skymx82",
    autosoft: "https://www.auto-soft.fr",
  },
} as const;

export const site = {
  url: "https://portfolio-mattias.vercel.app",
  title: "Mattias Mathevon · développeur full-stack",
  description:
    "Développeur full-stack (Next.js, TypeScript, PostgreSQL). J'ai conçu et mis en production un ERP pour auto-écoles. Je cherche un stage de 3 mois à Toulouse, de mai à août 2027.",
  ogLine: { before: "Stage mai", after: "août 2027 · Toulouse" },
} as const;

export const hero = {
  title: "Je construis des logiciels qui tournent en production.",
  subtitle: ["Développeur full-stack", "L3 MIAGE", "Stage de 3 mois, mai → août 2027, Toulouse"],
} as const;

export const internship = {
  sentence: "Je cherche un stage de 3 mois, du 17 mai au 16 août 2027, à Toulouse.",
  mailSubject: "Stage de 3 mois (mai à août 2027)",
} as const;

export const about = [
  "J'ai conçu, codé et mis en production un logiciel de gestion pour les auto-écoles : élèves, plannings des moniteurs, contrats, encaissements et démarches auprès des services de l'État. Plus de 2 600 tests automatisés, des données isolées entre chaque école, et deux auto-écoles l'ont utilisé en conditions réelles.",
  "Aujourd'hui en L3 MIAGE à l'Université Toulouse Capitole, je veux apprendre à construire au sein d'une vraie équipe tech, là où quelqu'un de plus expérimenté relit mon code, sur un produit qui touche au réel.",
] as const;

export const lookingFor = [
  "Un stage de 3 mois, du 17 mai au 16 août 2027, à Toulouse ou dans l'agglomération.",
  "Une équipe où quelqu'un de plus expérimenté relit mon code.",
  "Un produit qui touche au réel : aéro, spatial, énergie, robotique, climat.",
  "Petite ou grande structure, c'est la mission qui compte.",
] as const;

export const sport = {
  // Texte d'origine conservé tel quel.
  basketball:
    "J'ai eu un parcours sportif riche dans le basketball, ayant évolué à haut niveau en National 3 avec JS Cugnaux. Avant cela, j'ai joué en U21 R1 à JS Cugnaux, en U21 R2 au Vazerac Sud Quercy Basket, et en U18 Occitanie au Montauban Basket Club.",
  // En attente de confirmation (question n° 3) : texte d'origine inchangé.
  boxing:
    "Aujourd'hui, je pratique la boxe anglaise au Boxing Center, ce qui me permet de maintenir une discipline rigoureuse et de développer ma résistance mentale.",
  extras: [
    "Coach d'une équipe U11 (Vazerac Sud Quercy Basket, 2023-2024)",
    "Sport universitaire : HYROX",
    "Membre d'AMTC, le BDE de la MIAGE",
  ],
  tags: ["Basketball", "National 3", "Boxe anglaise", "HYROX"],
} as const;

export const experiences: Experience[] = [
  {
    id: "autosoft",
    company: "AutoSoft",
    role: "Fondateur & développeur full-stack",
    period: "Depuis septembre 2025",
    location: "Toulouse",
    description:
      "Logiciel de gestion (ERP) pour les auto-écoles : élèves, planning des moniteurs, contrats, encaissements, caisse, dossiers administratifs. Données isolées entre chaque école au niveau de la base (Row Level Security), plus de 2 600 tests automatisés et une intégration continue qui bloque toute version en échec. En production, utilisé par deux auto-écoles en conditions réelles.",
    technologies: ["Next.js", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "shadcn/ui"],
    link: { label: "auto-soft.fr", href: "https://www.auto-soft.fr" },
    todo: "temps consacré aujourd'hui à AutoSoft",
  },
  {
    id: "odyssee-sucree",
    company: "Odyssée Sucrée",
    role: "Stagiaire développeur web",
    period: "Mai à juin 2025",
    duration: "2 mois",
    location: "Toulouse",
    description:
      "Application web de gestion des stocks et de la comptabilité pour une pâtisserie qui vend sur les marchés gourmands, créée de zéro : stocks en temps réel par marché ou par événement, suivi des recettes et des dépenses, tableau de bord des ventes, authentification avec Supabase.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    id: "lycee-bourdelle",
    company: "Lycée Antoine Bourdelle",
    role: "Stagiaire administration système",
    period: "Mai à juin 2024",
    duration: "2 mois",
    location: "Montauban",
    description:
      "Installation et configuration de serveurs Microsoft pour la gestion centralisée des utilisateurs et des ressources.",
    technologies: ["Serveurs Microsoft", "Gestion des utilisateurs"],
  },
  {
    id: "voltier",
    company: "Voltier Electronics",
    role: "Stagiaire développeur (Erasmus)",
    period: "Janvier à février 2024",
    duration: "2 mois",
    location: "Saint-Jacques-de-Compostelle, Espagne",
    description:
      "Script AutoIt qui automatise la mise en ligne des articles du site WordPress ; correction et optimisation de requêtes SQL ; contribution au développement d'un plugin WordPress.",
    technologies: ["AutoIt", "WordPress", "SQL", "PHP"],
  },
  {
    id: "3r",
    company: "3R (Recherches et Réalisations Remy)",
    role: "Stagiaire développeur",
    period: "Mars à avril 2023",
    duration: "2 mois",
    location: "Montauban",
    description:
      "Scripts C# qui automatisent des tâches internes ; script serveur qui vérifie l'état du DNS et envoie un rapport d'audit par e-mail ; câblage de sondes pour des essais sur béton.",
    technologies: ["C#", "Scripting", "Administration serveur"],
  },
  // Absente de LinkedIn : en attente de décision (question n° 4), texte d'origine inchangé.
  {
    id: "maf-agrorobotic",
    company: "Maf Agrorobotic",
    role: "Technicien",
    period: "2022 (8 semaines)",
    location: "Montauban, France",
    description:
      "Monter et câbler des unités centrales. Configurer des serveurs et des PCs. Faire des connexions inter-serveur. Soudure sur carte mère.",
    technologies: ["Assemblage PC", "Configuration serveur", "Soudure", "Réseaux"],
  },
];

export const education: Education[] = [
  {
    id: "miage",
    period: "2026-2027",
    degree: "Licence 3 MIASHS, parcours MIAGE",
    school: "Université Toulouse Capitole",
    details:
      "Systèmes d'information, bases de données relationnelles et NoSQL, Python, développement web, gestion de projet, statistiques.",
  },
  {
    id: "bts-sio",
    period: "2024-2026",
    degree: "BTS SIO, option SLAM (développement)",
    school: "Lycée Henri Matisse, Cugnaux",
  },
];

export const skills = {
  production: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Supabase",
    "Tests automatisés",
    "Intégration continue",
  ],
  alsoUsed: ["Node.js", "Python", "SQL", "React Native", "Firebase", "Stripe", "PHP", "C#", "Git"],
} as const;

export const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(internship.mailSubject)}`;
