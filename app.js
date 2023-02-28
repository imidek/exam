const tkliwoscKolana = document.querySelectorAll("input.pain");
const niestabilnoscKolana = document.querySelectorAll("input.instability");
const balotowanieKolana = document.querySelectorAll("input.balotowanie");
const romForm = document.querySelectorAll('.range')

const painButtonShow = document.querySelector(".painButtonShow");
const instabilityButtonShow = document.querySelector(".instabilityButtonShow");
const balotowanieButtonShow = document.querySelector(".balotowanieButtonShow");
const romowie = document.querySelector('#romowie')
const refresh = document.querySelector(".refresh");

const painResults = document.querySelector(".painResults");
const instabilityResults = document.querySelector(".instabilityResults");
const results = document.querySelector('.results')
const romek = document.querySelector('p.romki')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')


romForm.forEach(rom=>{
  rom.addEventListener('input',e=>{
    rom.nextElementSibling.textContent=rom.value;
    romek.textContent = ` ROM: ${p1.textContent}-${p2.textContent}`
  })
})

const generateResult = (arr, textStart, result) => {
  let text = textStart;
	const checkedArr = Array.from(arr).filter((arr) => {
    return arr.checked;
	});
	for (let j = 0; j < checkedArr.length; j++) {
    text += checkedArr[j].value;
		if (j < checkedArr.length - 1) {
      text += ", ";
		} else {
      text += ".";
		}
	}
	console.log(text);
  result.textContent += text
};

painButtonShow.addEventListener("click", (e) => {
  e.preventDefault();
	generateResult(tkliwoscKolana, " Lokalizacja dolegliwości bólowych kolana: ",results);
});

instabilityButtonShow.addEventListener("click", (e) => {
  e.preventDefault();
	generateResult(niestabilnoscKolana, " Ocena niestabilności: ",results);
});

balotowanieButtonShow.addEventListener("click", (e) => {
  e.preventDefault();
	generateResult(balotowanieKolana, " Balotowanie: ",results);
});


romowie.addEventListener('click',e=>{
  e.preventDefault()
  results.textContent += romek.textContent
})

refresh.addEventListener("submit", (e) => {});