const memberList = [
  {
    name: "zNotChill",
    socials: {
      github: "zNotChill",
      discord: "chxll#3424",
      gitlab: "zNotChill",
      email: "znotchill@znci.dev",
    },
    country: {
      country: "gb",
      timezone: "BST",
    },
    pfp: "https://github.com/zNotChill.png",
    badge: "founder",
    note: "zNotChill is the owner and founder of znci. They control most of the operations and control development.",
  },
  {
    name: "blockarchitech",
    socials: {
      github: "blockarchitech",
      email: "block@znci.dev",
      website: "blockarchitech.com",
      gitlab: "blockarchitech",
    },
    pfp: "https://github.com/blockarchitech.png",
    country: {
      country: "USA",
      timezone: "EST",
    },
    badge: "co-founder",
    note: "blockarchitech handles project management, development, and CI/CD for znci.",
  },
  {
    name: "Cerq",
    socials: {
      github: "Cerqiest",
      discord: "cerq#0001",
      email: "cerq@znci.dev",
    },
    country: {
      country: "N/A",
      timezone: "N/A",
    },
    pfp: "https://github.com/cerqiest.png",
    badge: "developer, founding member",
    note: "Cerq is the staffing manager, support manager, and a developer for znci. They also handle social media and community interaction.",
  },
  {
    name: "grcq",
    socials: {
      github: "grcq",
      discord: "grcq#4516",
      website: "grcq.dev",
    },
    country: {
      country: "no",
      timezone: "CET",
      email: "grcq@znci.dev",
    },
    pfp: "https://github.com/grcq.png",
    badge: "java developer",
    note: "grcq is a developer for znci. They control most Java development at znci.",
  },
  {
    name: "unium",
    socials: {
      github: "TheUnium",
      email: "unium@znci.dev",
      website: "theunium.github.io",
      discord: "unium#6850",
      youtube: "@leunium",
    },
    pfp: "https://github.com/theunium.png",
    country: {
      country: "india",
      timezone: "N/A",
    },
    badge: "developer, designer, artist",
    note: "unium is a developer for znci. They control most of the PHP site development at znci. They are also responsible for creating pixel art.",
  },
];

const projectList = [
  {
    name: "Paint",
    tags: [
      {
        tag: "OSS",
        color: "green",
      },
    ],
    icon: "./img/paint.svg",
    url: "https://github.com/znci/paint",
    about: "A free drawing app with PNG, SVG and JPG support.",
  },
  {
    name: "Web",
    tags: [
      {
        tag: "OSS",
        color: "green",
      },
    ],
    icon: "./img/placeholder.svg",
    url: "https://github.com/znci/web",
    about: "A simple website creator.",
  },
  {
    name: "Acid",
    tags: [
      {
        tag: "OSS",
        color: "green",
      },
    ],
    icon: "./img/placeholder.svg",
    url: "https://github.com/zNotChill/acid",
    about: "Electron terminal emulator for fun. (WIP)",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  try {
    const members = memberList;

    for (let i = 0; i < members.length; i++) {
      let badges = "";
      let badgeNum = 0;

      const u = members[i];
      const socials = members[i].socials;

      for (const b in socials) {
        let isrc = /* html */ `<i class="fa-brands fa-${b} fa-fw"></i>`;

        if (b === "website")
          isrc = /* html */ `<i class="fa-solid fa-globe fa-fw"></i>`;
        if (b === "email")
          isrc = /* html */ `<i class="fa-solid fa-envelope fa-fw"></i>`;

        badges += /* html */ `
          <div class="social">
            ${isrc}
            <span class="social-text">
              ${socials[b]}
            </span>
          </div>`;
        badgeNum++;
      }

      document.querySelector(".member-list").innerHTML += /* html */ `
        <div class="card member">
          <div class="card-title">
            <img class="rounded" src="${u.pfp}" loading="lazy" alt="${u.name}">
          
            <div class="name">
              ${u.name}
            </div>
            <div class="badge">
              <italic>${u.badge}</italic>
            </div>
          </div>
          <div class="card-content">
            <div class="note">
              ${u.note}
            </div>
          </div>
          <div class="card-footer">
            <div class="badges">
              ${badges}
            </div>
          </div>
        </div>
			`;
    }
  } catch (error) {
    console.error("Failed to initalize the member list:", error);
  }

  projectList.forEach((project) => {
    let tags = "";

    project.tags.forEach((tag) => {
      tags += /* html */ `
				<span class="tag tag-${tag.color}">${tag.tag}</span>
			`;
    });

    document.querySelector(".project-list").innerHTML += /* html */ `
			<div class="card">
				<div class="card-title">
					<img src="${project.icon}" loading="lazy" alt="${project.name}">
				
          <div class="gap-15">
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">
              <h3>${project.name}</h3>
            </a>
            <span class="small-sub-cl">${tags}</span>
          </div>
        </div>
				<div class="card-content">
					<div class="project-content">
						${project.about}
					</div>
				</div>
			</div>
		`;
  });
});
