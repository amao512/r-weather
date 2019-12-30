let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');

let weatherBlock = document.querySelector('.container'),
		city = document.querySelector('.city-name'),
		description = document.querySelector('.desc'),
		temperature = document.querySelector('.temp'),
		icon = document.querySelector('.icon'),
		error = document.querySelector('.error');

const weather = () => {
	weatherBlock.style.display = 'block';
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=c77705cd442ccb35c991afa93c72e6ef`)
		.then(resp => resp.json())
		.then(data => {
			console.log(data);
			city.textContent = `${data.name}, ${data.sys.country}`;
			description.textContent = data.weather[0]['main'];
			temperature.innerHTML = Math.round(data.main.temp - 273) + '&deg';
			icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
			error.style.display = 'none';
			inp.style.border = '1px solid green';
		})
		.catch(() => {
			weatherBlock.style.display = 'none';
			error.innerHTML = 'There is no such kind of city!!!';
			inp.style.border = '1px solid red';
		});
}

btn.addEventListener('click', weather);
