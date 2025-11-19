"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeHero() {
  const { data: session, status } = useSession();
  const router = useRouter();


  useEffect(() => {

    if (session?.jwt !== '' && session?.jwt !== undefined && session?.jwt?.length !== 0) {
      router.push('/dashboard');
    }
  }, [session?.jwt, router]);

  if (status === 'loading') {
    return (

      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-center gap-6">

          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-white animate-circle7124"></div>
            <div className="absolute w-5 h-1 bg-black/90 top-[120%] left-1/2 -translate-x-1/2 blur-sm animate-shadow046 -z-10"></div>
          </div>

          <div className="relative" style={{ animationDelay: "0.2s" }}>
            <div className="w-5 h-5 rounded-full bg-white animate-circle7124"></div>
            <div className="absolute w-5 h-1 bg-black/90 top-[120%] left-1/2 -translate-x-1/2 blur-sm animate-shadow046 -z-10"></div>
          </div>

          <div className="relative" style={{ animationDelay: "0.3s" }}>
            <div className="w-5 h-5 rounded-full bg-white animate-circle7124"></div>
            <div className="absolute w-5 h-1 bg-black/90 top-[120%] left-1/2 -translate-x-1/2 blur-sm animate-shadow046 -z-10"></div>
          </div>

        </div>
      </div>


    );

  }

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
              {session?.jwt !== '' && session?.jwt !== undefined && session?.jwt?.length !== 0 ? "" :

                <>


                  <Link
                    href="/login"
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

                    <span>Login</span>
                  </Link>

                  <Link
                    href="/register"
                    className="group inline-flex items-center gap-3 rounded-full px-6 py-3 hover:bg-gradient-to-r border border-emerald-500 transition-all from-emerald-500 to-green-400 text-white font-semibold shadow-lg  duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
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

                    <span>Register</span>
                  </Link>
                </>
              }
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
