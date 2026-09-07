const features = [
  {
    number: "01",
    label: "ANALYZE",
    title: "AI Style Analysis",
    description:
      "Upload your outfit and let AI understand your clothing, colors and overall style.",
    accent: "from-purple-500 to-blue-500",
  },
  {
    number: "02",
    label: "DISCOVER",
    title: "Personalized Recommendations",
    description:
      "Get outfit suggestions tailored to your preferences, style and occasion.",
    accent: "from-blue-500 to-emerald-400",
  },
  {
    number: "03",
    label: "ORGANIZE",
    title: "Wardrobe Insights",
    description:
      "Discover new ways to style the clothes you already own.",
    accent: "from-emerald-400 to-purple-500",
  },
  {
    number: "04",
    label: "REMEMBER",
    title: "Save & Style History",
    description:
      "Save your favorite looks and revisit your previous style recommendations.",
    accent: "from-purple-500 to-emerald-400",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              Style Smarter
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Style AI combines intelligent analysis with personalized
            recommendations to make styling easier.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:bg-white/[0.045]"
            >

              {/* Hover Glow */}
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
              />

              {/* Top Row */}
              <div className="relative flex items-center justify-between">

                <span className="text-sm font-semibold tracking-widest text-gray-600">
                  {feature.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-gray-500">
                  {feature.label}
                </span>

              </div>

              {/* Icon Visual */}
              <div className="relative mt-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02]">

                <div
                  className={`h-7 w-7 rounded-xl bg-gradient-to-br ${feature.accent} opacity-90 transition duration-500 group-hover:scale-110`}
                />

                <div className="absolute h-3 w-3 rounded-full bg-white/70" />

              </div>

              {/* Content */}
              <h3 className="relative mt-7 text-xl font-semibold leading-snug text-white">
                {feature.title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-gray-400">
                {feature.description}
              </p>

              {/* Bottom Line */}
              <div className="relative mt-8 h-px w-full overflow-hidden bg-white/10">
                <div
                  className={`h-full w-0 bg-gradient-to-r ${feature.accent} transition-all duration-500 group-hover:w-full`}
                />
              </div>

              {/* Learn More */}
              <div className="relative mt-4 flex items-center gap-2 text-xs font-medium text-gray-500 transition group-hover:text-white">
                <span>Explore feature</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;