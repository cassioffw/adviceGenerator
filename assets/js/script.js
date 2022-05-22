const URL = "https://api.adviceslip.com/advice";

let adviceTitle = document.querySelector('.advice--title');
let advice = document.querySelector('.advice--main');

getAdvice();


function generateAdvice(json) {
    adviceTitle.innerHTML = `advice #${json.slip.id}`;
    advice.innerHTML = json.slip.advice;
}

async function getAdvice() {
    adviceTitle.innerHTML = '';    
    advice.innerHTML = 'Loading...'
	await fetch(URL)
		.then((resp) => resp.json())
		.then((json) => generateAdvice(json));
}
