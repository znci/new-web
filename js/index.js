
twemoji.parse(document.body, {
  folder: 'svg',
  ext: '.svg'
});

// Copyright (c) 2023 znci. All rights reserved.
// Licensed under the MIT License.
// See LICENSE in the project root for license information.
// Version: 1.0.0

let version = `v1.0.0`

window.onload = () => {
  const znciAscii = `███████╗███╗   ██╗ ██████╗██╗\n╚══███╔╝████╗  ██║██╔════╝██║\n  ███╔╝ ██╔██╗ ██║██║     ██║\n ███╔╝  ██║╚██╗██║██║     ██║\n███████╗██║ ╚████║╚██████╗██║\n╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝`
  console.log(znciAscii + `\n\n Running znci version ${znci.version}`);  
}
