const gridSelector = document.querySelector("#grid");
const listSelector = document.querySelector("#list");
const memberData = document.querySelector("#member-data");

gridSelector.addEventListener("click", ()=>{
  if (!gridSelector.classList.contains("active")){    
      gridSelector.classList.add("active");
      listSelector.classList.remove("active");
      memberData.classList.add("member-cards")
      memberData.classList.remove("list")
  }
});

listSelector.addEventListener("click", ()=>{
  if (!listSelector.classList.contains("active")){
      listSelector.classList.add("active");
      gridSelector.classList.remove("active");
      memberData.classList.add("list")
      memberData.classList.remove("member-cards")
  }
});

const url = "https://fullstacksree.github.io/wdd230/chamber/data/business.json";
const displayBusinesses = (businesses) => {
  const cards = document.querySelector(".member-cards");

  businesses.forEach((business) => {
    const card = document.createElement("section");
    card.innerHTML = `<p>${business.name}</p>
                      <p>${business.address}</p>
                      <p>${business.phone}</p>
                      <p><img src="${business.images}" alt="${business.name}"></p>
                      <a href="${business.website}" target="_blank">${business.website}</a>`;
    if (business.membershipLevel=='gold'){
      card.classList.add("gold-member");
    }
    cards.appendChild(card);
  });
};

async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayBusinesses(data.businesses);
  } else {
    console.error("If there was an error while loading the data");
    const cards = document.querySelector("member-cards");
    cards.innerHTML = "<section><h2>There is an error loading the data</h2></section>";
  }
}

getBusinessData();