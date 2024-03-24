import "./App.css";
import Cover from "./components/Cover";
import News from "./components/News";
import LatestNews from "./components/LatestNews";

function App() {
  return (
    <main>
      <Cover />
      <LatestNews />
      <News />
    </main>
  );
}

export default App;
