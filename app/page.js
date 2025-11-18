import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900 px-6">

      <main className="w-full max-w-4xl rounded-2xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-black/[0.04] dark:border-white/[0.04] p-12 shadow-xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left - Text */}
          <div className="max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black dark:text-zinc-50">
              Welcome to <span className="text-emerald-600 dark:text-emerald-400">RetailFlow</span>
            </h1>

            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              A modern retail ERP to manage your POS, inventory, and sales analytics —
              fast, reliable and designed for store owners. Jump into the dashboard to
              start managing your store.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white font-semibold shadow-lg transform transition duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
                aria-label="Enter Dashboard"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">

                  <svg
                    className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 10h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <span>Enter Dashboard</span>
              </Link>


            </div>
          </div>

          <aside className="hidden md:block w-72">
            <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800 p-4 border border-black/[0.03] dark:border-white/[0.03]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-300">Today Sales</div>
                  <div className="mt-1 text-2xl font-semibold text-black dark:text-zinc-50">₺4,820</div>
                </div>
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">+8.2%</div>
              </div>

              <div className="mt-4 h-16 rounded-md bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/20 dark:to-emerald-800/20" />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
