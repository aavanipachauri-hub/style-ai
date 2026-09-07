import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data);
        return;
      }

      setMessage("Account created successfully! 🎉");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.error("Register error:", error);
      setMessage("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const isSuccess = message.includes("successfully");

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-[100px]" />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/60 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">Style</span>

            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              AI
            </span>
          </a>

          {/* Back */}
          <a
            href="/"
            className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Home
          </a>

        </div>

      </header>

      {/* Register Area */}
      <main className="relative z-10 flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-14">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">

            {/* AI Indicator */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-400/10 shadow-xl shadow-blue-900/20">

              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-emerald-300 shadow-lg shadow-blue-500/30" />

            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Join Style AI
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Create Your
              <br />

              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
                Style Profile
              </span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Start your personalized style journey with AI.
            </p>

          </div>

          {/* Register Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-8">

            {/* Card Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <form onSubmit={handleRegister} className="relative">

              {/* Name */}
              <div className="mb-5">

                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-purple-400/60 focus:bg-white/[0.04] focus:ring-2 focus:ring-purple-500/10"
                />

              </div>

              {/* Email */}
              <div className="mb-5">

                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-blue-400/60 focus:bg-white/[0.04] focus:ring-2 focus:ring-blue-500/10"
                />

              </div>

              {/* Password */}
              <div className="mb-5">

                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-purple-400/60 focus:bg-white/[0.04] focus:ring-2 focus:ring-purple-500/10"
                />

              </div>

              {/* Confirm Password */}
              <div className="mb-6">

                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-emerald-400/60 focus:bg-white/[0.04] focus:ring-2 focus:ring-emerald-500/10"
                />

              </div>

              {/* Message */}
              {message && (
                <div
                  className={`mb-5 rounded-xl border px-4 py-3 text-center text-sm ${
                    isSuccess
                      ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                      : "border-red-400/20 bg-red-400/5 text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="group w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 py-3.5 font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Creating Account..."
                ) : (
                  <>
                    Create Account

                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </button>

            </form>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-gray-400">

              Already have an account?{" "}

              <a
                href="/login"
                className="font-medium text-purple-400 transition hover:text-emerald-300"
              >
                Login
              </a>

            </p>

          </div>

          {/* Bottom Note */}
          <p className="mt-6 text-center text-xs text-gray-600">
            Create your profile and let AI understand your style.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Register;