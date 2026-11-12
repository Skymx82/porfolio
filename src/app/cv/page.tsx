import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import Todo, { SHOW_TODOS } from "@/components/Todo";
import {
  about,
  drivingLicense,
  education,
  experiences,
  internship,
  languages,
  profile,
  site,
  skills,
  sport,
} from "@/data/profile";

export const metadata: Metadata = {
  title: "CV · Mattias Mathevon",
  description: "CV de Mattias Mathevon, développeur full-stack en L3 MIAGE, à la recherche d'un stage de 3 mois à Toulouse (mai à août 2027).",
};

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const SideTitle = ({ children }: { children: string }) => (
  <h2 className="mb-1.5 border-b border-gray-300 pb-0.5 text-[8.5pt] font-bold uppercase tracking-widest text-purple-900">{children}</h2>
);

// Une page A4 : à l'écran, une feuille ; à l'impression, la page elle-même (voir @page dans globals.css).
export default function CvPage() {
  return (
    <div className="min-h-screen bg-gray-200 py-8 print:bg-white print:p-0">
      <div className="mx-auto mb-6 flex max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4 print:hidden">
        <Link href="/" className="text-sm font-semibold text-purple-800 underline underline-offset-4">
          Retour au site
        </Link>
        <div className="flex gap-3">
          <PrintButton />
          <a
            href={profile.cvUrl}
            download
            className="rounded-full gradient-bg px-5 py-2 text-sm font-semibold text-white"
          >
            Télécharger le PDF
          </a>
        </div>
      </div>

      <article className="cv-sheet mx-auto bg-white text-[9pt] leading-snug text-gray-900 shadow-xl print:shadow-none">
        <header className="flex items-start justify-between gap-6 border-b-2 border-gray-900 pb-3">
          <div>
            <h1 className="text-[22pt] font-bold leading-none tracking-tight">{profile.name}</h1>
            <p className="mt-1.5 text-[11pt] font-semibold text-purple-900">{profile.role} · L3 MIAGE, Université Toulouse Capitole</p>
            <p className="mt-1.5 text-[10pt] font-semibold">{internship.sentence}</p>
            <ul className="mt-1.5 flex flex-wrap gap-x-2 text-[8.5pt] text-gray-700">
              {[profile.email, bare(profile.links.linkedin), bare(profile.links.github), bare(site.url), drivingLicense].map((item, i, all) => (
                <li key={item} className="whitespace-nowrap">
                  {item}
                  {i < all.length - 1 && <span aria-hidden="true" className="ml-2">·</span>}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={profile.photo}
            alt={`Portrait de ${profile.name}`}
            width={1024}
            height={1024}
            sizes="96px"
            loading="eager"
            className="h-[24mm] w-[24mm] flex-none rounded-full object-cover"
          />
        </header>

        <p className="mt-3 text-gray-800">{about.join(" ")}</p>

        <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_58mm]">
          <section>
            <SideTitle>Expériences</SideTitle>
            <div className="space-y-2">
              {experiences.map((exp) => (
                <div key={exp.id} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-bold">
                      {exp.role} · <span className="text-purple-900">{exp.company}</span>
                    </h3>
                    <p className="flex-none text-[8pt] text-gray-700">{exp.period}</p>
                  </div>
                  <p className="text-[8pt] text-gray-700">
                    {[exp.duration, exp.location].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-0.5 text-gray-800">{exp.description}</p>
                  {exp.todo && SHOW_TODOS && (
                    <p className="mt-0.5">
                      <Todo>{exp.todo}</Todo>
                    </p>
                  )}
                  <p className="mt-0.5 text-[8pt] text-gray-700">{exp.technologies.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-3">
            <section>
              <SideTitle>Formation</SideTitle>
              <div className="space-y-1.5">
                {education.map((item) => (
                  <div key={item.id}>
                    <p className="font-bold">{item.degree}</p>
                    <p>{item.school}</p>
                    <p className="text-[8pt] text-gray-700">{item.period}</p>
                    {item.details && <p className="mt-0.5 text-[8pt] text-gray-800">{item.details}</p>}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SideTitle>En production</SideTitle>
              <p>{skills.production.join(" · ")}</p>
            </section>

            <section>
              <SideTitle>Utilisé aussi</SideTitle>
              <p>{skills.alsoUsed.join(" · ")}</p>
            </section>

            <section>
              <SideTitle>Langues</SideTitle>
              <ul className="space-y-0.5">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </section>

            <section>
              <SideTitle>Sport et vie étudiante</SideTitle>
              <ul className="space-y-0.5">
                {[sport.cvLine, ...sport.extras].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
