const memberList = [
  {
    name: "zNotChill",
    pfp: "https://github.com/zNotChill.png",
    badge: "founder",
    joined: "August 2021",
    note: "zNotChill is the owner and founder of znci. He controls most of the operations and development.",
    socials: {
      discord: "@chxll",
      email: "znotchill@znci.dev",
      github: "zNotChill",
      gitlab: "zNotChill",
    },
    country: {
      country: "🇬🇧",
      timezone: "BST",
      timezoneCode: "Europe/London",
    },
  },
  {
    name: "blockarchitech",
    pfp: "https://github.com/blockarchitech.png",
    badge: "co-founder",
    joined: "December 2021",
    note: "blockarchitech handles project management, development, and CI/CD for znci.",
    socials: {
      discord: "@gibbiemonster",
      email: "block@znci.dev",
      github: "blockarchitech",
      gitlab: "blockarchitech",
      website: "blockarchitech.com",
    },
    country: {
      country: "🇺🇸",
      timezone: "EST",
      timezoneCode: "America/New_York",
    },
  },
  {
    name: "cerq",
    pfp: "https://github.com/cerqiest.png",
    badge: "developer, founding member",
    joined: "April 2022",
    note: "cerq is the support manager and a developer for znci.",
    socials: {
      discord: "@cerq",
      email: "cerq@znci.dev",
      github: "cerqiest",
      gitlab: "cerqiest",
      website: "cerq.xyz",
    },
    country: {
      country: "🇳🇱",
      timezone: "CEST",
      timezoneCode: "Europe/Amsterdam",
    },
  },
  {
    name: "grcq",
    pfp: "https://github.com/grcq.png",
    badge: "java developer",
    joined: "June 2022",
    note: "grcq is a developer for znci. He controls most Java development at znci.",
    socials: {
      discord: "@grcq",
      email: "grcq@znci.dev",
      github: "grcq",
      website: "grcq.dev",
    },
    country: {
      country: "🇳🇴",
      timezone: "CEST",
      timezoneCode: "Europe/Oslo",
    },
  },
  {
    name: "unium",
    pfp: "https://github.com/theunium.png",
    badge: "developer, designer, artist",
    joined: "March 2023",
    note: "unium is a developer for znci. He controls PHP site development at znci. He is also responsible for creating pixel art.",
    socials: {
      discord: "@leunium",
      email: "unium@znci.dev",
      github: "TheUnium",
      website: "theunium.github.io",
      youtube: "@leunium",
    },
    country: {
      country: "🇮🇳",
      timezone: "IST",
      timezoneCode: "Asia/Kolkata",
    },
  },
  {
    name: "Kole",
    pfp: "https://github.com/kuleander.png",
    badge: "junior developer",
    joined: "September 2023",
    note: "Kole is a znci member who assists with specific aspects of our projects.",
    socials: {
      discord: "@kuleander",
      // email: "TBD",
      github: "kuleander",
      youtube: "@Kuleander",
    },
    country: {
      country: "🇳🇴",
      timezone: "CEST",
      timezoneCode: "Europe/Oslo",
    },
  },
  {
    name: "Isaiyah",
    pfp: "https://github.com/Isaiyah717.png",
    badge: "junior developer, moderator",
    joined: "February 2024",
    note: "Isaiyah is a junior developer and moderator for znci.",
    socials: {
      discord: "@.isaiyah",
      // email: "TBD",
      github: "Isaiyah717",
    },
    country: {
      country: "🇺🇸",
      timezone: "PST",
      timezoneCode: "America/Los_Angeles",
    },
  },
  {
    name: "koloja",
    pfp: "https://github.com/koloja.png",
    badge: "junior developer",
    joined: "March 2024",
    note: "koloja is a junior developer for znci assisting with specific projects.",
    socials: {
      discord: "@koloja.",
      // email: "TBD",
      github: "koloja",
      website: "koloja.dev",
    },
    country: {
      country: "🇬🇧",
      timezone: "BST",
      timezoneCode: "Europe/London",
    },
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
        let link;

        switch (b) {
          case "website":
            isrc = /* html */ `<i class="fa-solid fa-globe fa-fw"></i>`;
            link = `https://${socials[b]}`;
            break;
          case "email":
            isrc = /* html */ `<i class="fa-solid fa-envelope fa-fw"></i>`;
            link = `mailto:${socials[b]}`;
            break;
          case "github":
            link = `https://github.com/${socials[b]}`;
            break;
          case "gitlab":
            link = `https://gitlab.com/${socials[b]}`;
            break;
        }

        badges += /* html */ `
          <div class="social">
            ${isrc}
            <span class="social-text">
              ${
                link
                  ? `<a href="${link}" target="_blank" rel="noopener noreferrer" class="social-text" >${socials[b]}</a>`
                  : socials[b]
              }
            </span>
          </div>`;
        badgeNum++;
      }

      badges += /* html */ `
        <div class="social">
          <i class="fa-solid fa-calendar fa-fw"></i>
          <span class="social-text">
            ${u.joined}
          </span>
        </div>
      `;

      badges += /* html */ `
        <div class="social">
          <i class="fa-solid fa-clock fa-fw"></i>
          <span class="social-text">
            ${u.country.timezone} - <tz-display timezone=${u.country.timezoneCode}></tz-display>
          </span>
        </div>
      `;

      document.querySelector(".member-list").innerHTML += /* html */ `
        <div class="card member">
          <div class="card-title">
            <img class="rounded" src="${u.pfp}" loading="lazy" alt="${u.name}">
          
            <div class="name">
              ${u.name} ${u.country.country}
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
