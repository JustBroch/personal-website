import React from "react";
import { Careers4 } from "../components/careers4";
import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";

export default function CareersPage() {
  return (
    <>
      <Navbar1 />
      <main className="px-6 py-12 max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold">Work Experience</h1>
        </section>

        <section className="space-y-12">
          {/* NBIM */}
          <div>
            <h2 className="text-2xl font-semibold">Summer Intern, Foreign Exchange and Quantitative Trading</h2>
            <p className="text-muted-foreground">Norges Bank Investment Management (NBIM) — Oslo</p>
            <p className="text-sm text-muted-foreground mb-2">June 2025 –</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>
                Working on optimal trading strategies for currencies, interest rates, and equity indices using regime-aware models in Python.
              </li>
              <li>
                Collaborating with FX and Quant teams to generalize and apply results across asset classes.
              </li>
            </ul>
          </div>

          {/* EYD */}
          <div>
            <h2 className="text-2xl font-semibold">Business Developer</h2>
            <p className="text-muted-foreground">EYD — Trondheim</p>
            <p className="text-sm text-muted-foreground mb-2">June 2023 – July 2024</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Contributed to privacy vocabulary development for language models.</li>
              <li>Built and maintained website in Hubspot, supported CRM and marketing efforts.</li>
            </ul>
          </div>

          {/* Army */}
          <div>
            <h2 className="text-2xl font-semibold">Private (Grenadier)</h2>
            <p className="text-muted-foreground">Norwegian Army, Artillery Battalion — Setermoen</p>
            <p className="text-sm text-muted-foreground mb-2">Jan 2019 – July 2019</p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li>Challenged collaboration skills under highly demanding conditions.</li>
            </ul>
          </div>
        </section>

        {/* Optional: Stillingsliste */}
        <section className="mt-24">
          <Careers4 />
        </section>
      </main>
      <Footer2 />
    </>
  );
}
