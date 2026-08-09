const features = [
  {
    icon: "✨",
    title: "AI Style Analysis",
    description:
      "Upload your outfit and let AI understand your clothing, colors and overall style.",
  },
  {
    icon: "🎯",
    title: "Personalized Recommendations",
    description:
      "Get outfit suggestions tailored to your preferences, style and occasion.",
  },
  {
    icon: "👗",
    title: "Wardrobe Insights",
    description:
      "Discover new ways to style the clothes you already own.",
  },
  {
    icon: "❤️",
    title: "Save & Style History",
    description:
      "Save your favorite looks and revisit your previous style recommendations.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-black px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Powerful Features
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Everything You Need to
            <span className="text-purple-500">
              {" "}Style Smarter
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Style AI combines intelligent analysis with personalized
            recommendations to make styling easier.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.06]"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl transition group-hover:bg-purple-500/20">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;