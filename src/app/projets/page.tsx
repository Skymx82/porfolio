import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projets · Mattias Mathevon",
  description: "AutoSoft, SmileTex, Odyssée Sucrée et Tolarys : des projets vérifiables, avec une capture réelle et un lien qui fonctionne.",
};

export default function ProjetsPage() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <Projects asPage />
      </main>
      <Footer />
    </div>
  );
}
