function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-14">

      {/* Subtle Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>

            <a
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-white">Style</span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
                AI
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Your personal AI stylist for smarter outfit choices and
              personalized fashion recommendations.
            </p>

            {/* Brand Tag */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-xs text-gray-500">
                Style smarter with AI
              </span>
            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#home"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-purple-300"
              >
                Home
              </a>

              <a
                href="#how-it-works"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-blue-300"
              >
                How It Works
              </a>

              <a
                href="#features"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                Features
              </a>

            </div>

          </div>

          {/* Product */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Style AI
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Discover your style. Get personalized recommendations.
              Dress with confidence.
            </p>

            {/* Small Product Indicator */}
            <div className="mt-6 flex items-center gap-3">

              <div className="h-10 w-10 rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

              <div>
                <p className="text-xs font-medium text-gray-300">
                  AI-Powered Styling
                </p>

                <p className="mt-1 text-[11px] text-gray-600">
                  Personalized for you
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs text-gray-600">
            © 2026 Style AI. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Built with AI & creativity.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;