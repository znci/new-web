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
