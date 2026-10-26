 
const recipes = [ ];
 
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const slots = ["Starter", "Main course", "Dessert"];


    const recipeForm = document.querySelector("#recipe-form");
 const recipeName = document.querySelector("#recipe-name");
const recipeCategory = document.querySelector("#recipe-category");
const recipePrice = document.querySelector("#recipe-price");

  const recipeList = document.querySelector('#reserve-list'); 

 const addButton = document.querySelector("#add-recipe");
 const modal = document.querySelector("#recipe-modal");
 const cancelButton = document.querySelector("#cancel-recipe");
 const modalContent = document.querySelector("#modal-content");
const weeklyMenu = document.querySelector("#weekly-menu")

const toastContainer = document.querySelector("#toast-container");
 

  
function renderRecipes() {

    recipeList.innerHTML = ""

 
for (const recipe of recipes) {

  const card = document.createElement("div");
card.className = "bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-2";

 const category = document.createElement("p");
  category.textContent = recipe.category;
  category.className = "inline-block text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full mb-2";


  const name = document.createElement("p");
  name.textContent = recipe.name;
  name.className = "mb-2 text-lg font-bold";

  const price = document.createElement("p");
  price.textContent = recipe.price + " DH";
  price.className = "text-green-600 font-semibold text-lg";

  const select = document.createElement("select");
  select.className = "border rounded-lg p-1 text-sm";
  
  select.dataset.id = recipe.id;
  select.setAttribute("aria-label", "Assign" + recipe.name);

  const reserveOption = document.createElement("option");
  reserveOption.value = "";
  reserveOption.textContent = "In reserve";
  select.appendChild(reserveOption);

  for (const day of days){
    for(const slot of slots){
        const option = document.createElement("option");
        option.value = day + "|" + slot;
        option.textContent = day+ " - " + slot;
        select.appendChild(option);
    }
  }

  card.appendChild(category);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(select)

  card.dataset.id = recipe.id; 


   
  
  recipeList.appendChild(card);
  
}
}

 recipeForm.addEventListener("submit", function(event){
    event.preventDefault();

    const name = recipeName.value.trim();
    const category = recipeCategory.value;
    const price = Number(recipePrice.value);


    const newRecipe = {
        id:Date.now(),
        name: name,
        category: category,
        price: price
 
    };

   recipes.push(newRecipe);
   renderRecipes();

   recipeForm.reset();

    closeModal();

 });
 
 renderRecipes();

function closeModal (){
    modal.classList.add("hidden");
}
  addButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

cancelButton.addEventListener("click", function(){

    modal.classList.add("hidden")
})

 
modal.addEventListener("click",function(event){
    if (event.target === modal){
   modal.classList.add("hidden");
  
    }
} );

 modalContent.addEventListener("click", function(event){
    event.stopPropagation();
});

 
 
 