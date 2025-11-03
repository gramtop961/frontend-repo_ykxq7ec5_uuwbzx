import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] px-3 py-1 text-xs font-semibold">
              <Rocket className="h-4 w-4" aria-hidden /> Accelerate AI Adoption
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Department of AI
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300 max-w-prose">
              Discover enterprise-ready AI tools, automate workflows, and quantify impact with a transparent ROI model.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#tools" className="inline-flex items-center rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]">
                Explore Tools
              </a>
              <a href="#submit" className="inline-flex items-center rounded-xl border border-gray-300 dark:border-white/20 px-5 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]">
                Submit a Use Case
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-4">
                <dt className="text-xs text-gray-500 dark:text-gray-400">Security</dt>
                <dd className="mt-1 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white"><Shield className="h-4 w-4 text-[#10B981]" aria-hidden /> Compliant</dd>
              </div>
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-4">
                <dt className="text-xs text-gray-500 dark:text-gray-400">Performance</dt>
                <dd className="mt-1 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white"><Zap className="h-4 w-4 text-[#10B981]" aria-hidden /> Fast</dd>
              </div>
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-4">
                <dt className="text-xs text-gray-500 dark:text-gray-400">Impact</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">ROI Driven</dd>
              </div>
            </dl>
          </div>
          <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-amber-400/20">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30 dark:from-[#0B1220] dark:via-[#0B1220]/40 dark:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
