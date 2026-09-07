function CTA() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 md:py-28">

      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/4 bottom-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-950/50 via-black to-blue-950/40 px-8 py-16 text-center shadow-2xl shadow-purple-950/30 md:px-16 md:py-20">

          {/* Decorative Gradient */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

          {/* Small Badge */}
          <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Your Style Journey Starts Here
            </span>

          </div>

          {/* Heading */}
          <h2 className="relative text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

            Ready to Discover
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              Your Style?
            </span>

          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Let Style AI analyze your style and help you discover
            personalized looks made just for you.
          </p>

          {/* CTA Button */}
          <button
            className="group relative mt-9 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-xl shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            Analyze My Style

            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Bottom Trust Text */}
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">

            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Personalized
            </span>

            <span className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              AI-powered
            </span>

            <span className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              Style-focused
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;