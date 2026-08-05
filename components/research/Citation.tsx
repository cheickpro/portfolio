"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { research } from "@/data/research";
import { Copy, Check } from "lucide-react";

export default function Citation() {
  const [activeTab, setActiveTab] = useState<"apa" | "bibtex">("apa");
  const [copied, setCopied] = useState(false);

  const apa = `${research.citation.author}. (${research.citation.year}). ${research.citation.title}. ${research.citation.type}, ${research.citation.institution}.`;

  const bibtex = `@mastersthesis{rachid2025,
  author = {${research.citation.author}},
  title = {${research.citation.title}},
  school = {${research.citation.institution}},
  year = {${research.citation.year}}
}`;

  const content = activeTab === "apa" ? apa : bibtex;

  async function copyCitation() {
    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Card className="mt-20">

      <h2 className="text-2xl font-bold">
        Cite this Work
      </h2>

      <p className="mt-3 text-slate-500 dark:text-slate-400">
        If you reference this research, please use one of the following citation formats.
      </p>

      {/* Tabs */}

      <div className="mt-8 flex border-b border-slate-200 dark:border-slate-700">

        <button
          onClick={() => setActiveTab("apa")}
          className={`px-5 py-3 text-sm font-medium transition
            ${
              activeTab === "apa"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
        >
          APA
        </button>

        <button
          onClick={() => setActiveTab("bibtex")}
          className={`px-5 py-3 text-sm font-medium transition
            ${
              activeTab === "bibtex"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "border-b-2 border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
        >
          BibTeX
        </button>

      </div>

      {/* Content */}

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">

        {activeTab === "apa" ? (
          <p className="leading-8 text-justify">
            {apa}
          </p>
        ) : (
          <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7">
            {bibtex}
          </pre>
        )}

      </div>

      {/* Copy */}

      <div className="mt-6 flex justify-end">

        <button
          onClick={copyCitation}
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            border
            px-4
            py-2
            text-sm
            transition
            hover:bg-slate-100
            dark:hover:bg-slate-800
          "
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy
            </>
          )}
        </button>

      </div>

    </Card>
  );
}