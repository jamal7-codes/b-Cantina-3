 

 
const recipes = [ {
    id: 1,
    name: "Salad",
    category: "Starter",
    price: 10,
    day: null,
    slot: null
  }
];
 
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const slots = ["Starter", "Main course", "Dessert"];

const badgeClass = {
    "Starter": "bg-amber-100 text-amber-800",
    "Main course":"bg-blue-100 text-blue-800",
    "Dessert":"bg-pink-100 text-pink-800"
}
 
const recipeForm = document.querySelector("#recipe-form");

const recipeName = document.querySelector("#recipe-name");
const recipeCategory = document.querySelector("#recipe-category");
const recipePrice = document.querySelector("#recipe-price");

const recipeList = document.querySelector('#reserve-list'); 

 const addButton = document.querySelector("#add-recipe");
 const modal = document.querySelector("#recipe-modal");
 const cancelButton = document.querySelector("#cancel-recipe");
 const modalContent = document.querySelector("#modal-content");
 const weeklyMenu = document.querySelector("#weekly-menu");
 const closeButton = document.querySelector("#close-modal");




const toastContainer = document.querySelector("#toast-container");
 



//  adds up teh prices of one day 
function dayTotal(day, ignoredId){
    let total = 0;
    for(const r of recipes){
        if(r.day === day && r.id !== ignoredId){
            total = total + r.price
        }
    }
    return total;
}

//  show weekly Menu 
function renderWeek(){

weeklyMenu.innerHTML = "";

for (const day of days){
    const card = document.createElement("div");
    card.className = "bg-while border border-gray-200 rounded-xl p-4 flex flex-col";

    const title = document.createElement("h3");
    title.className = "font-bold";
    title.textContent = day;
    card.appendChild(title);

    for (const slot of slots){
        const recipe = recipes.find(function (r){
        return r.day === day && r.slot === slot;

        });
const box = document.createElement("div");
box.className = "bg-gray-50 rounded-lg px-2.5 py-2 flex flex-col items-start gap-1";

const badge = document.createElement("span");
badge.className = "px-2.5 py-1 rounded-full text-xs font-semibold " + badgeClass[slot];
badge.textContent = slot;

const name = document.createElement("p");
const price = document.createElement("p");
price.className = "text-xs text-gray-500";

if(recipe){
    name.className = "text-sm font-semibold";
    name.textContent = recipe.name;
    price.textContent = "+" + recipe.price + "DH";
}else{
    name.className = "text-sm text-gray-400";
    name.textContent = "Empty slot";
    price.textContent = "-";
}
box.appendChild(badge);
box.appendChild(name);
box.appendChild(price);
card.appendChild(box)
    }

    const total = document.createElement("p");
    total.className = "bg-green-100 text-green-800 text.sm font-bold rounded-lg px-2.5 py-2";
    total.textContent = "Total: " + dayTotal(day, null) + " / 50 DH";
    card.appendChild(total);

    weeklyMenu.appendChild(card);
}
}
 
function renderAll(){
    renderRecipes();
    renderWeek();
}

// toast message

function showToast(message, type){
    const toast = document.createElement("div");
    toast.className = "flex items-center gap-3 rounded-lg px-4 py-3 text-while shadow "+ (type === "error" ? "bg-red-600":"bg-green-700");

    const text = document.createElement("span");
    text.textContent = message;
    const x = document.createElement("button");
    x.type ="button";
    x.textContent ="x";
    x.addEventListener("click", function (){toast.remove(); });
    toast.appendChild(text);
    toast.appendChild(x);
    toastContainer.appendChild(toast);

}

recipeList.addEventListener("change", function (event){
    const select = event.target.closest("select");
    if(!select){
        return;
    }
    const recipe = recipes.find(function (r){
        return r.id === Number(select.dataset.id);

    });

    const value = select.value;

    if (value === ""){
        recipe.day = null;
        recipe.slot = null;
        renderAll();
        return;
    }

    const parts = value.split("|");
    const day = parts[0];
    const slot = parts[1];

    if (slot !== recipe.category){
        renderAll();
        showToast("A" + recipe.category + "cannot go in the "+ slot + "slot.", "error");
        return;
    }

    recipe.day = day;
    recipe.slot = slot;
    renderAll();
    showToast(recipe.name + " assigned to "+ day+"." ,"success");
    
});

// show recipes cards
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

 if(recipe.day && recipe.slot){
    select.value = recipe.day + "|" + recipe.slot;
  }
const status = document.createElement("p");
status.className = "text-xs text-gray-500";

if(recipe.day && recipe.slot){
    status.textContent = "Assigned: " + recipe.day + " / " + recipe.slot;   
}else{
    status.textContent = "Not assingned yet";

}

const actions = document.createElement("div");
actions.className = "flex gap-2";

const editButton = document.createElement("button");
editButton.type = "button";
editButton.textContent = "Edit";
editButton.dataset.action = "edit";
editButton.className = "border rounded-lg px-3 text-sm hover:bg-gray-100";

const deleteButton = document.createElement("button");
deleteButton.type = "button";
deleteButton.textContent = "Delete";
deleteButton.dataset.action= "delete";
deleteButton.dataset.id = recipe.id;
deleteButton.className = "border border-red-200 text-red-600 rounded-lg px-3 py-2 text-sm hover:bg-red-50";

actions.append(editButton, deleteButton);

  

card.appendChild(category);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(select);
  card.appendChild(status);
  card.appendChild(actions);

  card.dataset.id = recipe.id; 


   
  
  recipeList.appendChild(card);
  
}
}

// add or edit a recipe
 recipeForm.addEventListener("submit", function(event){
    event.preventDefault();

    const name = recipeName.value.trim();
    const category = recipeCategory.value;
    const price = Number(recipePrice.value);

    if(name === "" || category === "" || recipePrice.value === ""){
        alert("Please fill in all required");
        return;
    }

    if(!Number.isFinite(price) || price <=0 ){
        alert("please enter a valid price");
        return;
    }
    const newRecipe = {
        id:Date.now(),
        name: name,
        category: category,
        price: price,
        day: null,
        slot: null
 
    };

   recipes.push(newRecipe);
   renderRecipes();

   recipeForm.reset();

    closeModal();

 });
 
 renderRecipes();

//  open / close
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
