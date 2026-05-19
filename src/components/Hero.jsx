import { ArrowDown, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroVisual from "../assets/mobile-developer.svg";
import { resumeData } from "../data/resumeData.js";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="section-kicker">{resumeData.title}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-ink sm:text-5xl lg:text-6xl">
            {resumeData.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">{resumeData.headline}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate">
            <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
              <MapPin size={16} aria-hidden="true" />
              {resumeData.location}
            </span>
            <a
              href={`mailto:${resumeData.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:border-ocean hover:text-ocean"
            >
              <Mail size={16} aria-hidden="true" />
              {resumeData.email}
            </a>
            <a
              href={`tel:${resumeData.phone}`}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 hover:border-ocean hover:text-ocean"
            >
              <Phone size={16} aria-hidden="true" />
              {resumeData.phone}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ocean px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-cyan-800"
            >
              View Projects
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
              <ExternalLink size={16} aria-hidden="true" />
            </a>
            {resumeData.github ? (
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-8 h-28 w-28 rounded-md bg-emerald-100" aria-hidden="true" />
          <div className="absolute -right-5 bottom-12 h-24 w-24 rounded-md bg-orange-100" aria-hidden="true" />
          <img
            src={heroVisual}
            alt="Mobile development workspace illustration"
            className="relative w-full rounded-lg border border-slate-200 bg-white shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
