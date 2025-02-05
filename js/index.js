// Load Categories
const loadCategories = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
  .then(res => res.json())
  .then(data => displayCategories(data.categories))
  .catch(error => console.error(error));
};

// Load Cards
const loadCards = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
  .then(res => res.json())
  .then(data => displayCards(data.pets))
  .catch(error => console.error(error));
};

// Load Dog Categories
const dogCategories = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/category/dog')
  .then(res => res.json())
  .then(data => displayDogCategories(data.data))
  .catch(error => console.error(error));
};

// Load Card Categories
const loadCardCategories = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/${id}`)
  .then(res => res.json())
  .then(data => displayCards(data.category))
  .catch(error => console.error(error));
};

// Display Dog Categories
const displayDogCategories = (info) => {
  const dogCategories = document.getElementById('dog-categories');
  for (const data of info) {
      const dogCards = document.createElement('div');
      dogCards.classList = 'w-52';
      dogCards.innerHTML = `<img src="${data.image}" alt="Dog Image"/>`;
      dogCategories.appendChild(dogCards);
  }
};

// Display Cards
const displayCards = (pets) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  for (const pet of pets) {
      const petCards = document.createElement('div');
      petCards.classList = 'card bg-base-100 shadow-xl border p-3.5';
      petCards.innerHTML = `
      <figure>
          <img class="object-cover" src="${pet.image}" alt="Pet Image" />
      </figure>
      <div class="card-body">
          <h2 class="card-title text-2xl">${pet.pet_name}</h2>
          <div class="flex gap-2">
              <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/poodle.png" alt="poodle"/>
              <p>Breed: ${pet.breed || 'Not Found'}</p>
          </div>
          <div class="flex gap-2">
              <img width="20" height="20" src="https://img.icons8.com/badges/48/birth-date.png" alt="birth-date"/>
              <p>Birth: ${pet.date_of_birth || 'Not Found'}</p>
          </div>
          <div class="flex gap-2">
              <img width="20" height="20" src="https://img.icons8.com/small/16/transgender.png" alt="transgender"/>
              <p>Gender: ${pet.gender || 'Not Found'}</p>
          </div>
          <div class="flex gap-2 border-b border-black">
              <img width="20" height="20" src="https://img.icons8.com/badges/48/price-tag-usd.png" alt="price-tag-usd"/>
              <p>Price: ${pet.price || 'Not Found'}</p>
          </div>
          <div class="card-actions justify-center gap-5">
              <img class="border border-black rounded-md" width="28" height="28" src="https://img.icons8.com/badges/48/facebook-like.png" alt="facebook-like"/>
              <div class="btn btn-sm badge-outline text-cyan-700">Adopt</div>
              <div class="badge btn btn-sm badge-outline text-cyan-700">Details</div>
          </div>
      </div>
      `;
      cardContainer.appendChild(petCards);
  }
};

// Display Categories (Fixed)
const displayCategories = (information) => {
  const categoriesButton = document.getElementById('categories-div');
  for (const categories of information) {
      const buttonContainer = document.createElement('div');
      buttonContainer.innerHTML = `
      <button onclick="loadCardCategories(${categories.category})" class="btn btn-lg btn-wide btn-outline mx-10 text-2xl"> 
          <img src="${categories.category_icon}" alt="Category Icon"/>
          ${categories.category}
      </button>
      `;
      categoriesButton.appendChild(buttonContainer);
  }
};

// Load Data on Page Load
loadCategories();
loadCards();
dogCategories();
