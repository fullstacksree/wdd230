const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const getProphets = async (filter = "all") => {
	let prophets = await jsonFetch(url);

	switch (filter) {
		case "idaho":
			prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
			break;
		case "nonus":
			prophets = prophets.filter((prophet) => prophet.birthplace === "England");
			break;
		case "ten":
			prophets = prophets.filter((prophet) => prophet.length >= 15);
			break;
		case "childs":
			prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
			break;
		case "childl":
			prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
			break;
		case "old":
			prophets = prophets.filter(
				(prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
			);
			break;
		default:
			break;
	}

	displayProphets(prophets);
};

async function jsonFetch(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data.prophets;
}

const displayProphets = (prophets) => {
	const cards = document.querySelector("div.cards");
	cards.innerHTML = "";

	prophets.forEach((prophet) => {
		let card = document.createElement("section");
		let h2 = document.createElement("h2");
		let stats = document.createElement("div");
		stats.classList.add("stats");
		let date = document.createElement("p");
		let death = document.createElement("p");
		let ageatdeath = document.createElement("p");
		let length = document.createElement("p");
		let place = document.createElement("p");
		let num = document.createElement("p");
		let portrait = document.createElement("img");

		h2.textContent = `${prophet.name} ${prophet.lastname}`;
		date.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
		place.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
		num.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
		length.innerHTML = `<span class="label">Prophet Years:</span> ${prophet.length}`;
		death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
		ageatdeath.innerHTML = `<span class="label">Age:</span> ${getAgeAtDeathInYears(
			prophet.birthdate,
			prophet.death
		)}`;

		portrait.setAttribute("src", prophet.imageurl);
		portrait.setAttribute(
			"alt",
			`${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Prophet`
		);
		portrait.setAttribute("loading", "lazy");
		portrait.setAttribute("width", "340");
		portrait.setAttribute("height", "440");

		stats.appendChild(date);
		stats.appendChild(place);
		stats.appendChild(num);
		stats.appendChild(length);
		stats.appendChild(death);
		stats.appendChild(ageatdeath);

		card.appendChild(h2);
		card.appendChild(stats);
		card.appendChild(portrait);

		cards.appendChild(card);
	});
};

getProphets();

// buttons
document.querySelector("#all").addEventListener("click", () => {
	getProphets("all");
});

document.querySelector("#idaho").addEventListener("click", () => {
	getProphets("idaho");
});

document.querySelector("#nonus").addEventListener("click", () => {
	getProphets("nonus");
});

document.querySelector("#ten").addEventListener("click", () => {
	getProphets("ten");
});

document.querySelector("#childs").addEventListener("click", () => {
	getProphets("childs");
});

document.querySelector("#childl").addEventListener("click", () => {
	getProphets("childl");
});

document.querySelector("#old").addEventListener("click", () => {
	getProphets("old");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}



/*async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let numofchildren = document.createElement('p')
      let length = document.createElement('p');
      let death = document.createElement('p');
      let hrline = document.createElement('hr');
      let portrait = document.createElement('img');
      let order = ``

      if (prophet.order == 1) {
        order = `${prophet.order}st`
      } else if (prophet.order == 2) {
        order = `${prophet.order}nd`
      } else if (prophet.order == 3) {
        order = `${prophet.order}rd`
      } else {
        order = `{prophet.order}th`
      }

      // Build the h2 content out to show the prophet's full name - finish the template string
      

      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthDate.textContent = `Birth Date: ${prophet.birthdate}`
      birthPlace.textContent = `Birth Place: ${prophet.birthplace}`
      numofchildren.textContent = `children: ${prophet.numofchildren}`
      length.textContent = `Prophet Years: ${prophet.length}`
      death.textContent = `Death Date: ${prophet.death}`
      
      
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(numofchildren);
      card.appendChild(length);
      card.appendChild(death);
      card.appendChild(hrline);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression*/