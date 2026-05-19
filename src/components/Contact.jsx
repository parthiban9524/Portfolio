import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { resumeData } from "../data/resumeData.js";
import Section from "./Section.jsx";

const contactItems = [
  {
    label: "Email",
    value: resumeData.email,
    href: `mailto:${resumeData.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: resumeData.phone,
    href: `tel:${resumeData.phone}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/parthiban-m-82674a1a6",
    href: resumeData.linkedin,
    icon: Linkedin,
  },
  {
    label: "Location",
    value: resumeData.address,
    href: "",
    icon: MapPin,
  },
];

function Contact() {
  return (
    <Section id="contact" kicker="Contact" title="Available for mobile app development opportunities." className="bg-white">
      <div className="grid gap-5 md:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-ocean shadow-sm">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-ocean">{item.label}</span>
                <span className="mt-2 block break-words text-base font-medium text-ink">{item.value}</span>
              </span>
            </div>
          );

          return item.href ? (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </Section>
  );
}

export default Contact;
