import { ArrowUpRight, BadgeCheck, Smartphone } from "lucide-react";
import { resumeData } from "../data/resumeData.js";
import Section from "./Section.jsx";

const projectPalettes = [
  {
    card: "border-cyan-200 bg-cyan-50/60",
    strip: "bg-ocean",
    badge: "bg-cyan-100 text-cyan-950",
    app: "border-cyan-200 bg-white",
    dot: "bg-ocean",
  },
  {
    card: "border-emerald-200 bg-emerald-50/60",
    strip: "bg-leaf",
    badge: "bg-emerald-100 text-emerald-950",
    app: "border-emerald-200 bg-white",
    dot: "bg-leaf",
  },
  {
    card: "border-orange-200 bg-orange-50/70",
    strip: "bg-ember",
    badge: "bg-orange-100 text-orange-950",
    app: "border-orange-200 bg-white",
    dot: "bg-ember",
  },
  {
    card: "border-indigo-200 bg-indigo-50/70",
    strip: "bg-indigo-600",
    badge: "bg-indigo-100 text-indigo-950",
    app: "border-indigo-200 bg-white",
    dot: "bg-indigo-600",
  },
];

function Projects() {
  return (
    <Section id="projects" kicker="Projects" title="Selected mobile app work with clearer product context.">
      <div className="grid gap-6 lg:grid-cols-2">
        {resumeData.projects.map((project, index) => {
          const palette = projectPalettes[index % projectPalettes.length];

          return (
          <article key={project.name} className={`group overflow-hidden rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${palette.card}`}>
            <div className={`mb-6 h-1.5 w-24 rounded-full ${palette.strip}`} aria-hidden="true" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className={`inline-flex rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] ${palette.badge}`}>
                  {project.type}
                </p>
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

            {project.apps?.length ? (
              <div className="mt-6 grid gap-3">
                {project.apps.map((app) => (
                  <div key={app.name} className={`rounded-lg border p-4 ${palette.app}`}>
                    <div className="flex items-center gap-2">
                      <Smartphone size={17} className="text-ocean" aria-hidden="true" />
                      <h4 className="text-base font-bold text-ink">{app.name}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate">{app.detail}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <ul className="mt-5 grid gap-3">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate">
                  <BadgeCheck className="mt-0.5 shrink-0 text-leaf" size={18} aria-hidden="true" />
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
              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/80 pt-5">
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
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
