import {
  component,
  html,
  useEffect,
  useState,
} from "https://cdn.pika.dev/haunted";

function RSSFeed() {
  const [rss, setRSS] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://znci.substack.com/feed"
    )
      .then((res) => res.json())
      .then((data) => setRSS(data.items));
  }, []);

  return html` <section class="section" id="rss">
    <span class="large-title">What's new @ znci</span>
    <div class="rss-feed">
      ${rss.map(
        (item) => html`
          <div class="rss-item">
            <a href="${item.link}" class="rss-title">${item.title}</a>
            <br /><span class="rss-date"
              >${new Date(item.pubDate).toLocaleDateString()}</span
            >
            &bull;
            <span class="rss-desc">${item.description}</span>
          </div>
        `
      )}
    </div>
  </section>`;
}

customElements.define(
  "zncidev-rss-feed",
  component(RSSFeed, {
    useShadowDOM: false,
  })
);
