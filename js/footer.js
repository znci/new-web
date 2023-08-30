
document.querySelector(".page-footer").innerHTML =
	`
<div class="left">
	<div class="-ml-64">
		<img src="https://avatars.githubusercontent.com/u/89603476?s=200&v=4" alt="">
	</div>
	<span class="-ml-64">Copyright &copy; <a href="//znci.dev" class="c">znci</a> <<a href="mailto:hello@znci.dev" class="c">hello@znci.dev</a>>	</span>
	<h6 class="-ml-64">&copy; 2021-${new Date().getFullYear()}</h6>
	<h6 class="c" style="margin-top: 25px;">Built with <i class="fa-solid fa-heart fa-fw"></i> by znci</h6>
	</div>
	<div class="space"></div>

</div>
<span class="vertical_hr"></span>
<div class="right">
	<div class="socials">
		<a href="https://github.com/znci"><span class="tooltip"><i class="fa-brands fa-github fa-fw"></i><span class="ttp-text">GitHub</span></span></a>
		<a href="https://discord.gg/2Y9YbQJ"><span class="tooltip"><i class="fa-brands fa-discord fa-fw"></i><span class="ttp-text">Discord</span></span></a>
		<a href="https://twitter.com/zncidev"><span class="tooltip"><i class="fa-brands fa-twitter fa-fw"></i><span class="ttp-text">Twitter</span></span></a>
		<a href="https://znci.substack.com/"><span class="tooltip"><i class="fa-solid fa-rss fa-fw"></i><span class="ttp-text">Substack</span></span></a>
	</div>
	<hr>
	<ul class="footer-links">
		<li>&bull; <a href="//znci.dev">Home</a></li>
		<li>&bull; <a href="//znci.dev/privacy.html">Privacy</a></li>
		<li>&bull; <a href="//znci.dev/tools/vscode/extensions.html">VSCode Extensions</a></li>
	</ul>
</div>
`

