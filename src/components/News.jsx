import news from "../utils/news";

function New({ id, title, body, thumbnail }) {
  return (
    <article className="new">
      <img
        src={`../public/images/${thumbnail}`}
        alt="new cover thumbnail"
        className="new__thumbnail"
      />
      <div className="new__main">
        <span className="new__id">{id}</span>
        <h3 className="new__title">{title}</h3>
        <p className="new__body">{body}</p>
      </div>
    </article>
  );
}

function News() {
  const allNews = news.filter((item) => item.type === "new");
  let counter = 0;
  return (
    <section className="news">
      {allNews.map((item) => {
        counter++;
        return (
          <New
            key={item.id}
            id={counter < 9 ? "0" + counter : counter}
            title={item.title}
            body={item.body}
            thumbnail={item.thumbnail}
          />
        );
      })}
    </section>
  );
}

export default News;
