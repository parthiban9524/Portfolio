import { resumeData } from "../data/resumeData.js";
import Section from "./Section.jsx";

function Skills() {
  return (
    <Section id="skills" kicker="Skills" title="Tools and technologies used across shipped mobile apps." className="bg-white">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {resumeData.skills.map((skillGroup) => (
          <article key={skillGroup.category} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-ink">{skillGroup.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span key={skill} className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
