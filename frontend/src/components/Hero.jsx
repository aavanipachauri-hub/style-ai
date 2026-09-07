function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black px-6 py-20 md:py-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-40 h-80 w-80 rounded-full bg-blue-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          {/* Small Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-300">
              AI-Powered Personal Styling
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Your Style.
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              Your AI Stylist.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            Discover outfits that match your personality, preferences and
            wardrobe with intelligent AI-powered styling recommendations.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <button
              className="group rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
            >
              Analyze My Style
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              className="rounded-xl border border-white/15 bg-white/[0.02] px-7 py-4 font-semibold text-gray-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/5 hover:text-white"
            >
              Explore Features
            </button>

          </div>

          {/* Small Trust Points */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Personalized styling
            </span>

            <span className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              AI-powered insights
            </span>

            <span className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              Your wardrobe
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Main AI Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-950/40 via-black to-blue-950/30 p-5 shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-7">

            {/* Top Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Card Header */}
            <div className="relative flex items-center justify-between border-b border-white/10 pb-5">

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Style AI
                </p>

                <h2 className="mt-1 text-lg font-semibold text-white">
                  Your Style Profile
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              </div>

            </div>

            {/* Profile Area */}
            <div className="relative mt-6 grid gap-5 sm:grid-cols-[1fr_1.2fr]">

              {/* Style Visual */}
              <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/20">

                <div className="absolute left-5 top-5 h-16 w-16 rounded-full bg-purple-500/10 blur-2xl" />

                <div className="relative flex h-36 w-28 items-center justify-center rounded-[3rem] border border-white/10 bg-gradient-to-b from-purple-500/20 to-blue-500/10 shadow-xl">

                  <div className="flex h-20 w-16 items-center justify-center rounded-2xl border border-emerald-300/20 bg-gradient-to-br from-emerald-300/20 to-blue-400/10">
                    <div className="h-10 w-8 rounded-xl bg-white/10" />
                  </div>

                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    AI Match
                  </p>
                  <p className="text-sm font-semibold text-emerald-300">
                    94%
                  </p>
                </div>

              </div>

              {/* Analysis */}
              <div className="space-y-4">

                {/* Style Tags */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Detected Style
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-200">
                      Minimal
                    </span>

                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-200">
                      Casual
                    </span>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200">
                      Modern
                    </span>
                  </div>

                </div>

                {/* AI Insight */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      AI Insight
                    </p>

                    <span className="text-xs text-emerald-300">
                      Analyzing
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-purple-500 via-blue-400 to-emerald-300" />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Finding outfit combinations that fit your style...
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Recommendation */}
            <div className="relative mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4">

              <div>
                <p className="text-xs text-gray-500">
                  Recommended for you
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Clean & effortless look
                </p>
              </div>

              <div className="rounded-lg bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
                AI Pick
              </div>

            </div>

          </div>

          {/* Floating Mini Card */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">

            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Style Score
            </p>

            <div className="mt-1 flex items-end gap-1">
              <span className="text-2xl font-bold text-white">
                9.4
              </span>

              <span className="mb-1 text-xs text-emerald-300">
                /10
              </span>
            </div>

          </div>

          {/* Floating Accent */}
          <div className="absolute -right-3 top-12 hidden h-16 w-16 rounded-2xl border border-blue-400/10 bg-blue-500/5 blur-[1px] sm:block" />

        </div>
      </div>
    </section>
  );
}

export default Hero;