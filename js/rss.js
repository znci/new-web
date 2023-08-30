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

      rss.innerHTML += `
				<div class="rss-item">
					<a href="${item.link}" class="rss-title">${item.title}</a>
					<br><span class="rss-date">${new Date(
            item.pubDate
          ).toLocaleDateString()}</span> &bull;
					<span class="rss-desc">${item.description}</span>
				</div>
			`;
    }
  });
