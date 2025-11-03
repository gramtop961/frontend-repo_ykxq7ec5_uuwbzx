import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KPICards from './components/KPICards';
import ToolsShowcase from './components/ToolsShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#0B1220] dark:to-[#0B1220]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-white dark:focus:bg-gray-900 focus:text-[#3B82F6]">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <KPICards />
        <ToolsShowcase />
        <section id="submit" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Use Case Submission</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-prose">This demo focuses on the homepage. The full multi-step wizard with ROI math and autosave will be added in later iterations. For now, tap the button to get in touch.</p>
              <div className="mt-4 flex gap-3">
                <a href="#contact" className="inline-flex items-center rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]">Contact Team</a>
                <a href="#tools" className="inline-flex items-center rounded-xl border border-gray-300 dark:border-white/20 px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]">Explore Tools</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Department of AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
