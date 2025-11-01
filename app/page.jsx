import LeadSources from "../components/LeadSources";
import SearchShortcuts from "../components/SearchShortcuts";
import OutreachTemplates from "../components/OutreachTemplates";
import LeadTracker from "../components/LeadTracker";

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <h2>How and where to get franchisee leads in Singapore ? for free</h2>
        <p>Use the curated sources, one-click searches, outreach templates, and a simple tracker. No ads. No spend.</p>
      </section>

      <section id="sources" className="section">
        <h3>Free lead sources in Singapore</h3>
        <LeadSources />
      </section>

      <section id="searches" className="section">
        <h3>One?click searches (Google + LinkedIn)</h3>
        <SearchShortcuts />
      </section>

      <section id="templates" className="section">
        <h3>Proven outreach templates</h3>
        <OutreachTemplates />
      </section>

      <section id="tracker" className="section">
        <h3>Lightweight lead tracker</h3>
        <LeadTracker />
      </section>
    </div>
  );
}
