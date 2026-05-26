import React from "react";
import Image from "next/image";
import Card from "../composant/Card";

export default function InterneShipPage() {
  return (
    <main className="flex flex-col gap-10 pb-8">
      <header className="text-center px-2">
        <h1 className="text-3xl font-bold text-white drop-shadow mb-2">
          Internship — BlopX
        </h1>
        <p className="text-emerald-100 text-sm max-w-2xl mx-auto">
          End-of-study placement in industrial IT: automation for a 3D print-farm
          and Shopify e-commerce stack. Content reflects the TFE report and
          marketing analysis (workflow, stack, and growth levers).
        </p>
      </header>

      <div className="flex-1 grid md:grid-cols-2 gap-8 px-2 sm:px-0">
        <Card
          title="Context & objectives"
          content="BlopX operates as a print farm: many FDM machines, industrial
            repeatability, and a clear product story (useful everyday objects,
            European production, possible customization). My work centered on
            reducing manual, repetitive steps across stock, production data,
            catalogue, and communication — not on “doing 3D printing” for its own
            sake, but on reliable operations and trustworthy listings."
        />
        <Card
          title="Marketing & positioning (analysis)"
          content="The offer is built around coherent “universes” (outdoor,
            equestrian, …) and creator partnerships. Growth depends on
            discoverability and trust: SEO basics, social proof, consistent
            creatives, and tooling that keeps publishing sustainable (scheduling,
            repurposing, funnel thinking). Multi-channel presence (e.g. TikTok,
            Meta, X) must stay aligned with SKU reality and production capacity."
        />
        <Card
          title="Stack & integration"
          content="Core services included n8n workflows, MySQL for operational
            data, Docker for isolated services, Home Assistant for environmental
            supervision, and Appsmith / NocoDB to expose data to non-developers.
            Shopify remained the commercial front; internal apps and automations
            had to stay consistent with variants, stock movements, and fulfilment
            events."
        />
        <Card
          title="Key deliverables"
          content="Filament stock logic and movement tracking; printer telemetry
            and command patterns (incl. MQTT / radio where applicable); pipelines
            toward product content (structure, images, attributes) and safer SQL
            discipline; operational dashboards; and marketing-side automation
            drafts to keep feeds alive without manual overload."
        />
      </div>

      <section className="px-2 sm:px-0">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Filament stock application
        </h2>
        <figure className="bg-white/95 rounded-lg overflow-hidden shadow-md max-w-sm mx-auto">
          <Image
            src="/interne-ship/stock-filament.png"
            alt="Mobile interface for the filament stock application"
            width={460}
            height={1024}
            className="w-full h-auto object-contain"
          />
          <figcaption className="text-xs text-gray-600 p-3">
            Mobile interface used to manage filament stock: add products, remove
            products, and keep the print farm inventory easier to update.
          </figcaption>
        </figure>
      </section>

      <section className="bg-white/95 rounded-lg shadow-md p-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Main tools used
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Image
            src="/interne-ship/shopify.png"
            alt="Shopify"
            width={120}
            height={36}
            className="h-auto object-contain"
          />
          <Image
            src="/interne-ship/appsmith-logo.png"
            alt="Appsmith"
            width={80}
            height={80}
            className="h-16 w-16 object-contain"
          />
          <Image
            src="/interne-ship/n8n-logo.png"
            alt="n8n"
            width={120}
            height={80}
            className="h-20 w-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
