import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const text = await response.text();

      if (!response.ok) {
        setMessage(text);
        return;
      }

      const data = JSON.parse(text);

      localStorage.setItem("user", JSON.stringify(data));

      setMessage("Login successful! 🎉");

      console.log("Logged in user:", data);
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">Style</span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              AI
            </span>
          </a>

          <a
            href="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← Home
          </a>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-16 px-6 py-14 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:block">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            PERSONALIZED STYLING
          </p>

          <h1 className="max-w-lg text-5xl font-bold leading-tight">
            Style that
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              feels like you.
            </span>
          </h1>

          <p className="mt-6 max-w-md leading-7 text-gray-400">
            Sign in to explore personalized outfit recommendations,
            wardrobe insights and your saved style journey.
          </p>

          {/* Product Preview */}
          <div className="relative mt-10 max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-5">

            {/* Top */}
            <div className="flex items-center justify-between">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
                  Style AI
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Personal Style Profile
                </p>
              </div>

              <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[10px] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AI Ready
              </span>

            </div>

            {/* Preview */}
            <div className="mt-5 grid grid-cols-3 gap-3">

              <div className="h-28 rounded-2xl border border-purple-400/10 bg-gradient-to-br from-purple-500/20 to-black" />

              <div className="h-28 rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/20 to-black" />

              <div className="h-28 rounded-2xl border border-emerald-400/10 bg-gradient-to-br from-emerald-400/15 to-black" />

            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">

              <span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300">
                Minimal
              </span>

              <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
                Casual
              </span>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                Modern
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="mx-auto w-full max-w-md">

          {/* Mobile Brand Heading */}
          <div className="mb-8 lg:hidden">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
              PERSONALIZED STYLING
            </p>

            <h1 className="text-4xl font-bold">
              Welcome back.
            </h1>

          </div>

          {/* Form Heading */}
          <div className="mb-7">

            <h2 className="text-2xl font-semibold text-white">
              Sign in
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Access your Style AI account.
            </p>

          </div>

          {/* Form Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 shadow-2xl shadow-purple-950/10">

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-5">

                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/10"
                />

              </div>

              {/* Password */}
              <div className="mb-6">

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-sm font-medium text-gray-300">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-gray-500 transition hover:text-purple-400"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none transition focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/10"
                />

              </div>

              {/* Message */}
              {message && (
                <div
                  className={`mb-5 rounded-xl border px-4 py-3 text-center text-sm ${
                    message.includes("successful")
                      ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                      : "border-red-400/20 bg-red-400/5 text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Sign in →"}
              </button>

            </form>

            {/* Register */}
            <div className="mt-7 border-t border-white/10 pt-6 text-center">

              <p className="text-sm text-gray-500">
                Don't have an account?{" "}

                <a
                  href="/register"
                  className="font-medium text-purple-400 transition hover:text-emerald-300"
                >
                  Create one
                </a>
              </p>

            </div>

          </div>

          <p className="mt-5 text-center text-xs text-gray-700">
            Style AI · Personalized styling powered by AI
          </p>

        </div>

      </main>
    </div>
  );
}

export default Login;