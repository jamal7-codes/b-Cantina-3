 
 const addButton = document.querySelector("#add-recipe");
 const modal = document.querySelector("#recipe-modal");
 const cancelButton = document.querySelector("#cancel-recipe");
 const modalContent = document.querySelector("#modal-content");

 addButton.addEventListener("click", function () {
    modal.classList.remove("hidden");
});
 

cancelButton.addEventListener("click", function(){
    modal.classList.add("hidden")
})

 
modal.addEventListener("click",function(){
    modal.classList.add("hidden");
} );

 modalContent.addEventListener("click", function(){
    event.stopPropagation();
});

 