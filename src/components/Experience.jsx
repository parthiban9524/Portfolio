import { BriefcaseBusiness } from "lucide-react";
import { resumeData } from "../data/resumeData.js";
import Section from "./Section.jsx";

function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Professional timeline." className="bg-white">
      <div className="relative space-y-5">
        {resumeData.experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="grid gap-5 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-cyan-300 hover:bg-white md:grid-cols-[220px_1fr]">
            <div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white text-ocean shadow-sm">
                <BriefcaseBusiness size={20} aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-ocean">{job.period}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">{job.role}</h3>
              <p className="mt-1 font-medium text-slate">{job.company}</p>
              <ul className="mt-5 grid gap-3">
                {job.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-slate">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ocean" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
