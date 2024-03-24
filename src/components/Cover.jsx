import news from "../utils/news";

function Cover() {
  const cover = news.filter((item) => item.type === "cover")[0];
  return (
    <article className="cover">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`../images/${cover.thumbnailAlt}`}
        />
        <img
          className="cover__thumbnail"
          src={`../images/${cover.thumbnail}`}
          alt=""
        />
      </picture>

      <div className="cover__body">
        <h1 className="cover__title">{cover.title}</h1>
        <p className="cover__description">{cover.body}</p>
        <button className="button">READ MORE</button>
      </div>
    </article>
  );
}

export default Cover;
