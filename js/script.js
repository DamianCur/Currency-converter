let formElement = document.querySelector(".js-form");
let userInputElement = document.querySelector(".js-input");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-score");

let dollar = 3.75;
let euro = 4.45;

function computeCurrency() {
	let amount = userInputElement.value;
	let currency = currencyElement.value;
	let result;

	switch (currency) {
		case "EUR":
			result = amount / euro;
			break;
		case "USD":
			result = amount / dollar;
			break;
	}

	resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
}

formElement.addEventListener("submit", (event) => {event.preventDefault();}, true);
formElement.addEventListener("submit", computeCurrency, true);

