import "./App.css";
import Header from "./components/Header";
import Cover from "./components/Cover";
import News from "./components/News";
import LatestNews from "./components/LatestNews";

function App() {
  return (
    <>
      <Header />
      <main>
        <Cover />
        <LatestNews />
        <News />
      </main>
    </>
  );
}

export default App;
