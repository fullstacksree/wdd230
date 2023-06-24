// Toggle active/not active buttons

var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});


// Load JSON data and do stuff
const url = "./data/business.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayBusinesses = (businesss) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  businesss.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `
    <p>${business.name}</p>
    <p>${business.address}</p>
    <p>${business.phone}</p>
    <p><img src="${business.images}" alt="${business.alt_text}">
    <p><a href="${business.website}>${business.websiteURL}"</a></p>
    `;
    if (business.membershipLevel=='gold'){
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  }); // end of forEach loop
  
}; // end of function expression

async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayBusinesses(data.businesses);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getBusinessData();







/*const url = "./data/data.json";

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
}*/