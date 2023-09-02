import { html, component } from "https://cdn.pika.dev/haunted";

function ProjectList() {
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
      badge: "founder/owner",
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
      badge: "co founder",
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

  return html`
    <section class="section" id="projects">
      <span class="large-title">Our Team</span>
      <div id="members_list">
        ${memberList.map(
          (member) =>
            html`<div class="card member">
              <div class="card-title">
                <img src="${member.pfp}" loading="lazy" alt="${member.name}" />
                <div class="displayname big-sub">${member.name}</div>
                <span class="text-gray small-sub-gray">${member.badge}</span>
              </div>
              <div class="card-content">
                <p>${member.note}</p>
              </div>
              <div class="bottom-content">
                <div class="badges">
                  ${Object.keys(member.socials).map(
                    (social) => html`
                      <span class="tooltip"
                        >${social === "website"
                          ? html`<i class="fa-solid fa-globe fa-fw"></i>`
                          : social === "email"
                          ? html`<i class="fa-solid fa-envelope fa-fw"></i>`
                          : html`<i
                              class="fa-brands fa-${social} fa-fw"
                            ></i>`}<span class="ttp-text"
                          >${member.socials[social]}</span
                        ></span
                      >
                    `
                  )}
                </div>
              </div>
            </div>`
        )}
      </div>
    </section>
  `;
}

customElements.define(
  "zncidev-member-list",
  component(ProjectList, {
    useShadowDOM: false,
  })
);
