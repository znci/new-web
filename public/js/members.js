// insert cool stuff here
const members = [
	{
		"name": "zNotChill",
		"socials": {
			"github": "zNotChill",
			"discord": "chxll#3424",
			"twitch": "hpqyy",
			"gitlab": "zNotChill",
		},
		"country": {
			"country": "gb",
			"timezone": "BST"
		},
		"pfp": "https://github.com/zNotChill.png",
		"badge": "founder",
		"email": "znotchill@znci.dev",
		"note": "zNotChill is the owner and founder of znci. They control most of the operations and control development."
	},
	{
		"name": "BlockArchitech",
		"socials": {
			"github": "BlockArchitech",
			"discord": "gibbiemonster#6242",
			"gitlab": "BlockArchitech",
			"website": "blockarchitech.com"
		},
		"country": {
			"country": "us",
			"timezone": "N/A"
		},
		"pfp": "https://github.com/BlockArchitech.png",
		"badge": "staff",
		"email": "blockarchitech@znci.dev",
		"note": "BlockArchitech handles project management, development, and CI/CD for znci."
	},
	{
		"name": "Cerquaas",
		"socials": {
			"github": "Cerquaas",
			"discord": "$cq#0001",
		},
		"country": {
			"country": "N/A",
			"timezone": "N/A"
		},
		"pfp": "https://github.com/Cerquaas.png",
		"badge": "staff",
		"email": "cerq@znci.dev",
		"note": "Cerquaas is the staffing manager and a developer for znci."
	},
	{
		"name": "grcq",
		"socials": {
			"github": "grcq",
			"discord": "grcq#0001",
			"website": "grcq.cf"
		},
		"country": {
			"country": "no",
			"timezone": "BST"
		},
		"pfp": "https://github.com/grcq.png",
		"badge": "staff",
		"email": "grcq@znci.dev",
		"note": "grcq is a developer for znci. They control most Java development at znci."
	},
	{
		"name": "ChoCo",
		"socials": {},
		"pfp": "https://cdn.lorem.space/images/watch/.cache/98x98/david-svihovec-HM-Y497t5CU-unsplash.jpg",
		"country": {
			"country": "N/A",
			"timezone": "N/A"
		},
		"badge": "staff",
		"email": "None",
		"note": "ChoCo handles all of znci's databases and other large datasets.<br><br>ChoCo has no official profile photo yet, so here's a random apple watch picture as a placeholder."
	}
]

function cfl(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

for (let i = 0; i < members.length; i++) {
	let contact = "";
	let github = "";
	let badges = "";
	let badgeNum = 0;
	const u = members[i];
	const socials = members[i].socials
	for (const b in socials) {
		let isrc = `<i class="fa-brands fa-${b} fa-fw"></i>`;
		if(b === "website") isrc = `<i class="fa-solid fa-globe fa-fw"></i>`
		badgeNum ++;
		badges += `<span class="tooltip">${isrc}<span class="ttp-text">${isrc} ${socials[b]}</span></span>`
	}
	document.querySelector("#members_list").innerHTML += `
	<div class="member-container">
		<div class="header">
			<img src="${u.pfp}" loading="lazy" alt="${u.name}">
			<h3>${u.name}</h3>
			<h5 class="badge"><p>${cfl(u.badge)}</p></h5>
			<br>
			<div class="badges">
				${badges}
			</div>
		</div>
		<div class="desc">
			<p>
				${u.note}
			</p>
		</div>
		<a href="mailto:${u.email}">
			<button class="contact">
				Contact
			</button>
		</a>
	</div>
	`
}