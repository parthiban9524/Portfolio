function Section({ id, kicker, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <div className="section-shell">
        {(kicker || title) && (
          <div className="mb-10 max-w-3xl">
            {kicker && <p className="section-kicker">{kicker}</p>}
            {title && <h2 className="section-heading">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
