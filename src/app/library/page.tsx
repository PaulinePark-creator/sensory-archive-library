export default function LibraryPage() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight">
          Library
        </h1>
        <p className="mt-6 text-zinc-600 leading-relaxed">
          A growing index of sensory words and specimens. Browse words, explore
          structured image sequences, and review field metadata.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-zinc-200 pt-12">
        <div>
          <h2 className="text-sm tracking-widest text-zinc-500">WORDS</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Untranslatable terms preserved in native form, annotated through
            media and notes.
          </p>
        </div>

        <div>
          <h2 className="text-sm tracking-widest text-zinc-500">SPECIMENS</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Structured image sequences translating perception into form.
          </p>
        </div>

        <div>
          <h2 className="text-sm tracking-widest text-zinc-500">FIELD METADATA</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Time, atmosphere, and context recorded alongside each entry.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-10">
        <p className="text-sm tracking-widest text-zinc-500">3D NOTICE</p>
        <p className="mt-3 text-zinc-700 leading-relaxed">
          Interactive 3D mesh models are under development. Current specimens
          are presented as structured image sequences.
        </p>
      </div>
    </section>
  );
}

