const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const Section = ({ title, children, badge }) => (
  <div className="card">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
      <h4>{title}</h4>
      {badge ? <span className="badge">{badge}</span> : null}
    </div>
    <div>{children}</div>
  </div>
);

export default function LeadSources() {
  return (
    <div className="card-grid">
      <Section title="LinkedIn (search + content)" badge="High intent">
        <ul>
          <li><Link href="https://www.linkedin.com/search/results/people/?keywords=franchise%20consultant%20singapore">Franchise consultants in Singapore</Link></li>
          <li><Link href="https://www.linkedin.com/search/results/content/?keywords=%22looking%20to%20franchise%22%20OR%20%22seeking%20franchisee%22%20singapore">People posting about franchising</Link></li>
          <li><Link href="https://www.linkedin.com/search/results/people/?keywords=franchise%20broker%20singapore">Franchise brokers</Link></li>
          <li><Link href="https://www.linkedin.com/search/results/companies/?keywords=franchise%20singapore">Companies with franchise in SG</Link></li>
        </ul>
      </Section>

      <Section title="Franchise associations & portals" badge="Trust">
        <ul>
          <li><Link href="https://www.flasingapore.org/members">FLA Singapore Member Directory</Link></li>
          <li><Link href="https://www.franchiselicenseasia.com/">Franchising & Licensing Asia (FLAsia)</Link> ? event + exhibitors</li>
          <li><Link href="https://www.asiawidefranchise.com.sg/franchise/">Asiawide Franchise Listings</Link></li>
          <li><Link href="https://www.franchiseasia.com/">Franchise Asia (APAC)</Link></li>
        </ul>
      </Section>

      <Section title="Communities (free)" badge="Outreach">
        <ul>
          <li><Link href="https://www.facebook.com/groups/entrepreneurssingapore/">Entrepreneurs Singapore (FB)</Link></li>
          <li><Link href="https://www.facebook.com/groups/sgstartups/">Singapore Startups (FB)</Link></li>
          <li><Link href="https://www.reddit.com/r/singapore/">r/singapore</Link> & <Link href="https://www.reddit.com/r/Entrepreneur/">r/Entrepreneur</Link> weekly threads</li>
          <li><Link href="https://www.meetup.com/find/?source=EVENTS&location=sg--Singapore&keywords=franchise">Meetup: Franchise/SME events</Link></li>
        </ul>
      </Section>

      <Section title="Business-for-sale marketplaces" badge="Broad">
        <ul>
          <li><Link href="https://www.businessforsale.sg/">BusinessForSale.sg</Link> ? owners often open to franchising</li>
          <li><Link href="https://www.carousell.sg/categories/businesses-for-sale-118/">Carousell: Businesses for Sale</Link></li>
          <li><Link href="https://singapore.listings.businessforsale.com/">Global marketplace (SG filtered)</Link></li>
        </ul>
      </Section>

      <Section title="SME directories" badge="Prospecting">
        <ul>
          <li><Link href="https://www.yp.sg/">Yellow Pages SG</Link></li>
          <li><Link href="https://www.enterprisesg.gov.sg/">Enterprise Singapore (find partners, grants)</Link></li>
          <li><Link href="https://www.sfa.org.sg/members-directory">SFA Members Directory (F&B)</Link></li>
        </ul>
      </Section>

      <Section title="Content that attracts inbound" badge="Free">
        <ul>
          <li>Publish a "How to become a franchisee" guide for your brand on <Link href="https://www.linkedin.com/">LinkedIn</Link></li>
          <li>Post case studies in SG groups; invite DMs</li>
          <li>Offer a short webinar; collect RSVPs via <Link href="https://forms.google.com">Google Forms</Link></li>
        </ul>
      </Section>
    </div>
  );
}
