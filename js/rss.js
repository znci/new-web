// get RSS from substack
fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https://znci.substack.com/feed"
)
  .then((res) => res.json())
  .then((data) => {
    const items = data.items;
    const rss = document.querySelector(".rss-feed");

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      const date = new Date(item.pubDate);
      rss.innerHTML += `
        <div class="card">
          <div class="card-title">
            <a href="${item.link}" class="rss-title" target="_blank">
              ${item.title}
              <span class="tag tag-blue">NEW</span>
            </a>
          </div>
          <div class="card-content">
            <div class="rss-description">
              ${item.description}
            </div>

            <div class="rss-date">
              <b>
                ${
                  date.getDate()
                }
                ${date.toLocaleString("default", {
                  month: "short",
                })}
                ${date.getFullYear()}
              </b>
              &bull;
              <b>${date.toLocaleTimeString()}</b>
            </div>

            <div class="card-splitter"></div>
            <div class="rss-author">
              <italic>author: <b>${item.author}</b></italic>
            </div>

            <div class="card-thumbnail">
              <img src="${item.enclosure.link}" loading="lazy" alt="thumbnail">
            </div>
        </div>
      `;
    }
  });
