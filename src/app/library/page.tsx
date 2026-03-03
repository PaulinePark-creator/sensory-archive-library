import WordShelf from "./WordShelf";

export default function LibraryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-medium tracking-tight">
        Library
      </h1>
      <p className="mt-4 text-zinc-600 max-w-2xl">
        A library for sensory words from anywhere — across cultures and places.
      </p>

      <WordShelf />
    </section>
  );
}
