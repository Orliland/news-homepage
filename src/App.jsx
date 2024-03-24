import "./App.css";
import LatestNews from "./components/LatestNews";
import News from "./components/News";

function App() {
  return (
    <>
      <article className="cover">
        <img
          className="cover__thumbnail"
          src="../images/image-web-3-mobile.jpg"
          alt=""
        />
        <div className="cover__body">
          <h1 className="cover__title">The Bright Future of Web 3.0?</h1>
          <p className="cover__description">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="button">READ MORE</button>
        </div>
      </article>
      <LatestNews />
      <News />
    </>
  );
}

export default App;
