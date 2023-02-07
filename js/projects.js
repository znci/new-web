const projectList = [
	{
	  	"name": "Azalea",
	  	"tags": [
			{
				"tag": "public",
				"color": "green",
			}
		],
	  	"icon": "/img/azalea.svg",
		"url": "https://github.com/znci/azalea",
	  	"about": "Azalea is a CSS and soon-to-be JS framework, with features such as alerts, badges, buttons, cards, inputs, tooltips, etc."
	},
	{
	  	"name": "QR Generator",
	  	"tags": [
			{
				"tag": "public",
				"color": "green",
			}
		],
	  	"icon": "/img/qr.svg",
		"url": "https://github.com/znci/qr",
	  	"about": "znci QR is a QR code generator that currently supports links."
	},
	{
	  	"name": "Web",
	  	"tags": [
			{
				"tag": "private",
				"color": "red",
			}
		],
	  	"icon": "/img/placeholder.svg",
		"url": "https://github.com/znci/web",
	  	"about": "A simple website creator."
	},
	{
	  	"name": "Paint",
	  	"tags": [
			{
				"tag": "public",
				"color": "green",
			}
		],
	  	"icon": "https://res.cloudinary.com/znci/image/upload/v1675111503/znci-paint-logo-light-short_ht2khq.svg",
		"url": "https://github.com/znci/paint",
	  	"about": "A free drawing app with PNG, SVG and JPG support."
	},
	{
	  	"name": "BetterPS",
	  	"tags": [
			{
				"tag": "public",
				"color": "green",
			}
		],
	  	"icon": "/img/placeholder.svg",
		"url": "https://github.com/znci/betterps",
	  	"about": "A chrome extension for making the PlayerServers website better, with an inbuilt console terminal and other features."
	},
	{
	  	"name": "musicbridge",
	  	"tags": [
			{
				"tag": "public",
				"color": "green",
			}
		],
	  	"icon": "/img/placeholder.svg",
		"url": "https://github.com/znci/musicbridge",
	  	"about": "A macOS App to control Spotify/Apple Music via MIDI."
	},
	{
	  	"name": "Terminal",
	  	"tags": [
			{
				"tag": "public",
				"color": "green",
			}
		],
	  	"icon": "/img/placeholder.svg",
		"url": "https://github.com/znci/terminal",
	  	"about": "A free, usable, and configurable terminal with documentation."
	},
]

window.onload = () => {
	projectList.forEach((project) => {
		let tags = "";
		project.tags.forEach((tag) => {
			tags += `
				<span class="tag tag-${tag.color}">${tag.tag}</span>
			`
		})
		document.querySelector(".project-list").innerHTML += `
			<div class="project-container">
				<div class="project-poster">
					<a href="${project.url}" style="background-image: url(${project.icon})"></a>
				</div>
				<div class="project-body">
					<div class="project-title">
						${project.name}
					</div>
					<div class="project-content">
						<p>${project.about}</p>
						<div class="tags">
							${tags}
						</div>
					</div>
				</div>
			</div>
		`
	})
}