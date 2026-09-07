function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="group text-2xl font-bold tracking-tight"
        >
          <span className="text-white">Style</span>
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
            AI
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">

          <a
            href="#home"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
          >
            Home
          </a>

          <a
            href="#features"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
          >
            How It Works
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Small AI Status */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

            <span className="text-xs font-medium text-gray-400">
              AI Ready
            </span>
          </div>

          {/* Login */}
          <a
            href="/login"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/20"
          >
            Login
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;