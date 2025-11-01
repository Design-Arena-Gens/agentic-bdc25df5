'use client';
import { useState } from 'react';

const TemplateCard = ({ title, body }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(body); setCopied(true); setTimeout(()=>setCopied(false), 1200);} catch {}
  };
  return (
    <div className="card">
      <h4>{title}</h4>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#0b122b', border: '1px solid var(--border)', borderRadius: 8, padding: 12 }}>{body}</pre>
      <button className="btn" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
    </div>
  );
};

export default function OutreachTemplates() {
  const templates = [
    {
      title: 'Cold DM (LinkedIn)',
      body: `Hi NAME ? saw you're in F&B/retail in SG.

I'm expanding BRAND with owner-operators. Typical investment: $X?$Y, breakeven ~Z months.

Happy to share numbers + store tour. Would a quick 10?15 min call this week be useful?`
    },
    {
      title: 'Intro to consultants/brokers',
      body: `Hi NAME ? I noticed you work with franchise buyers.

We have a strong unit economics story (AOV, payback, system). Happy to equip you with a concise pack + fees if you have interested candidates.

Open to a 15-min intro to see if it's a fit?`
    },
    {
      title: 'Community post (FB/Reddit)',
      body: `We're inviting 2?3 Singapore owner-operators to open LOCATION brand stores.

? Investment: $X?$Y
? Training + site support
? Proven unit economics (breakeven ~Z months)

Comment "INFO" or DM for the deck + store visit.`
    },
    {
      title: 'Follow-up (48?72h)',
      body: `Quick bump, NAME ? still keen to share the deck and a sample P&L. If now's not ideal, is there a better time to revisit?`
    }
  ];

  return (
    <div className="card-grid">
      {templates.map((t, i) => (
        <TemplateCard key={i} title={t.title} body={t.body} />
      ))}
    </div>
  );
}
