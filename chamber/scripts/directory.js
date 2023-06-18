const url = "./data/data.json";

async function getData() {
    try {
        const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data.data);
        displayData(data.data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  getData();
  
  function displayData(data) {
    data.forEach((data) => {
    
        const memberCards = document.querySelector("#data");
        
        const name = document.createElement("h2");
        name.innerHTML = data.name;
        
        const logo = document.createElement("img");
        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "250");
        logo.setAttribute("height", "200");
        
        const url = document.createElement("p");
        url.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`;

        const address = document.createElement("p");
        address.innerHTML = member.address;

        const phone = document.createElement("p");
        phone.innerHTML = `<a href="tel:${member.phone}">${member.phone}</a>`;
        
        const level = document.createElement("p");
        level.innerHTML = member.datahipLevel;
        
        const card = document.createElement("section");
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        
    });
}

//grid - list 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div#data");

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

function showGrid() {
  display.classList.add("grid");
	display.classList.remove("list");
}
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}