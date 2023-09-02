import { html, component } from "https://cdn.pika.dev/haunted";

function ProjectList() {
  const projects = [
    {
      name: "Paint",
      tags: [
        {
          tag: "open-source",
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
          tag: "open-source",
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
          tag: "open-source",
          color: "green",
        },
      ],
      icon: "./img/placeholder.svg",
      url: "https://github.com/zNotChill/acid",
      about: "Electron terminal emulator for fun. (WIP)",
    },
    {
      name: "BetterPS",
      tags: [
        {
          tag: "open-source",
          color: "green",
        },
      ],
      icon: "./img/placeholder.svg",
      url: "https://github.com/znci/betterps",
      about:
        "A chrome extension for making the PlayerServers website better, with an inbuilt console terminal and other features.",
    },
  ];

  return html`
    <section class="section" id="projects">
      <span class="large-title">Our Projects</span>
      <div class="project-list">
        ${projects.map(
          (project) =>
            html` <div class="project-container">
              <div class="project-poster">
                <a
                  href="${project.url}"
                  style="background-image: url(${project.icon})"
                ></a>
              </div>
              <div class="project-body">
                <div class="project-title">
                  ${project.name}
                  <span class="small-sub-cl"
                    >${project.tags.map(
                      (tag) =>
                        html`<span class="tag tag-${tag.color}"
                          >${tag.tag}</span
                        >`
                    )}</span
                  >
                </div>
                <div class="project-content pb-5">
                  <p>${project.about}</p>
                </div>
              </div>
            </div>`
        )}
      </div>
    </section>
  `;
}

customElements.define(
  "zncidev-project-list",
  component(ProjectList, {
    useShadowDOM: false,
  })
);
