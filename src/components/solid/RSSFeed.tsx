import { createResource } from "solid-js";

type Feed = { title: string; description: string; link: string };

type items = {
  title: string;
  pubDate: Date;
  link: string;
  author: string;
  description: string;
  enclosure: {
    link: string;
  };
}[];

export function RSSFeed() {
  const [feed] = createResource(async () => {
    const json = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://znci.substack.com/feed",
    ).then((res) => res.json());

    const feed = json.feed as Feed;
    const items = json.items as items;

    console.log(feed);

    items.forEach((item) => {
      item.pubDate = new Date(item.pubDate);
    });

    return { feed, items };
  });

  return (
    <>
      {feed.loading && <span>RSS feed is loading...</span>}
      {feed.error && <span>RSS feed failed to load: {feed.error.message}</span>}

      {feed()?.items.map((item) => (
        <div class="card">
          <div class="card-title">
            <a href={item.link} class="rss-title" target="_blank">
              {item.title}
              <span class="tag tag-blue">NEW</span>
            </a>
          </div>

          <div class="card-content">
            <div class="rss-description">{item.description}</div>

            <div class="rss-date">
              <b>
                {item.pubDate.getDate()}{" "}
                {item.pubDate.toLocaleString("default", {
                  month: "short",
                })}{" "}
                {item.pubDate.getFullYear()}
              </b>
              &bull;
              <b>{item.pubDate.toLocaleTimeString()}</b>
            </div>

            <div class="card-splitter"></div>
            <div class="rss-author">
              <em>
                author: <b>{item.author}</b>
              </em>
            </div>

            <div class="card-thumbnail">
              <img
                src={item.enclosure.link}
                loading="lazy"
                alt="thumbnail"
              ></img>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
