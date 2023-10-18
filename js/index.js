// Copyright (c) 2023 znci. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.

const znciAscii = `███████╗███╗   ██╗ ██████╗██╗\n╚══███╔╝████╗  ██║██╔════╝██║\n  ███╔╝ ██╔██╗ ██║██║     ██║\n ███╔╝  ██║╚██╗██║██║     ██║\n███████╗██║ ╚████║╚██████╗██║\n╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝`;
console.log(
  `%c${znciAscii}\n\n %cLoading znci website...`,
  "color: #ba34eb; font-family: monospace; font-size: 24px;",
  "color: #346eeb; font-family: monospace; font-size: 24px;"
);

fetch("https://api.github.com/repos/znci/new-web/commits/main")
  .then((res) =>
    res.json().then((json) => {
      const commitHash = json.sha.slice(0, 7);
      const commitDate = new Date(json.commit.author.date).toLocaleString();
      const commitAuthor = json.commit.author.name;
      const commitMessage = json.commit.message;
      const commitLink = `https://github.com/znci/new-web/commit/${json.sha}`;

      const staticStyles =
        "color: #ba34eb; font-family: monospace; font-size: 16px;";
      const dynamicStyles =
        "color: #346eeb; font-family: monospace; font-size: 16px;";

      console.log(
        `%cLast commit: %c${commitHash} %cby %c${commitAuthor} %con %c${commitDate} %c(%c${commitMessage}%c). %cSee %c${commitLink} %cfor the commit.`,
        staticStyles,
        dynamicStyles,
        staticStyles,
        dynamicStyles,
        staticStyles,
        dynamicStyles,
        staticStyles,
        dynamicStyles,
        staticStyles,
        dynamicStyles,
        staticStyles,
        dynamicStyles
      );
    })
  )
  .catch((err) => {
    console.error(err);
  });

// Check if user is on a mobile size or has a small screen
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const previouslyAcknowledgedMobileAlert =
  localStorage.getItem("previouslyAcknowledgedMobileAlert") || false;

if (isMobile && !previouslyAcknowledgedMobileAlert) {
  alert(
    "👋🏼 Hey! It looks like you're using a mobile device. Just so you know, the znci website might not look quite right on mobile devices and we're actively looking for ways to improve your experience. (Not using a mobile device? Please let us know via the contact form below!)"
  );

  localStorage.setItem("previouslyAcknowledgedMobileAlert", true);
}
