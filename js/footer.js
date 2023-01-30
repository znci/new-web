
window.onload = () => {
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
	`
	
	document.querySelector(".web-color-slider-button").addEventListener("click", (e) => {
		const input = document.querySelector(".web-color-slider-input");
	
		const tip = document.querySelector(".web-color-slider-tip");
	
		if(parseInt(input.value)) {
		if(parseInt(input.value) < 360 && parseInt(input.value) > 0) {
			setTheme(parseInt(input.value))
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

}
