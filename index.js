const toggleElement = document.querySelector("#toggleInput");
const planPriceBasic = document.querySelector(".plan-price__basic");
const planPriceProfessional = document.querySelector(
	".plan-price__professional"
);
const planPriceMaster = document.querySelector(".plan-price__master");

const prices = {
	annually: {
		basic: `199.99`,
		professional: `249.99`,
		master: `399.99`,
	},
	monthly: {
		basic: `19.99`,
		professional: `24.999`,
		master: `39.99`,
	},
};

function updatePrices(event) {
	if (this.checked) {
		planPriceBasic.innerHTML = `<span>&dollar;</span> ${prices.monthly.basic}`;
		planPriceProfessional.innerHTML = `<span>&dollar;</span> ${prices.monthly.professional}`;
		planPriceMaster.innerHTML = `<span>&dollar;</span> ${prices.monthly.master}`;
	} else {
		planPriceBasic.innerHTML = `<span>&dollar;</span> ${prices.annually.basic}`;
		planPriceProfessional.innerHTML = `<span>&dollar;</span> ${prices.annually.professional}`;
		planPriceMaster.innerHTML = `<span>&dollar;</span> ${prices.annually.master}`;
	}
}

toggleElement.addEventListener("change", updatePrices);
