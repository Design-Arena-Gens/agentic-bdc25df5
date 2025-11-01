'use client';

const buildGoogle = (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;
const buildLinkedInPeople = (q) => `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(q)}`;
const buildLinkedInContent = (q) => `https://www.linkedin.com/search/results/content/?keywords=${encodeURIComponent(q)}`;

const Shortcut = ({ title, href, hint }) => (
  <div className="card">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <h4>{title}</h4>
      {hint ? <span className="kbd">{hint}</span> : null}
    </div>
    <a className="btn" href={href} target="_blank" rel="noopener noreferrer">Open</a>
  </div>
);

export default function SearchShortcuts() {
  const items = [
    {
      title: 'Google: "looking to franchise" site:sg OR site:linkedin.com/in',
      href: buildGoogle('"looking to franchise" (site:sg OR site:linkedin.com/in)')
    },
    {
      title: 'Google: "become a franchisee" singapore',
      href: buildGoogle('"become a franchisee" singapore')
    },
    {
      title: 'LinkedIn People: franchise consultant singapore',
      href: buildLinkedInPeople('franchise consultant singapore')
    },
    {
      title: 'LinkedIn Content: "seeking franchisee" OR "franchise opportunity"',
      href: buildLinkedInContent('"seeking franchisee" OR "franchise opportunity" singapore')
    },
    {
      title: 'Google: FLA exhibitors list filetype:pdf',
      href: buildGoogle('FLAsia exhibitors list filetype:pdf')
    },
    {
      title: 'Google: site:facebook.com/groups franchise singapore',
      href: buildGoogle('site:facebook.com/groups franchise singapore')
    },
  ];

  return (
    <div className="card-grid">
      {items.map((it, idx) => (
        <Shortcut key={idx} title={it.title} href={it.href} />
      ))}
    </div>
  );
}
