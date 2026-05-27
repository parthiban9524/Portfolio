import { CheckCircle2 } from "lucide-react";
import { resumeData } from "../data/resumeData.js";
import Section from "./Section.jsx";

function About() {
  return (
    <Section id="about" kicker="About" title="Mobile-first engineering with product-focused execution.">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-lg leading-8 text-slate">{resumeData.summary}</p>
          <div className="mt-6 h-1.5 w-28 rounded-full bg-ocean" aria-hidden="true" />
        </div>
        <div className="grid gap-4">
          {resumeData.highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-300">
              <CheckCircle2 className="mt-1 shrink-0 text-leaf" size={20} aria-hidden="true" />
              <p className="text-sm font-medium leading-6 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;
