 
const recipes = [ ];
 



  const recipeList = document.querySelector('#reserve-list'); 
   
 const addButton = document.querySelector("#add-recipe");
 const modal = document.querySelector("#recipe-modal");
 const cancelButton = document.querySelector("#cancel-recipe");
 const modalContent = document.querySelector("#modal-content");



 

  
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

  card.appendChild(category);
  card.appendChild(name);
  card.appendChild(price);

  card.dataset.id = recipe.id; 
   recipeList.appendChild(card);
}
}


 renderRecipes();
function closeModal (){
    modal.classList.add("hidden");
}
  addButton.addEventListener("click", function () {
    resetForm();
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

 
 
 