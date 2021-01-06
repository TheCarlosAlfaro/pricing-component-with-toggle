// &dollar;199.99 Learn More &dollar;249.99 &dollar;399.99
// &dollar;19.99 Learn More &dollar;24.99 &dollar;39.99
const toggleElement = document.getElementById("toggleInput");

const prices = {
	annually: {
		basic: `199.99`,
		professional: `249.99`,
		master: `399.99`,
	},
	monthly: {
		basic: `19.99`,
		professional: `24.99`,
		master: `39.99`,
	},
};

console.log(toggleElement);
function updatePrices(event) {
	if (this.checked) {
		console.log("Checkbox is monthly..");
		console.log(prices.monthly);
	} else {
		console.log("Checkbox is annually..");
		console.log(prices.annually);
	}
}

toggleElement.addEventListener("change", updatePrices);
