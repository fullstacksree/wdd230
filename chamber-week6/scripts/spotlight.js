const url = "https://fullstacksree.github.io/wdd230/chamber/data/business.json";
function displaySpotlights(businessList){
    businessList = businessList.filter(x => x.membershipLevel == 'gold' || x.membershipLevel == 'silver');
    spotlights = []
    for (let i=0; i < 3; i++){
      var elt = Math.floor(Math.random() * businessList.length)
      spotlights.push(businessList.splice(elt, 1));
    }
  
    console.log(spotlights);
    const cards = document.createElement(".member-cards");
    for(let j=0; j < 3; j++){
        console.log(spotlights[j])
        const card = document.createElement("section");
        card.innerHTML = `<p>${business.name}</p>
                      <p>${business.address}</p>
                      <p>${business.phone}</p>
                      <p><img src="${business.images}" alt="${business.name}"></p>
                      <a href="${business.website}" target="_blank">${business.website}</a>`;
                      
                      cards.appendChild(card);
        }

  }
  
  async function getBusinessData() {
    const response = await fetch(businessDataUrl);
    if (response.ok) {
      const data = await response.json();
      displaySpotlights(data.businesses);
    } else {
      console.error("There was an error loading the data.");
    }
  }
  
  getBusinessData();