// &dollar;199.99 Learn More &dollar;249.99 &dollar;399.99
// &dollar;19.99 Learn More &dollar;24.99 &dollar;39.99
const toggleElement = document.querySelector("#toggleInput");
const planPriceBasic = document.querySelector(".plan-price__basic");
const planPriceProfessional = document.querySelector(
	".plan-price__professional"
);
const planPriceMaster = document.querySelector(".plan-price__master");

const priceElements = [planPriceBasic, planPriceProfessional, planPriceMaster];

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

function updatePrices(event) {
	if (this.checked) {
		priceElements[0].innerHTML = `<span>&dollar;</span> ${prices.monthly.basic}`;
		priceElements[1].innerHTML = `<span>&dollar;</span> ${prices.monthly.professional}`;
		priceElements[2].innerHTML = `<span>&dollar;</span> ${prices.monthly.master}`;
	} else {
		priceElements[0].innerHTML = `<span>&dollar;</span> ${prices.annually.basic}`;
		priceElements[1].innerHTML = `<span>&dollar;</span> ${prices.annually.professional}`;
		priceElements[2].innerHTML = `<span>&dollar;</span> ${prices.annually.master}`;
	}
}

toggleElement.addEventListener("change", updatePrices);
