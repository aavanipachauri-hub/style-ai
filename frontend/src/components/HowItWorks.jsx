const steps = [
  {
    number: "01",
    icon: "📸",
    title: "Upload Your Outfit",
    description:
      "Upload a photo of your outfit and let Style AI take a closer look.",
  },
  {
    number: "02",
    icon: "🤖",
    title: "AI Analyzes",
    description:
      "Our AI analyzes your outfit, colors, clothing pieces and overall style.",
  },
  {
    number: "03",
    icon: "✨",
    title: "Get Styled",
    description:
      "Receive personalized outfit ideas and styling recommendations.",
  },
  {
    number: "04",
    icon: "❤️",
    title: "Save Your Looks",
    description:
      "Save your favorite recommendations and build your personal style history.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-black px-6 py-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Simple & Smart
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            How Style AI Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            From your outfit photo to personalized style recommendations
            in just a few simple steps.
          </p>

        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
            >

              {/* Number + Icon */}
              <div className="mb-6 flex items-center justify-between">

                <span className="text-sm font-semibold text-purple-400">
                  {step.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                  {step.icon}
                </div>

              </div>

              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;