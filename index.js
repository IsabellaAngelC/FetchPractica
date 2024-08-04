//Fetch de perritos

document.getElementById('fetch-button').addEventListener('click', fetchData);
async function fetchData() {
	loading();
	try {
		const response = await fetch('https://dog.ceo/api/breeds/image/random');
		if (!response.ok) throw new Error('Chale');
		const data = await response.json();
		renderData(data);
	} catch (error) {
		showerror();
	}

	function loading() {
		const container = document.getElementById('data-container');
		container.innerHTML = '<p>loading...</p>';
	}

	function showerror() {
		const container = document.getElementById('data-container');
		container.innerHTML = '<p>Hubo un error...</p>';
	}
}

function renderData(data) {
	const container = document.getElementById('data-container');
	container.innerHTML = ''; // Clear previous data

	const div = document.createElement('div');
	div.className = 'item';
	div.innerHTML = ` <img src="${data?.message}" alt="Random Dog Image">`;
	container.appendChild(div);
}


// Fetch de cat facts
document.getElementById('gato-button').addEventListener('click', fetchCatFact);

async function fetchCatFact() {
	loadingGato();
	try {
		const response = await fetch('https://catfact.ninja/fact');
		if (!response.ok) throw new Error('Chale');
		const data = await response.json();
		renderCatFact(data.fact);
	} catch (error) {
		showErrorGato();
	}

	function loadingGato() {
		const container = document.getElementById('gato-container');
		container.innerHTML = '<p>loading...</p>';
	}

	function showErrorGato() {
		const container = document.getElementById('gato-container');
		container.innerHTML = '<p>Hubo un error...</p>';
	}

	function renderCatFact(fact) {
		const container = document.getElementById('gato-container');
		container.innerHTML = ''; // Clear previous data

		const catFact = document.createElement('h2');
		catFact.innerText = fact;

		container.appendChild(catFact);
	}
}

// Fetch de population
document.getElementById('us-button').addEventListener('click', fetchPopulation);

async function fetchPopulation() {
	loadingUS();
	try {
		const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
		if (!response.ok) throw new Error('Chale');
		const data = await response.json();
		renderPopulation(data.data[0].Population); // Accessing nested data
	} catch (error) {
		showErrorUS();
	}

	function loadingUS() {
		const container = document.getElementById('us-container');
		container.innerHTML = '<p>loading...</p>';
	}

	function showErrorUS() {
		const container = document.getElementById('us-container');
		container.innerHTML = '<p>Hubo un error...</p>';
	}

	function renderPopulation(population) {
		const container = document.getElementById('us-container');
		container.innerHTML = ''; // Clear previous data

		const populationElement = document.createElement('h2');
		populationElement.innerText = population;

		container.appendChild(populationElement);
	}
}