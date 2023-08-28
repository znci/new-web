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
			country: "N/A",
			timezone: "N/A",
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
const projectList = [
	{
		name: "Azalea",
		tags: [
			{
				tag: "public",
				color: "green",
			},
		],
		icon: "https://raw.githubusercontent.com/znci/brandkit/main/src/logos/svg/azalea.svg",
		url: "https://github.com/znci/azalea",
		about:
			"Azalea is a CSS and soon-to-be JS framework, with features such as alerts, badges, buttons, cards, inputs, tooltips, etc.",
	},
	{
		name: "QR Generator",
		tags: [
			{
				tag: "public",
				color: "green",
			},
		],
		icon: "https://raw.githubusercontent.com/znci/brandkit/main/src/logos/svg/qr.svg",
		url: "https://github.com/znci/qr",
		about: "znci QR is a QR code generator that currently supports links.",
	},
	{
		name: "Paint",
		tags: [
			{
				tag: "public",
				color: "green",
			},
		],
		icon: "https://res.cloudinary.com/znci/image/upload/v1675111503/znci-paint-logo-light-short_ht2khq.svg",
		url: "https://github.com/znci/paint",
		about: "A free drawing app with PNG, SVG and JPG support.",
	},
	{
		name: "BetterPS",
		tags: [
			{
				tag: "public",
				color: "green",
			},
		],
		icon: "./img/placeholder.svg",
		url: "https://github.com/znci/betterps",
		about:
			"A chrome extension for making the PlayerServers website better, with an inbuilt console terminal and other features.",
	},
	{
		name: "Terminal",
		tags: [
			{
				tag: "public",
				color: "green",
			},
		],
		icon: "./img/placeholder.svg",
		url: "https://github.com/znci/terminal",
		about: "A free, usable, and configurable terminal with documentation.",
	},
	{
		name: "Web",
		tags: [
			{
				tag: "private",
				color: "red",
			},
		],
		icon: "./img/placeholder.svg",
		url: "https://github.com/znci/web",
		about: "A simple website creator.",
	},
];

window.onload = () => {
	try {
		const members = memberList;

		for (let i = 0; i < members.length; i++) {
			let badges = "";
			let badgeNum = 0;

			const u = members[i];
			const socials = members[i].socials;

			for (const b in socials) {
				let isrc = `<i class="fa-brands fa-${b} fa-fw"></i>`;

				if (b === "website") isrc = `<i class="fa-solid fa-globe fa-fw"></i>`;
				if (b === "email") isrc = `<i class="fa-solid fa-envelope fa-fw"></i>`;

				badges += `<span class="tooltip">${isrc}<span class="ttp-text">${socials[b]}</span></span>`;
				badgeNum++;
			}

			document.querySelector("#members_list").innerHTML += `
			<div class="card member">
			  <div class="card-title">
				<img src="${u.pfp}" loading="lazy" alt="${u.name}">
				<div class="displayname big-sub">
					${u.name}
				</div>
				<span class="text-gray small-sub-gray">${u.badge}</span>
			  </div>
			  <div class="card-content">
				<p>
				  ${u.note}
				</p>
			  </div>
			  <div class="bottom-content">	
				<div class="badges">
				  ${badges}
				</div>
			  </div>
			</div>
			`;
		}
		console.log("Loaded members");
	} catch (error) {
		console.log("Failed to initalize the member list:", error);
	}

	projectList.forEach((project) => {
		let tags = "";

		project.tags.forEach((tag) => {
			tags += `
				<span class="tag tag-${tag.color}">${tag.tag}</span>
			`;
		});

		document.querySelector(".project-list").innerHTML += `
			<div class="project-container">
				<div class="project-poster">
					<a href="${project.url}" style="background-image: url(${project.icon})"></a>
				</div>
				<div class="project-body">
					<div class="project-title">
						${project.name} <span class="small-sub-cl">${tags}</span>
					</div>
					<div class="project-content pb-5">
						<p>${project.about}</p>
					</div>
				</div>
			</div>
		`;
	});
};
