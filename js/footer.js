
document.querySelector(".page-footer").innerHTML = 
`
<div class="left">
	<div class="logo">
	  	<img src="https://avatars.githubusercontent.com/u/89603476?s=200&v=4" alt="">
	</div>
	Copyright &copy; <a href="//znci.dev" class="c">znci</a> <<a href="mailto:hello@znci.dev" class="c">hello@znci.dev</a>>	
	<h6>&copy; 2021-${new Date().getFullYear()}</h6>
	</div>
	<div class="space">
		<h5>Links</h5>
		<ul style="font-size:16px">
			<li><a target="_blank" href="//znci.dev">Home</a></li>
			<li><a target="_blank" href="//docs.znci.dev">Docs</a></li>
			<li><a target="_blank" href="//github.com/znci">GitHub</a></li>
			<li><a target="_blank" href="//patreon.com/zncidev">Patreon</a></li>
			<li><a target="_blank" href="/privacy.html">Privacy</a></li>
		</ul>
	</div>
</div>
`

