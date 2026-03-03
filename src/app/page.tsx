import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Fixed Minimal Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-sm font-medium tracking-wide">
            SENSORY ARCHIVE
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-7 text-xs tracking-[0.18em] text-zinc-700">
            <Link href="/" className="hover:text-zinc-950">
              HOME
            </Link>
            <Link href="/library" className="hover:text-zinc-950">
              LIBRARY
            </Link>
            <Link href="/post" className="hover:text-zinc-950">
              POST
            </Link>
            <Link href="/media" className="hover:text-zinc-950">
              MEDIA
            </Link>
            <Link href="/contact" className="hover:text-zinc-950">
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Padding for fixed header */}
      <div className="pt-16">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            A library for sensory words from anywhere —
            <br />
            across cultures and places.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-600">
            We collect untranslatable terms in their native form, then annotate
            them in English through image sequences, sound, and field notes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/library"
              className="inline-flex items-center justify-center rounded-none border border-zinc-900 px-6 py-3 text-sm hover:bg-zinc-900 hover:text-white transition"
            >
              Explore Library
            </Link>

            <Link
              href="/post"
              className="inline-flex items-center justify-center rounded-none border border-zinc-300 px-6 py-3 text-sm text-zinc-800 hover:border-zinc-900 transition"
            >
              Contribute a Specimen
            </Link>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-zinc-200" />

        {/* WHAT YOU'LL SEE */}
        <section className="mx-auto max-w-6xl px-8 py-16 md:py-20">
          <p className="text-xs tracking-[0.22em] text-zinc-500">
            WHAT YOU&apos;LL SEE
          </p>

          <div className="mt-10 grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium">Words</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">
                Sensory vocabularies rooted in specific languages.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Specimens</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">
                Structured visual captures translating perception into form.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium">Field Metadata</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">
                Time, atmosphere, and context recorded alongside each entry.
              </p>
            </div>
          </div>
        </section>

        {/* 3D Notice */}
        <section className="mx-auto max-w-6xl px-8 pb-20">
          <div className="border border-zinc-200 bg-zinc-50 px-6 py-5 text-sm text-zinc-600">
            Interactive 3D mesh models are under development.
            <br />
            Current specimens are presented as structured image sequences.
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-8 py-10 flex flex-col gap-2">
            <p className="text-sm text-zinc-700">Contact</p>
            <a
              href="mailto:pauline040911@gmail.com"
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              pauline040911@gmail.com
            </a>
            <p className="mt-4 text-xs text-zinc-500">
              © 2026 Sensory Archive Library
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}