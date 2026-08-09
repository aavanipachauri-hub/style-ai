function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white">
              Style<span className="text-purple-500">AI</span>
            </div>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Your personal AI stylist for smarter outfit choices and
              personalized fashion recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-gray-400 transition hover:text-purple-400"
              >
                Home
              </a>

              <a
                href="#how-it-works"
                className="text-gray-400 transition hover:text-purple-400"
              >
                How It Works
              </a>

              <a
                href="#features"
                className="text-gray-400 transition hover:text-purple-400"
              >
                Features
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">
              Style AI
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Discover your style. Get personalized recommendations.
              Dress with confidence.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Style AI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;