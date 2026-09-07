const steps = [
  {
    number: "01",
    label: "UPLOAD",
    title: "Upload Your Outfit",
    description:
      "Upload a photo of your outfit and let Style AI take a closer look.",
    accent: "from-purple-500 to-purple-400",
  },
  {
    number: "02",
    label: "ANALYZE",
    title: "AI Analyzes",
    description:
      "Our AI analyzes your outfit, colors, clothing pieces and overall style.",
    accent: "from-purple-400 to-blue-400",
  },
  {
    number: "03",
    label: "PERSONALIZE",
    title: "Get Styled",
    description:
      "Receive personalized outfit ideas and styling recommendations.",
    accent: "from-blue-400 to-emerald-300",
  },
  {
    number: "04",
    label: "SAVE",
    title: "Save Your Looks",
    description:
      "Save your favorite recommendations and build your personal style history.",
    accent: "from-emerald-300 to-emerald-400",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Simple & Smart
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            How Style AI
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            From your outfit photo to personalized style recommendations
            in just a few simple steps.
          </p>

        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting Line - Desktop */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[46px] hidden h-px bg-gradient-to-r from-purple-500/40 via-blue-400/40 to-emerald-400/40 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative"
              >

                {/* Step Number */}
                <div className="relative z-10 flex items-center justify-between">

                  <div
                    className={`flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/10 bg-black shadow-xl`}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.accent} bg-opacity-10`}
                    >
                      <span className="text-lg font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-gray-500">
                    {step.label}
                  </span>

                </div>

                {/* Content Card */}
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/15 group-hover:bg-white/[0.045]">

                  {/* Accent */}
                  <div
                    className={`mb-6 h-1 w-12 rounded-full bg-gradient-to-r ${step.accent} transition-all duration-500 group-hover:w-20`}
                  />

                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {step.description}
                  </p>

                  {/* Bottom Arrow */}
                  <div className="mt-7 flex items-center gap-2 text-xs font-medium text-gray-600 transition group-hover:text-gray-300">
                    <span>Style AI</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;