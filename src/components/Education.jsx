import { GraduationCap } from "lucide-react";
import { resumeData } from "../data/resumeData.js";
import Section from "./Section.jsx";

function Education() {
  return (
    <Section id="education" kicker="Education" title="Academic background.">
      <div className="grid gap-5">
        {resumeData.education.map((item) => (
          <article key={item.degree} className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-mist text-ocean">
              <GraduationCap size={24} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">{item.degree}</h3>
              <p className="mt-2 font-medium text-slate">{item.institution}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate">
                <span className="rounded-md bg-mist px-3 py-2 font-medium">{item.period}</span>
                <span className="rounded-md bg-mist px-3 py-2 font-medium">{item.result}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Education;
