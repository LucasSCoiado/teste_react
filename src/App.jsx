import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <TopBar />
      <main className="flex-1">
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
