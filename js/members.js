const memberList = [
	{
	  "name": "zNotChill",
	  "socials": {
		"github": "zNotChill",
		"discord": "chxll#3424",
		"gitlab": "zNotChill",
		"email": "znotchill@znci.dev",
	  },
	  "country": {
		"country": "gb",
		"timezone": "BST"
	  },
	  "pfp": "https://github.com/zNotChill.png",
	  "badge": "founder",
	  "note": "zNotChill is the owner and founder of znci. They control most of the operations and control development."
	},
	{
	  "name": "Cerq",
	  "socials": {
		"github": "Cerquaas",
		"discord": "cerq#0001",
		"email": "cerq@znci.dev",
	  },
	  "country": {
		"country": "N/A",
		"timezone": "N/A"
	  },
	  "pfp": "https://github.com/Cerquaas.png",
	  "badge": "staff",
	  "note": `Cerq is the staffing manager and a developer for znci.`
	},
	{
	  "name": "grcq",
	  "socials": {
		"github": "grcq",
		"discord": "grcq#4516",
		"website": "grcq.cf",
	  },
	  "country": {
		"country": "no",
		"timezone": "BST",
		"email": "grcq@znci.dev",
	  },
	  "pfp": "https://github.com/grcq.png",
	  "badge": "staff",
	  "note": "grcq is a developer for znci. They control most Java development at znci."
	},
	{
	  "name": "BlockArchitech",
	  "socials": {
		"github": "BlockArchitech",
		"email": "block@znci.dev",
		"website": "blockarchitech.com",
		"gitlab": "blockarchitech"
	  },
	  "pfp": "https://github.com/blockarchitech.png",
	  "country": {
		"country": "N/A",
		"timezone": "N/A",
	  },
	  "badge": "staff",
	  "note": "BlockArchitech handles project management, development, and CI/CD for znci."
	}
]

window.onload = () => {
	try {
		const members = memberList;
		for (let i = 0; i < members.length; i++) {
		  let badges = "";
		  let badgeNum = 0;
		  const u = members[i];
		  const socials = members[i].socials
		  for (const b in socials) {
			let isrc = `<i class="fa-brands fa-${b} fa-fw"></i>`;
			if(b === "website") isrc = `<i class="fa-solid fa-globe fa-fw"></i>`
			if(b === "email") isrc = `<i class="fa-solid fa-envelope fa-fw"></i>`
			badgeNum ++;
			badges += `<span class="tooltip">${isrc}<span class="ttp-text">${isrc} ${socials[b]}</span></span>`
		  }
		  document.querySelector("#members_list").innerHTML += `
			<div class="card member">
			  <div class="card-title">
				<img src="${u.pfp}" loading="lazy" alt="${u.name}">
				<div class="displayname">
				  ${u.name}
				</div>
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
			`
		  }
		console.log("Loaded members");
	} catch (error) {
		console.log("Failed to initalize the member list:", error);
	}
}