import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AIStylist() {
  const navigate = useNavigate();

  const [occasion, setOccasion] = useState("");
  const [style, setStyle] = useState("");
  const [message, setMessage] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  const occasions = [
    "College",
    "Casual Outing",
    "Party",
    "Date",
    "Formal Event",
    "Wedding",
  ];

  const styles = [
    "Minimal",
    "Casual",
    "Streetwear",
    "Elegant",
    "Trendy",
  ];

  const handleGenerate = () => {
    setLoading(true);

    setTimeout(() => {
      const selectedOccasion = occasion || "your occasion";
      const selectedStyle = style || "your preferred style";

      let result = `Based on your preferences, I recommend a ${selectedStyle.toLowerCase()} look for ${selectedOccasion.toLowerCase()}. `;

      result += `Choose comfortable clothing that matches your personality and keep the overall outfit balanced with suitable footwear and simple accessories. `;

      if (message.trim()) {
        result += `Since you mentioned "${message}", your recommendation should focus on that preference as well.`;
      }

      setRecommendation(result);
      setLoading(false);
    }, 1200);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#08090d] text-white">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-white/10 bg-[#0b0c12]">

        {/* LOGO */}
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


        {/* NAVIGATION */}
        <div className="flex-1 px-4 py-7">

          <p className="mb-4 px-3 text-[11px] font-semibold tracking-[0.2em] text-gray-600">
            WORKSPACE
          </p>


          <div className="space-y-2">

            <SidebarItem
              icon="⌂"
              text="Dashboard"
              onClick={() => navigate("/dashboard")}
            />

            <SidebarItem
              icon="✦"
              text="AI Stylist"
              active={true}
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


          {/* ACCOUNT */}
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


      {/* MAIN CONTENT */}
      <div className="ml-72 flex-1">

        {/* HEADER */}
        <header className="flex h-[85px] items-center justify-between border-b border-white/10 px-10">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              AI POWERED STYLING
            </p>

            <h1 className="mt-1 text-xl font-semibold">
              Your AI Stylist
            </h1>
          </div>


          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-purple-500/40 hover:text-white"
          >
            ← Dashboard
          </button>

        </header>


        <main className="mx-auto max-w-6xl p-10">

          {/* PAGE HEADING */}
          <section className="mb-10">

            <p className="text-sm font-medium text-gray-500">
              PERSONALIZED STYLE ASSISTANT
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight">

              Let's create your

              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
                {" "}perfect look.
              </span>

            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Tell Style AI about your occasion and preferences.
              Your personal AI stylist will help you discover an outfit
              that fits your style.
            </p>

          </section>


          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">


            {/* LEFT FORM */}
            <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-8">


              {/* OCCASION */}
              <div>

                <p className="text-lg font-semibold">
                  What are you dressing for?
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Select the occasion.
                </p>


                <div className="mt-5 flex flex-wrap gap-3">

                  {occasions.map((item) => (

                    <button
                      key={item}
                      onClick={() => setOccasion(item)}
                      className={`rounded-xl border px-5 py-3 text-sm transition ${
                        occasion === item
                          ? "border-purple-500 bg-purple-500/15 text-purple-300"
                          : "border-white/10 text-gray-400 hover:border-purple-500/40 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>


              {/* STYLE */}
              <div className="mt-10">

                <p className="text-lg font-semibold">
                  Choose your style
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  What kind of look do you prefer?
                </p>


                <div className="mt-5 flex flex-wrap gap-3">

                  {styles.map((item) => (

                    <button
                      key={item}
                      onClick={() => setStyle(item)}
                      className={`rounded-xl border px-5 py-3 text-sm transition ${
                        style === item
                          ? "border-blue-500 bg-blue-500/10 text-blue-300"
                          : "border-white/10 text-gray-400 hover:border-blue-500/40 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>


              {/* MESSAGE */}
              <div className="mt-10">

                <label className="mb-3 block text-lg font-semibold">
                  Anything else?
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Example: I want something comfortable but stylish for a college party..."
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-7 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60"
                />

              </div>


              {/* BUTTON */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="mt-7 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Creating your look..."
                  : "Generate My Style Recommendation ✦"}
              </button>

            </div>


            {/* RIGHT PANEL */}
            <div className="space-y-6">


              {/* AI CARD */}
              <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 via-[#11121a] to-[#0c1118] p-7">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 text-2xl">
                    ✦
                  </div>


                  <div>

                    <h3 className="font-semibold">
                      Style AI Assistant
                    </h3>

                    <p className="mt-1 text-xs text-emerald-400">
                      ● Ready to style you
                    </p>

                  </div>

                </div>


                <p className="mt-6 text-sm leading-7 text-gray-400">
                  I'll combine your preferences, occasion and personal style
                  to create a recommendation just for you.
                </p>

              </div>


              {/* STYLE TIP */}
              <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-7">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                  STYLE TIP
                </p>

                <h3 className="mt-3 text-lg font-semibold">
                  The best outfits feel natural.
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Fashion trends are great, but the best style is something
                  that makes you feel comfortable and confident.
                </p>

              </div>


              {/* SELECTION */}
              <div className="rounded-3xl border border-white/10 bg-[#0c0d12] p-7">

                <h3 className="font-semibold">
                  Your Selection
                </h3>


                <div className="mt-5 space-y-4">

                  <SelectionItem
                    label="Occasion"
                    value={occasion || "Not selected"}
                  />

                  <SelectionItem
                    label="Style"
                    value={style || "Not selected"}
                  />

                </div>

              </div>

            </div>

          </div>


          {/* RESULT */}
          {recommendation && (

            <section className="mt-8 overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0c0d12]">

              <div className="border-b border-white/10 px-8 py-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                    ✦
                  </div>


                  <div>

                    <h3 className="font-semibold">
                      Your AI Style Recommendation
                    </h3>

                    <p className="text-xs text-gray-500">
                      Personalized for your preferences
                    </p>

                  </div>

                </div>

              </div>


              <div className="p-8">

                <p className="max-w-3xl text-lg leading-8 text-gray-300">
                  {recommendation}
                </p>


                <div className="mt-8 flex flex-wrap gap-3">

                  <Tag text={occasion || "Personalized"} />

                  <Tag text={style || "AI Styled"} />

                  <Tag text="Style AI Match" />

                </div>

              </div>

            </section>

          )}

        </main>

      </div>

    </div>
  );
}


/* SIDEBAR ITEM */

function SidebarItem({ icon, text, active, onClick }) {
  return (

    <button
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left transition ${
        active
          ? "bg-gradient-to-r from-purple-500/20 to-purple-500/5 text-purple-300"
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


/* SELECTION ITEM */

function SelectionItem({ label, value }) {
  return (

    <div className="flex items-center justify-between border-b border-white/5 pb-4">

      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-sm text-purple-300">
        {value}
      </span>

    </div>

  );
}


/* TAG */

function Tag({ text }) {
  return (

    <span className="rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-300">
      {text}
    </span>

  );
}


export default AIStylist;