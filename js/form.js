document.querySelector("#contact_form").innerHTML = `
		<div class="center">
			<span class="description" style="margin-bottom: 15px; margin-top: 5px;">If you have any questions, concerns, or just want to say hi, feel free to contact us!</span>
		</div>
		<div class="contact-form">
			<form action="https://znci-contact-form.vercel.app/api/submit?redirect=https://znci.dev/thanks.html" method="POST">
				<input type="text" name="name" placeholder="Name" required>
				<input type="email" name="email" placeholder="Email" required>
				<textarea name="message" placeholder="Message" required></textarea>
				<button type="submit" class="button button-primary">Send</button>
			</form>
		</div>
`;