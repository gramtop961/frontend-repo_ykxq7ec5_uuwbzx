import { LineChart } from 'lucide-react';

const kpis = [
  { label: 'Automations Deployed', value: '128', change: '+12% MoM' },
  { label: 'Hours Saved', value: '18,240', change: '+8% QoQ' },
  { label: 'Avg. ROI', value: '4.6x', change: '+0.3x' },
  { label: 'Active Tools', value: '42', change: '+3 this month' },
];

export default function KPICards() {
  return (
    <section aria-labelledby="kpi-heading" className="py-8 sm:py-12 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="kpi-heading" className="sr-only">Key performance indicators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-4">
              <div className="flex items-start justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">{kpi.label}</p>
                <LineChart className="h-4 w-4 text-[#3B82F6]" aria-hidden />
              </div>
              <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{kpi.value}</p>
              <p className="mt-1 text-xs text-[#10B981] font-medium">{kpi.change}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
