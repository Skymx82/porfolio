import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Todo, { SHOW_TODOS } from "@/components/Todo";
import { ExternalLinkIcon, MailIcon } from "@/components/icons";
import { autosoft } from "@/data/autosoft";
import { autosoftTimeSpent, mailtoHref } from "@/data/profile";

export const metadata: Metadata = {
  title: "AutoSoft, étude de cas · Mattias Mathevon",
  description:
    "Le logiciel de gestion pour auto-écoles que j'ai conçu, codé et mis en production : problème, fonctionnalités, architecture, chiffres et ce que j'en ai appris.",
};

const sectionTitle = "text-2xl md:text-3xl font-bold text-black";

const CapturePlaceholder = ({ children }: { children: string }) => (
  <div className="flex min-h-40 items-center justify-center rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/50 p-6 text-center">
    <Todo kind="CAPTURE">{children}</Todo>
  </div>
);

export default function AutoSoftCaseStudy() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 pt-28 pb-20">
        <Link href="/#projets" className="text-sm font-semibold text-purple-800 underline underline-offset-4">
          Retour aux projets
        </Link>

        <header className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-700">Étude de cas</p>
          <h1 className="mt-2 text-5xl md:text-6xl font-bold tracking-tight text-black">{autosoft.name}</h1>
          <p className="mt-4 text-xl text-gray-800">{autosoft.tagline}</p>
          {(autosoftTimeSpent || SHOW_TODOS) && (
            <p className="mt-3 text-gray-700">
              {autosoftTimeSpent ?? <Todo>temps consacré aujourd&apos;hui à AutoSoft</Todo>}
            </p>
          )}
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
            {autosoft.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-gray-900 px-3 py-1 text-sm font-medium text-white">
                {tech}
              </li>
            ))}
          </ul>
        </header>

        <figure className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <Image
            src={autosoft.images.planning.src}
            alt={autosoft.images.planning.alt}
            width={autosoft.images.planning.width}
            height={autosoft.images.planning.height}
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
            className="h-auto w-full"
          />
          <figcaption className="bg-white px-4 py-3 text-sm text-gray-700">
            Le planning de la semaine : les leçons de chaque moniteur sur un seul écran.
          </figcaption>
        </figure>

        <section className="mt-16" aria-labelledby="probleme">
          <h2 id="probleme" className={sectionTitle}>Le problème</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-800">{autosoft.problem}</p>
        </section>

        <section className="mt-16" aria-labelledby="construit">
          <h2 id="construit" className={sectionTitle}>Ce que j&apos;ai construit</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_220px] md:items-start">
            <ul className="space-y-3">
              {autosoft.built.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-gray-800">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 flex-none rounded-full gradient-bg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <figure className="mx-auto w-48 md:w-full">
              <Image
                src={autosoft.images.mobile.src}
                alt={autosoft.images.mobile.alt}
                width={autosoft.images.mobile.width}
                height={autosoft.images.mobile.height}
                sizes="220px"
                className="h-auto w-full rounded-2xl border border-gray-200 shadow-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-700">L&apos;espace moniteur sur téléphone.</figcaption>
            </figure>
          </div>
          {SHOW_TODOS && (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <CapturePlaceholder>signature d&apos;un contrat sur tablette</CapturePlaceholder>
              <CapturePlaceholder>encaissements et caisse d&apos;une école</CapturePlaceholder>
            </div>
          )}
        </section>

        <section className="mt-16" aria-labelledby="architecture">
          <h2 id="architecture" className={sectionTitle}>L&apos;architecture</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {autosoft.architecture.map((block) => (
              <div key={block.title} className="rounded-xl border-2 border-gray-900 bg-white p-5">
                <h3 className="font-bold text-black">{block.title}</h3>
                <p className="mt-2 text-gray-800 leading-relaxed">{block.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-gray-900 p-5 text-white">
            <h3 className="font-bold">Intégration continue : aucune version ne passe si une étape échoue</h3>
            <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              {autosoft.ci.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-gray-400">→</span>}
                  <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/30">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="chiffres">
          <h2 id="chiffres" className={sectionTitle}>Les chiffres</h2>
          <dl className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {autosoft.figures.map((figure) => (
              <div key={figure.label} className="flex flex-col rounded-xl bg-white p-5 shadow-lg ring-1 ring-gray-200">
                <dt className="text-sm text-gray-700">{figure.label}</dt>
                <dd className="order-first text-4xl font-bold gradient-text">{figure.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16" aria-labelledby="appris">
          <h2 id="appris" className={sectionTitle}>Ce que j&apos;en ai appris</h2>
          <ul className="mt-6 space-y-4">
            {autosoft.learned.map((item) => (
              <li key={item} className="rounded-xl border-l-4 border-purple-700 bg-white p-5 leading-relaxed text-gray-800 shadow">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-2xl border-2 border-gray-900 p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black">AutoSoft est en ligne</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={autosoft.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
              Voir auto-soft.fr
              <ExternalLinkIcon />
              <span className="sr-only">(nouvel onglet)</span>
            </a>
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-900 px-7 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              <MailIcon />
              Me contacter
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
