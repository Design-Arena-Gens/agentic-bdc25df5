'use client';
import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'franchisee_leads_sg_v1';

const emptyLead = () => ({ id: crypto.randomUUID(), name: '', company: '', source: '', status: 'New', notes: '' });
const statuses = ['New', 'Contacted', 'Qualified', 'Meeting', 'Negotiation', 'Won', 'Lost'];

export default function LeadTracker() {
  const [leads, setLeads] = useState([]);
  const [draft, setDraft] = useState(emptyLead());
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLeads(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(leads)); } catch {}
  }, [leads]);

  const addLead = () => {
    if (!draft.name && !draft.company) return;
    setLeads([ { ...draft }, ...leads ]);
    setDraft(emptyLead());
  };

  const removeLead = (id) => setLeads(leads.filter(l => l.id !== id));
  const updateLead = (id, patch) => setLeads(leads.map(l => l.id === id ? { ...l, ...patch } : l));

  const filtered = useMemo(() => filter === 'All' ? leads : leads.filter(l => l.status === filter), [leads, filter]);

  const exportCSV = () => {
    const header = ['Name','Company','Source','Status','Notes'];
    const rows = leads.map(l => [l.name, l.company, l.source, l.status, (l.notes||'').replaceAll('\n',' ')]);
    const csv = [header, ...rows].map(r => r.map(v => '"' + String(v||'').replaceAll('"','""') + '"').join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'leads.csv'; a.click(); URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <h4>Add lead</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
          <input className="input" placeholder="Name" value={draft.name} onChange={e=>setDraft({ ...draft, name: e.target.value })} />
          <input className="input" placeholder="Company" value={draft.company} onChange={e=>setDraft({ ...draft, company: e.target.value })} />
          <input className="input" placeholder="Source (e.g., LinkedIn post)" value={draft.source} onChange={e=>setDraft({ ...draft, source: e.target.value })} />
          <select className="select" value={draft.status} onChange={e=>setDraft({ ...draft, status: e.target.value })}>
            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <textarea className="textarea" placeholder="Notes" value={draft.notes} onChange={e=>setDraft({ ...draft, notes: e.target.value })} />
          <button className="btn" onClick={addLead}>Add</button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span className="badge">{leads.length} total</span>
          <select className="select" style={{ width: 200 }} value={filter} onChange={e=>setFilter(e.target.value)}>
            {['All', ...statuses].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn secondary" onClick={() => setLeads([])}>Clear</button>
          <button className="btn" onClick={exportCSV}>Export CSV</button>
        </div>
      </div>

      <div className="card" style={{ overflowX: 'auto' }}>
        <table className="table">
          <thead>
            <tr>
              <th style={{ minWidth: 140 }}>Name</th>
              <th style={{ minWidth: 160 }}>Company</th>
              <th style={{ minWidth: 180 }}>Source</th>
              <th style={{ minWidth: 140 }}>Status</th>
              <th style={{ minWidth: 260 }}>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(l => (
              <tr key={l.id}>
                <td><input className="input" value={l.name} onChange={e=>updateLead(l.id, { name: e.target.value })} /></td>
                <td><input className="input" value={l.company} onChange={e=>updateLead(l.id, { company: e.target.value })} /></td>
                <td><input className="input" value={l.source} onChange={e=>updateLead(l.id, { source: e.target.value })} /></td>
                <td>
                  <select className="select" value={l.status} onChange={e=>updateLead(l.id, { status: e.target.value })}>
                    {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
                <td><textarea className="textarea" value={l.notes} onChange={e=>updateLead(l.id, { notes: e.target.value })} /></td>
                <td className="row-actions">
                  <button className="btn secondary" onClick={() => removeLead(l.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} style={{ color: 'var(--muted)' }}>No leads yet. Add some above.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
