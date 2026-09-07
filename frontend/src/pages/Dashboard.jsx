import { useState } from "react";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "AI Stylist", icon: "✦" },
    { name: "My Style", icon: "♡" },
    { name: "Recommendations", icon: "✧" },
  ];

  return (
    <div className="h-screen overflow-hidden bg-black text-white">

      {/* ================= MOBILE SIDEBAR OVERLAY ================= */}

      {mobileMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-white/10 bg-[#080808] transition-transform duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >

        {/* Logo */}
        <div className="flex h-20 items-center border-b border-white/10 px-7">
          <div className="text-2xl font-bold tracking-tight">
            Style<span className="text-purple-500">AI</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-7">

          <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600">
            Workspace
          </p>

          <nav className="space-y-1">

            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  setMobileMenu(false);
                }}
                className={`flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-sm transition-all ${
                  activeMenu === item.name
                    ? "bg-purple-500/15 text-purple-400 shadow-sm shadow-purple-900/20"
                    : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-lg ${
                    activeMenu === item.name
                      ? "bg-purple-500/10"
                      : "bg-transparent"
                  }`}
                >
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </button>
            ))}

          </nav>

          <p className="mb-4 mt-10 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600">
            Account
          </p>

          <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-sm text-gray-400 transition hover:bg-white/[0.04] hover:text-white">
            <span className="flex h-8 w-8 items-center justify-center text-lg">
              ⚙
            </span>
            Settings
          </button>

          <button className="mt-1 flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-sm text-gray-400 transition hover:bg-white/[0.04] hover:text-white">
            <span className="flex h-8 w-8 items-center justify-center text-lg">
              ↪
            </span>
            Logout
          </button>

        </div>

        {/* Sidebar Bottom */}
        <div className="border-t border-white/10 p-4">

          <div className="rounded-xl border border-purple-500/10 bg-purple-500/[0.05] p-4">

            <p className="text-xs font-medium text-purple-300">
              StyleAI Premium
            </p>

            <p className="mt-1 text-[11px] leading-5 text-gray-500">
              Unlock more personalized style recommendations.
            </p>

            <button className="mt-3 text-xs font-medium text-purple-400 hover:text-purple-300">
              Explore →
            </button>

          </div>

        </div>

      </aside>


      {/* ================= MAIN AREA ================= */}

      <div className="h-screen lg:pl-64">

        {/* ================= TOP NAVBAR ================= */}

        <header className="fixed left-0 right-0 top-0 z-30 h-20 border-b border-white/10 bg-black/90 backdrop-blur-xl lg:left-64">

          <div className="flex h-full items-center justify-between px-5 lg:px-8">

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenu(true)}
              className="mr-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-300 lg:hidden"
            >
              ☰
            </button>

            {/* Search */}
            <div className="hidden w-full max-w-md md:block">

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">

                <span className="text-gray-500">
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="Search your style..."
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
                />

                <span className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-gray-600">
                  /
                </span>

              </div>

            </div>

            {/* Right Side */}
            <div className="ml-auto flex items-center gap-4">

              {/* Notification */}
              <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:bg-white/[0.05] hover:text-white">
                ♢

                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-purple-500" />
              </button>

              {/* Divider */}
              <div className="hidden h-8 w-px bg-white/10 sm:block" />

              {/* Profile */}
              <button className="flex items-center gap-3">

                <div className="hidden text-right sm:block">

                  <p className="text-sm font-semibold">
                    Aavani
                  </p>

                  <p className="text-[11px] text-gray-500">
                    Style Explorer
                  </p>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 font-semibold shadow-lg shadow-purple-900/20">
                  A
                </div>

                <span className="hidden text-xs text-gray-500 sm:block">
                  ▾
                </span>

              </button>

            </div>

          </div>

        </header>


        {/* ================= SCROLLABLE CONTENT ================= */}

        <main className="h-screen overflow-y-auto pt-20">

          <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-7 lg:px-10">

            {/* ================= WELCOME ================= */}

            <section className="mb-8">

              <p className="mb-2 text-sm font-medium text-purple-400">
                YOUR PERSONAL STYLE SPACE
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Good to see you, Aavani
                <span className="ml-2">👋</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                Discover new looks, explore your personal style and get
                AI-powered fashion recommendations made just for you.
              </p>

            </section>


            {/* ================= AI HERO ================= */}

            <section className="relative mb-7 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#18002c] via-[#100018] to-[#080808]">

              {/* Glow */}
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

              <div className="relative z-10 p-7 sm:p-9 lg:p-10">

                <div className="max-w-3xl">

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-purple-300">
                    <span>✦</span>
                    AI STYLE ASSISTANT
                  </div>

                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                    Your personal AI stylist
                    <br className="hidden sm:block" />
                    is ready.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
                    Tell StyleAI what you're looking for and get personalized
                    outfit ideas, styling tips and recommendations based on
                    your unique preferences.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <button
                      onClick={() => setActiveMenu("AI Stylist")}
                      className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold transition hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-900/30"
                    >
                      Start Styling →
                    </button>

                    <button
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
                    >
                      Explore Looks
                    </button>

                  </div>

                </div>

              </div>

            </section>


            {/* ================= STATS ================= */}

            <section className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {/* Style Score */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
                      Style Score
                    </p>

                    <p className="mt-3 text-3xl font-bold">
                      82
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    ✦
                  </div>

                </div>

                <div className="mt-4 flex items-center justify-between text-xs">

                  <span className="text-gray-500">
                    Your current score
                  </span>

                  <span className="text-green-400">
                    +8%
                  </span>

                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500" />
                </div>

              </div>


              {/* Saved Looks */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
                      Looks Saved
                    </p>

                    <p className="mt-3 text-3xl font-bold">
                      12
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                    ♡
                  </div>

                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Your favorite looks
                </p>

              </div>


              {/* Recommendations */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
                      AI Recommendations
                    </p>

                    <p className="mt-3 text-3xl font-bold">
                      24
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    ✧
                  </div>

                </div>

                <p className="mt-4 text-xs text-gray-500">
                  Personalized for you
                </p>

              </div>


              {/* Style Level */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
                      Style Level
                    </p>

                    <p className="mt-3 text-2xl font-bold">
                      Explorer
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    ★
                  </div>

                </div>

                <p className="mt-4 text-xs text-purple-400">
                  Keep discovering
                </p>

              </div>

            </section>


            {/* ================= TWO COLUMN ================= */}

            <section className="grid gap-6 xl:grid-cols-3">

              {/* Your Style */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 xl:col-span-2">

                <div className="flex items-start justify-between">

                  <div>
                    <h2 className="text-lg font-semibold">
                      Your Style
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                      Your current style preferences
                    </p>
                  </div>

                  <button className="text-sm font-medium text-purple-400 hover:text-purple-300">
                    Edit
                  </button>

                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    ["👕", "Casual"],
                    ["🧥", "Streetwear"],
                    ["👔", "Formal"],
                    ["👟", "Minimal"],
                  ].map(([icon, name]) => (
                    <button
                      key={name}
                      className="rounded-xl border border-white/10 bg-black p-5 text-center transition hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
                    >
                      <div className="text-3xl">
                        {icon}
                      </div>

                      <p className="mt-3 text-sm font-medium">
                        {name}
                      </p>

                      <p className="mt-1 text-[10px] text-gray-600">
                        Preferred
                      </p>
                    </button>
                  ))}

                </div>

              </div>


              {/* Quick Actions */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                <h2 className="text-lg font-semibold">
                  Quick Actions
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Start creating your next look
                </p>

                <button
                  onClick={() => setActiveMenu("AI Stylist")}
                  className="mt-6 flex w-full items-center gap-4 rounded-xl border border-purple-500/20 bg-purple-500/[0.08] p-4 text-left transition hover:bg-purple-500/[0.13]"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-lg">
                    ✦
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Ask AI Stylist
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Get instant style advice
                    </p>
                  </div>

                </button>


                <button className="mt-3 flex w-full items-center gap-4 rounded-xl border border-white/10 bg-black p-4 text-left transition hover:border-white/20">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-lg">
                    📸
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Analyze Outfit
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Upload a look for analysis
                    </p>
                  </div>

                </button>

              </div>

            </section>


            {/* ================= RECOMMENDATIONS ================= */}

            <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6">

              <div className="flex flex-wrap items-center justify-between gap-3">

                <div>
                  <h2 className="text-lg font-semibold">
                    Recommended For You
                  </h2>

                  <p className="mt-1 text-sm text-gray-600">
                    AI-curated ideas based on your style
                  </p>
                </div>

                <button
                  onClick={() => setActiveMenu("Recommendations")}
                  className="text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  View All →
                </button>

              </div>


              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {/* Look 1 */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black transition hover:-translate-y-1 hover:border-purple-500/30">

                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-purple-950/50 via-gray-900 to-black text-7xl transition group-hover:scale-[1.02]">
                    👕
                  </div>

                  <div className="p-5">

                    <div className="flex items-center justify-between">

                      <h3 className="font-semibold">
                        Everyday Casual
                      </h3>

                      <span className="text-xs text-purple-400">
                        94%
                      </span>

                    </div>

                    <p className="mt-2 text-xs leading-5 text-gray-600">
                      Comfortable pieces styled for your everyday look.
                    </p>

                  </div>

                </div>


                {/* Look 2 */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black transition hover:-translate-y-1 hover:border-purple-500/30">

                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-fuchsia-950/40 via-gray-900 to-black text-7xl transition group-hover:scale-[1.02]">
                    🧥
                  </div>

                  <div className="p-5">

                    <div className="flex items-center justify-between">

                      <h3 className="font-semibold">
                        Urban Street
                      </h3>

                      <span className="text-xs text-purple-400">
                        91%
                      </span>

                    </div>

                    <p className="mt-2 text-xs leading-5 text-gray-600">
                      A modern streetwear combination matched to your style.
                    </p>

                  </div>

                </div>


                {/* Look 3 */}
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black transition hover:-translate-y-1 hover:border-purple-500/30">

                  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-violet-950/40 via-gray-900 to-black text-7xl transition group-hover:scale-[1.02]">
                    👔
                  </div>

                  <div className="p-5">

                    <div className="flex items-center justify-between">

                      <h3 className="font-semibold">
                        Smart Formal
                      </h3>

                      <span className="text-xs text-purple-400">
                        88%
                      </span>

                    </div>

                    <p className="mt-2 text-xs leading-5 text-gray-600">
                      A clean and polished look for important occasions.
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* Bottom spacing */}
            <div className="h-10" />

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;