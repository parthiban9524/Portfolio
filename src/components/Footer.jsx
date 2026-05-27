import { resumeData } from "../data/resumeData.js";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink py-8 text-white">
      <div className="section-shell flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
          <p className="mt-1 text-cyan-100">{resumeData.buildCredit}</p>
        </div>
        <a href="#home" className="font-semibold text-cyan-100 hover:text-white">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
