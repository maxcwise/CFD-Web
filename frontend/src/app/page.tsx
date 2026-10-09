import { ArrowUpRight, Braces, Layers3 } from "lucide-react";

import { ItemsTable } from "@/components/items-table";
import { API_BASE_URL, listItems } from "@/services/items";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let items = null;
  try {
    items = await listItems();
  } catch {
    // The page remains useful while the API is stopped.
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-stone-900">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10 sm:pt-12">
        <header className="flex items-center justify-between border-b border-stone-200 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-stone-900 text-white">
              <Layers3 aria-hidden="true" size={19} strokeWidth={1.8} />
            </div>
            <span className="text-sm font-semibold tracking-tight">App Template</span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:inline">FASTAPI / NEXT.JS</span>
        </header>

        <section className="max-w-2xl py-16 sm:py-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
            <Braces aria-hidden="true" size={14} />
            Full-stack starter
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            A clear starting point for your next app.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
            The table below comes from a FastAPI endpoint. Edit the example feature to make this app your own.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_8px_30px_-20px_rgba(0,0,0,0.2)]" aria-labelledby="items-heading">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 px-5 py-5 sm:px-7">
            <div>
              <div className="flex items-center gap-3">
                <h2 id="items-heading" className="text-lg font-semibold tracking-tight">Items</h2>
                {items !== null && (
                  <span className="rounded-full bg-stone-100 px-2.5 py-1 font-mono text-xs text-stone-600">{items.length}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-stone-500">Example data from GET /api/v1/items</p>
            </div>
            <a
              href={`${API_BASE_URL}/docs`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-stone-700 hover:text-stone-950 hover:underline"
            >
              API docs <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
          {items === null ? (
            <div role="alert" className="px-5 py-10 sm:px-7">
              <p className="font-medium">Could not load items.</p>
              <p className="mt-1 text-sm text-stone-500">Start the FastAPI server, then refresh this page.</p>
            </div>
          ) : (
            <ItemsTable items={items} />
          )}
        </section>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-stone-400">
          <span>FASTAPI BACKEND</span>
          <span>NEXT.JS FRONTEND</span>
        </footer>
      </div>
    </main>
  );
}
