import { ArrowUpRight } from "lucide-react";
import { resumeData } from "../data/resumeData.js";
import Section from "./Section.jsx";

function Projects() {
  return (
    <Section id="projects" kicker="Projects" title="Selected mobile app work with verified public app links.">
      <div className="grid gap-6 lg:grid-cols-2">
        {resumeData.projects.map((project) => (
          <article key={project.name} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ocean">{project.type}</p>
                <h3 className="mt-2 text-2xl font-bold text-ink">{project.name}</h3>
              </div>
              {project.links?.[0] ? (
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-slate hover:border-ocean hover:text-ocean"
                  aria-label={`Open ${project.links[0].label}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              ) : null}
            </div>

            <p className="mt-5 leading-7 text-slate">{project.description}</p>

            <ul className="mt-5 grid gap-3">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-md bg-mist px-3 py-2 text-xs font-semibold text-ink">
                  {tech}
                </span>
              ))}
            </div>

            {project.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-ink hover:border-ocean hover:text-ocean"
                  >
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
