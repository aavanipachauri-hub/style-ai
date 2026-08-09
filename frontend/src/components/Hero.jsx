function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black px-6 py-24"
    >

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            AI-Powered Personal Styling
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Your Style.
            <br />
            <span className="text-purple-500">
              Your AI Stylist.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Discover outfits that match your personality, preferences and
            wardrobe with intelligent AI-powered styling recommendations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25">
              Analyze My Style →
            </button>

            <button className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-gray-300 transition hover:border-purple-500 hover:text-white">
              Explore Features
            </button>

          </div>

        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center">

          <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/60 via-black to-purple-900/20 shadow-2xl shadow-purple-900/20">

            <div className="text-center">

              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-purple-600/20 text-6xl">
                ✨
              </div>

              <h2 className="text-2xl font-semibold text-white">
                AI Style Analysis
              </h2>

              <p className="mt-3 px-8 text-gray-400">
                Upload your outfit and let AI understand your style.
              </p>

              <div className="mx-auto mt-6 w-56 rounded-full bg-white/10 p-1">
                <div className="h-2 w-[85%] rounded-full bg-purple-500" />
              </div>

              <p className="mt-3 text-sm text-purple-300">
                Analyzing your style...
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;