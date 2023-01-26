
twemoji.parse(document.body, {
    folder: 'svg',
    ext: '.svg'
});

let znci = {};

//

znci.version = `v1.0.0`

znci.log = function() {
  const znciAscii = `███████╗███╗   ██╗ ██████╗██╗\n╚══███╔╝████╗  ██║██╔════╝██║\n  ███╔╝ ██╔██╗ ██║██║     ██║\n ███╔╝  ██║╚██╗██║██║     ██║\n███████╗██║ ╚████║╚██████╗██║\n╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝`
  console.log(znciAscii + `\n\n Running znci version ${znci.version}`);
}

// znci init

znci.createFooter = () => {
  document.body.innerHTML += `
  <link rel="stylesheet" href="/css/footer.css">
  <div class="footer">
    <div class="left">
      <div class="logo">
        <img src="https://avatars.githubusercontent.com/u/89603476?s=200&v=4" alt="">
      </div>
      Copyright &copy; <a href="//znci.dev" class="c">znci</a> <<a href="mailto:hello@znci.dev" class="c">hello@znci.dev</a>>	
      <h6>&copy; 2021-2022</h6>
    </div>
    <div class="space">
      <h5>Don't like the look of the website? You can change the colors!</h5>
      <span class="tooltip">
        <i class="fa-solid fa-palette"></i>
        <div class="ttp-text">
          <h3 class="web-color-slider-tip"></h3>
          <input style="color: rgb(255, 255, 255); background-color: var(--self-color)" type="number" class="input web-color-slider-input" placeholder="" min="0" max="360">
          <a style="cursor: pointer; padding: 10px; font-family: var(--exo);" class="button web-color-slider-button">Save</a>
          <h5>Must be an integer between 0 and 360</h5>
        </div>
      </span>
    </div>
  </div>
  `
  console.log("Loaded footer");
}

znci.footerFunction = () => {
  document.querySelector(".web-color-slider-button").addEventListener("click", (e) => {
    const input = document.querySelector(".web-color-slider-input");
  
    const tip = document.querySelector(".web-color-slider-tip");
  
    if(parseInt(input.value)) {
      if(parseInt(input.value) < 360 && parseInt(input.value) > 0) {
        znci.setUserTheme(parseInt(input.value))
        tip.innerHTML = `User theme set to <span style="width: 16px; height: 16px; display: inline-block; background-color: hsl(${parseInt(input.value)}deg, 50%, 50%); border: 2px #fff solid; border-radius: 2px;"></span>`
        setTimeout(() => {tip.innerHTML = ``}, 3000);
      } else {
        tip.innerHTML = `Please choose a value greater than 0 and less than 360!`
        setTimeout(() => {tip.innerHTML = ``}, 3000);
      }
    } else {
      tip.innerHTML = `This is not an integer.`
      setTimeout(() => {tip.innerHTML = ``}, 3000);
    }
  })
  console.log("Loaded footer functions");
  
}

znci.initNavbar = () => {
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.querySelector('.navbar-top').classList.remove('not-fixed');
          document.querySelector('.navbar-top').classList.add('fixed');
        } else {
          document.querySelector('.navbar-top').classList.remove('fixed');
          document.querySelector('.navbar-top').classList.add('not-fixed');
        } 
    });
  });
  console.log("Loaded navbar");
}

znci.memberList = [
	{
		"name": "zNotChill",
		"socials": {
			"github": "zNotChill",
			"discord": "chxll#3424",
			"twitch": "hpqyy",
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
			"discord": "cerq 🎄#0001",
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
      "discord": "gibbiemonster#6242",
      "github": "BlockArchitech",
      "email": "hello@blockarchitech.com",
      "website": "blockarchitech.com",
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

znci.loadMembers = () => {
  try {
    const members = znci.memberList;
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

znci.setUserTheme = (deg) => {
	document.documentElement.style.setProperty("--base-hue", `${deg}deg`)
	localStorage.setItem('user-theme', `${deg}deg`)
  console.log("Loaded user themes");
}

znci.updateUserTheme = () => {
  if(!localStorage.getItem('user-theme')) {
    localStorage.setItem('user-theme', '200deg')
  }
  
  document.documentElement.style.setProperty("--base-hue", `${localStorage.getItem("user-theme")}`)  
  console.log("Loaded user theme updating");
}

znci.updateNews = () => {
  let i = 0;
  fetch("http://185.225.232.4:2052/api/znci/news").then(res => res.json())
  .then(json => {
    for (const key in json) {
      i++;
      if(i > 3) return;
      const j = json[key];

      document.querySelector(".news").innerHTML += `
      <div class="news-container">
      <div class="news-body">
        <div class="news-title">
          ${j.title}
        </div>
        <div class="news-content">
          ${j.content}
        </div>
        <div class="news-footer">
          <div class="marker"></div>
          Posted by <strong>${j.poster}</strong> &bull; ${new Date(j.time * 1000).toLocaleDateString()}
        </div>
      </div>
    </div>
      `
    }
  })
}

// load

window.onload = () => {
  znci.log();
  znci.initNavbar();
  znci.createFooter();
  znci.footerFunction();
  znci.loadMembers();
  znci.updateUserTheme();
  znci.updateNews();
}