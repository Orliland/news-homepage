import news from "../utils/news";

function LatestNew({ latestNew }) {
  return (
    <article className="latest-new">
      <h3 className="latest-new__title">{latestNew.title}</h3>
      <p className="latest-new__body">{latestNew.body}</p>
    </article>
  );
}

function LatestNews() {
  let counter = 0;
  const latestNews = news.filter((item) => item.type === "latest");
  return (
    <section className="latest">
      <h2 className="latest__title">New</h2>
      {latestNews.map((item) => {
        counter++;
        return counter < latestNews.length ? (
          <>
            <LatestNew key={item.id} latestNew={item} />
            <hr className="latest__split" />
          </>
        ) : (
          <LatestNew key={item.id} latestNew={item} />
        );
      })}
    </section>
  );
}

export default LatestNews;
