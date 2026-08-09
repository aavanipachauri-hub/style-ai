import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Your Personal{" "}
            <span className="text-purple-500">AI Stylist</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Discover your style with AI-powered outfit analysis and
            personalized fashion recommendations.
          </p>

          <button className="mt-8 rounded-lg bg-purple-600 px-7 py-3 font-semibold hover:bg-purple-700">
            Analyze My Style
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;