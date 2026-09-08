import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#08090d] text-white">

      {/* ================= SIDEBAR ================= */}
      <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-white/10 bg-[#0b0c12]">

        {/* Logo */}
        <div className="flex h-[85px] items-center border-b border-white/10 px-8">
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">Style</span>

            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              AI
            </span>
          </button>
        </div>


        {/* Navigation */}
        <div className="flex-1 px-4 py-7">

          <p className="mb-4 px-3 text-[11px] font-semibold tracking-[0.2em] text-gray-600">
            WORKSPACE
          </p>

          <div className="space-y-2">

            <SidebarItem
              icon="⌂"
              text="Dashboard"
              active={true}
              onClick={() => navigate("/dashboard")}
            />

            <SidebarItem
              icon="✦"
              text="AI Stylist"
              onClick={() => navigate("/ai-stylist")}
            />

            <SidebarItem
              icon="♡"
              text="My Style"
            />

            <SidebarItem
              icon="◈"
              text="Recommendations"
            />

          </div>


          {/* Account */}
          <p className="mb-4 mt-10 px-3 text-[11px] font-semibold tracking-[0.2em] text-gray-600">
            ACCOUNT
          </p>

          <SidebarItem
            icon="⚙"
            text="Settings"
          />

          <button
            onClick={handleLogout}
            className="mt-2 flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-gray-400 transition hover:bg-red-500/5 hover:text-red-400"
          >
            <span className="flex h-7 w-7 items-center justify-center text-lg">
              ↪
            </span>

            <span className="text-sm font-medium">
              Logout
            </span>
          </button>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <div className="ml-72 flex-1">

        {/* HEADER */}
        <header className="flex h-[85px] items-center justify-between border-b border-white/10 px-10">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              PERSONAL STYLE DASHBOARD
            </p>

            <h1 className="mt-1 text-xl font-semibold">
              Dashboard
            </h1>
          </div>


          {/* User */}
          <div className="flex items-center gap-3">

            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-white">
                {user?.name || "Style User"}
              </p>

              <p className="text-xs text-gray-500">
                Style AI Member
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-emerald-400 font-semibold text-white">
              {(user?.name || "S").charAt(0).toUpperCase()}
            </div>

          </div>

        </header>


        {/* MAIN */}
        <main className="mx-auto max-w-7xl p-10">


          {/* ================= WELCOME ================= */}
          <section className="mb-10">

            <p className="text-sm font-medium text-gray-500">
              WELCOME BACK
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight">

              Hey {user?.name || "there"}, let's

              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
                {" "}style your day.
              </span>

            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Explore personalized recommendations, discover new outfit ideas
              and build a style that feels completely like you.
            </p>

          </section>


          {/* ================= MAIN ACTION CARD ================= */}
          <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 via-[#11121a] to-[#0c1118] p-8 md:p-10">

            {/* Decorative glow */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-blue-500 to-emerald-400 text-2xl">
                ✦
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                AI POWERED STYLING
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Not sure what to wear?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                Tell Style AI where you're going and what kind of look you want.
                We'll create a personalized style recommendation for you.
              </p>

              <button
                onClick={() => navigate("/ai-stylist")}
                className="mt-7 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Start Styling with AI →
              </button>

            </div>

          </section>


          {/* ================= QUICK STATS ================= */}
          <section className="mt-10">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                  YOUR STYLE JOURNEY
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Overview
                </h3>
              </div>

            </div>


            <div className="grid gap-5 md:grid-cols-3">

              <StatCard
                icon="✦"
                label="Style Analyses"
                value="0"
                color="purple"
              />

              <StatCard
                icon="♡"
                label="Saved Looks"
                value="0"
                color="blue"
              />

              <StatCard
                icon="◈"
                label="Recommendations"
                value="0"
                color="mint"
              />

            </div>

          </section>


          {/* ================= BOTTOM GRID ================= */}
          <section className="mt-10 grid gap-6 lg:grid-cols-2">


            {/* RECENT ACTIVITY */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-7">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                    ACTIVITY
                  </p>

                  <h3 className="mt-2 text-lg font-semibold">
                    Recent Style Activity
                  </h3>
                </div>

                <span className="text-lg text-purple-400">
                  ↗
                </span>

              </div>


              <div className="mt-8 flex flex-col items-center justify-center py-8 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl">
                  ✦
                </div>

                <h4 className="mt-5 font-medium">
                  Your style journey starts here
                </h4>

                <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                  Use the AI Stylist to create your first personalized outfit recommendation.
                </p>

                <button
                  onClick={() => navigate("/ai-stylist")}
                  className="mt-5 text-sm font-medium text-purple-400 transition hover:text-purple-300"
                >
                  Try AI Stylist →
                </button>

              </div>

            </div>


            {/* STYLE PROFILE */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-7">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                STYLE PROFILE
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                Your Personal Style
              </h3>


              <div className="mt-7 space-y-5">

                <ProfileItem
                  label="Favorite Style"
                  value="Not selected yet"
                />

                <ProfileItem
                  label="Preferred Occasion"
                  value="Not selected yet"
                />

                <ProfileItem
                  label="Style Confidence"
                  value="Getting started"
                />

              </div>


              <button
                onClick={() => navigate("/ai-stylist")}
                className="mt-8 w-full rounded-xl border border-white/10 py-3 text-sm font-medium text-gray-400 transition hover:border-purple-500/40 hover:text-white"
              >
                Build Your Style Profile
              </button>

            </div>

          </section>


          {/* ================= EXPLORE ================= */}
          <section className="mt-10">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              EXPLORE STYLE AI
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              What would you like to do?
            </h3>


            <div className="mt-6 grid gap-5 md:grid-cols-3">

              <ActionCard
                icon="✦"
                title="AI Stylist"
                text="Get a personalized outfit recommendation."
                onClick={() => navigate("/ai-stylist")}
              />

              <ActionCard
                icon="♡"
                title="My Style"
                text="Build your personal style profile."
              />

              <ActionCard
                icon="◈"
                title="Recommendations"
                text="Explore your saved style ideas."
              />

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}


/* ================= SIDEBAR ITEM ================= */

function SidebarItem({ icon, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left transition ${
        active
          ? "bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-emerald-400/5 text-purple-300"
          : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
      }`}
    >
      <span className="flex h-7 w-7 items-center justify-center text-lg">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {text}
      </span>
    </button>
  );
}


/* ================= STAT CARD ================= */

function StatCard({ icon, label, value, color }) {

  const colors = {
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/10",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/10",
    mint: "bg-emerald-400/10 text-emerald-300 border-emerald-400/10",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0c0d12] p-6">

      <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${colors[color]}`}>
        <span className="text-xl">
          {icon}
        </span>
      </div>

      <p className="mt-5 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {label}
      </p>

    </div>
  );
}


/* ================= PROFILE ITEM ================= */

function ProfileItem({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-4">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-sm text-gray-300">
        {value}
      </span>

    </div>
  );
}


/* ================= ACTION CARD ================= */

function ActionCard({ icon, title, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group rounded-2xl border border-white/10 bg-[#0c0d12] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.035]"
    >

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-emerald-400/10 text-xl text-purple-300">
        {icon}
      </div>

      <h4 className="mt-5 font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {text}
      </p>

      <span className="mt-5 inline-block text-sm text-purple-400 transition group-hover:translate-x-1">
        Explore →
      </span>

    </button>
  );
}


export default Dashboard;