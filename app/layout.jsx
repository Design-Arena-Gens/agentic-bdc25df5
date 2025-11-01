export const metadata = {
  title: "Franchisee Leads Singapore - Free Playbook",
  description: "Actionable playbook and tools to get franchisee leads in Singapore for free.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1 className="logo">Franchisee Leads SG</h1>
            <nav className="nav">
              <a href="#sources">Sources</a>
              <a href="#searches">Search</a>
              <a href="#templates">Templates</a>
              <a href="#tracker">Tracker</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>Built for founders recruiting franchisees in Singapore. 100% free.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
