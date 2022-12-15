export {};

const form = document.getElementById("form") as HTMLFormElement;

// when a button with type "submit" is clicked, the form the button is in emits the "submit" event

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	console.log(Object.fromEntries(formData.entries()));
});
