import "./App.css";

function LatestNew() {
  return (
    <article className="latest-new">
      <h3 className="latest-new__title">Hydrogen VS Electric Cars</h3>
      <p className="latest-new__body">
        Will hydrogen-fueled cars ever catch up to EVs?
      </p>
    </article>
  );
}

function App() {
  return (
    <>
      <section className="latest">
        <h2 className="latest__title">New</h2>
        <LatestNew />
        <hr className="latest__split" />
        <LatestNew />
        <hr className="latest__split" />
        <LatestNew />
      </section>
    </>
  );
}

export default App;
