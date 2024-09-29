const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const btn = document.getElementById("convert");
const amt = document.getElementById("amount");
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";
let toVal = "USD";
let fromVal = "BDT";
const changeFlag = (id) => {
  id.addEventListener("change", (env) => {
    const option = env.target;

    for (let code in countryList) {
      if (option.value === code) {
        id.parentNode.querySelector(
          "img"
        ).src = `https://flagsapi.com/${countryList[code]}/flat/64.png`;
      }
    }

    if (id === fromCurrency) {
      fromVal = option.value;
      document.getElementById(
        "convAmt"
      ).innerText = `0 ${fromVal} = 0 ${toVal}`;
    } else {
      if (id === toCurrency) {
        toVal = option.value;
        document.getElementById(
          "convAmt"
        ).innerText = `0 ${fromVal} = 0 ${toVal}`;
      }
    }
  });
};

class addOption {
  id(id) {
    for (let code in countryList) {
      let option = document.createElement("option");
      option.innerText = countries[countryList[code]];
      option.value = code;
      id.appendChild(option);
      if (id === fromCurrency && code === "BDT") {
        option.selected = "selected";
      } else {
        if (id === toCurrency && code === "USD") {
          option.selected = "selected";
        }
      }
      changeFlag(id);
    }
  }
}

const from = new addOption();
from.id(fromCurrency);

const to = new addOption();
to.id(toCurrency);

const rate = async () => {
  const URL = `${BASE_URL}/${fromVal.toLowerCase()}.json`;
  const rates = await fetch(URL);
  const rate = await rates.json();
  const toRate = rate[fromVal.toLowerCase()][toVal.toLowerCase()];
  const total = toRate * amt.value;
  document.getElementById("convAmt").innerText = `${
    amt.value
  } ${fromVal} = ${total.toFixed(2)} ${toVal}`;
  amt.value = "";
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (amt.value === "" || amt.value < 1) {
    alert("Please enter a positive value");
  } else {
    rate();
  }
});
