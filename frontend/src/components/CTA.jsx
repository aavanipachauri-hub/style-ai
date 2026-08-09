function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/60 via-black to-purple-900/30 px-8 py-16 text-center shadow-2xl shadow-purple-900/20 md:px-16">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Your Style Journey Starts Here
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to Discover
          <span className="text-purple-500"> Your Style?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Let Style AI analyze your style and help you discover
          personalized looks made just for you.
        </p>

        <button className="mt-8 rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25">
          Analyze My Style →
        </button>

      </div>
    </section>
  );
}

export default CTA;