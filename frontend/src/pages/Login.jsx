function Login() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div className="text-2xl font-bold">
          Style<span className="text-purple-500">AI</span>
        </div>

        <a
          href="/"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Home
        </a>
      </div>

      {/* Login Section */}
      <div className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl">
              ✨
            </div>

            <h1 className="text-4xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="mt-3 text-gray-400">
              Sign in to continue your style journey.
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-purple-900/10">

            <form>

              {/* Email */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
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
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-purple-600 py-3.5 font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Login →
              </button>

            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-sm text-gray-500">
                OR
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Register */}
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <a
              href="/register"
              className="font-medium text-purple-400 hover:text-purple-300"
             >
            Create an account
            </a>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;