function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Style<span className="text-purple-500">AI</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-gray-300 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-gray-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-gray-300 transition hover:text-white"
          >
            How It Works
          </a>
        </div>

        {/* Login Button */}
        <button className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white transition hover:bg-purple-700">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;