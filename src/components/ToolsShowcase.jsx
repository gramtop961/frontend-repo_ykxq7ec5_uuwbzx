import { useEffect, useMemo, useState } from 'react';
import { Filter, Search, Sparkles } from 'lucide-react';

const MOCK_TOOLS = [
  { id: 't1', name: 'Chat Assist', category: 'Agent', badges: ['NLP', 'Support'], description: 'Omnichannel assistant powered by LLMs for customer support.', rating: 4.7 },
  { id: 't2', name: 'Doc Summarizer', category: 'NLP', badges: ['Summarization'], description: 'Summarize large documents with citations and compliance controls.', rating: 4.5 },
  { id: 't3', name: 'Vision QA', category: 'Vision', badges: ['OCR', 'QA'], description: 'Automated visual QA for invoices and forms.', rating: 4.4 },
  { id: 't4', name: 'Workflow Studio', category: 'Automation', badges: ['RPA', 'ETL'], description: 'Drag-and-drop automations that integrate across systems.', rating: 4.8 },
];

export default function ToolsShowcase() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const categories = useMemo(() => ['All', ...Array.from(new Set(MOCK_TOOLS.map(t => t.category)))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK_TOOLS.filter(t => (category === 'All' || t.category === category) && (!q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)));
  }, [query, category]);

  return (
    <section id="tools" aria-labelledby="tools-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 id="tools-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Featured AI Tools</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Curated tools ready for enterprise rollout.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 text-[#10B981] px-3 py-1 text-xs font-semibold"><Sparkles className="h-4 w-4" aria-hidden /> New this month</span>
        </div>

        <div className="mt-6 grid gap-3 sm:flex sm:items-center">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              aria-label="Search tools"
              placeholder="Search tools"
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            />
          </div>
          <div className="inline-flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" aria-hidden />
            <label htmlFor="category" className="sr-only">Filter by category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4 h-44">
                <div className="h-6 w-1/2 bg-gray-200 dark:bg-white/10 rounded" />
                <div className="mt-3 h-3 w-5/6 bg-gray-200 dark:bg-white/10 rounded" />
                <div className="mt-2 h-3 w-2/3 bg-gray-200 dark:bg-white/10 rounded" />
                <div className="mt-4 flex gap-2">
                  <div className="h-6 w-16 bg-gray-200 dark:bg-white/10 rounded-full" />
                  <div className="h-6 w-16 bg-gray-200 dark:bg-white/10 rounded-full" />
                </div>
              </div>
            ))
          ) : (
            filtered.map((tool) => (
              <article key={tool.id} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4 focus-within:ring-2 focus-within:ring-[#3B82F6]">
                <header className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                  <span className="text-xs font-medium rounded-full bg-[#3B82F6]/10 text-[#3B82F6] px-2 py-1">{tool.category}</span>
                </header>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.badges.map((b) => (
                    <span key={b} className="inline-flex items-center rounded-full bg-gray-100 dark:bg-white/10 px-2 py-1 text-xs text-gray-700 dark:text-gray-300">{b}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#submit" className="text-sm font-semibold text-[#3B82F6] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6] rounded-lg px-1">Propose Use Case</a>
                  <p className="text-xs text-gray-500 dark:text-gray-400" aria-label={`Rating ${tool.rating} out of 5`}>⭐ {tool.rating}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
