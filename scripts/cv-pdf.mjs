// Génère public/CV-Mattias-Mathevon.pdf à partir de la page /cv.
// Usage : npm run cv:pdf (build, puis rendu de /cv par Google Chrome via playwright-core).
// Sans Google Chrome : npx playwright-core install chromium, puis relancer.
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
import { chromium } from "playwright-core";

const PORT = process.env.CV_PORT ?? "3999";
const BASE = `http://localhost:${PORT}`;
const OUT = "public/CV-Mattias-Mathevon.pdf";

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", PORT], { stdio: "ignore" });

try {
  let ready = false;
  for (let i = 0; i < 60 && !ready; i++) {
    try {
      ready = (await fetch(`${BASE}/cv`)).ok;
    } catch {
      // serveur pas encore prêt
    }
    if (!ready) await wait(500);
  }
  if (!ready) throw new Error("Le serveur Next ne répond pas : lancez d'abord `npm run build`.");

  const browser = await chromium.launch({ channel: "chrome" }).catch(() => chromium.launch());
  const page = await browser.newPage();
  await page.goto(`${BASE}/cv`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: OUT, format: "A4", printBackground: true, preferCSSPageSize: true });
  await browser.close();

  const pages = (readFileSync(OUT, "latin1").match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
  console.log(`CV généré : ${OUT} (${pages} page${pages > 1 ? "s" : ""})`);
  if (pages !== 1) {
    console.error("Attention : le CV ne tient plus sur une page A4. Raccourcir un texte dans src/data/profile.ts.");
    process.exitCode = 1;
  }
} finally {
  server.kill();
}
