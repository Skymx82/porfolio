// Étude de cas AutoSoft. Faits : uniquement ceux validés par Mattias (section AutoSoft du brief).
// « problem » et « learned » : rédigés à sa demande à partir de ces seuls faits, à relire par lui.

export const autosoft = {
  name: "AutoSoft",
  tagline: "Logiciel de gestion (ERP) pour les auto-écoles, en production.",
  url: "https://www.auto-soft.fr",
  stack: ["Next.js", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS", "shadcn/ui"],

  problem:
    "Une auto-école, ce sont des élèves à suivre, des moniteurs à planifier, des contrats à faire signer, des paiements à encaisser et des dossiers à déposer auprès des services de l'État. AutoSoft réunit tout cela dans un seul logiciel, pour plusieurs écoles à la fois, sans que leurs données se croisent.",

  built: [
    "Gestion des élèves, planning des moniteurs, contrats, encaissements, caisse et dossiers administratifs.",
    "Signature électronique des contrats, sur tablette ou sur papier.",
    "Dépôt des dossiers à l'ANTS intégré, en phase de qualification.",
    "RdvPermis et Livret numérique intégrés et testés en recette.",
    "RGPD : export des données, anonymisation, registre.",
  ],

  architecture: [
    {
      title: "Application",
      text: "Next.js et TypeScript, interface en Tailwind CSS et shadcn/ui.",
    },
    {
      title: "Données",
      text: "Supabase (PostgreSQL). Chaque école ne voit que ses données : l'isolation est appliquée dans la base, par Row Level Security, avec des droits par rôle.",
    },
    {
      title: "Intégrations administratives",
      text: "Dépôt des dossiers à l'ANTS (en qualification), RdvPermis et Livret numérique (testés en recette).",
    },
  ],

  ci: ["Audit des dépendances", "Vérification des types", "Analyse statique", "Tests", "Build"],

  figures: [
    { value: "2 600+", label: "tests automatisés" },
    { value: "2", label: "auto-écoles en conditions réelles" },
    { value: "5", label: "contrôles bloquants avant chaque version" },
    { value: "3", label: "intégrations administratives : ANTS, RdvPermis, Livret numérique" },
  ],

  learned: [
    "Les tests sont ce qui me laisse modifier le code sans peur. Avec plus de 2 600 tests et une intégration continue qui refuse toute version en échec, une régression se voit avant d'arriver chez une école.",
    "La sécurité se décide dans la base. Isoler les données de chaque école par Row Level Security protège même quand le code applicatif se trompe.",
    "Les intégrations administratives se préparent tôt : qualification ANTS, recettes RdvPermis et Livret numérique, ces étapes ont leur propre calendrier.",
    "Des utilisateurs réels changent les priorités. Deux auto-écoles l'utilisent en conditions réelles : ce qui compte, c'est ce qui leur sert au quotidien.",
    "Ce qui me manque : quelqu'un de plus expérimenté qui relit mon code. C'est ce que je viens chercher en stage.",
  ],

  images: {
    planning: {
      src: "/projet/autosoft/planning.png",
      alt: "Planning de la semaine dans AutoSoft : les leçons de chaque moniteur sur un seul écran",
      width: 2442,
      height: 1312,
    },
    mobile: {
      src: "/projet/autosoft/espace-moniteur.png",
      alt: "Espace moniteur AutoSoft affiché sur un téléphone",
      width: 438,
      height: 932,
    },
  },
} as const;
