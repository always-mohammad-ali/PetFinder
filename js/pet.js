
const fetchCategoryButton = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayFetchCategoryButton(data.categories))
    .catch(err => console.error(err))
}
fetchCategoryButton()

const displayFetchCategoryButton = (data) =>{
    const categorizeSection = document.getElementById('categorize-section')

    data.forEach(id =>{
        console.log(id);
        const categorizeDiv = document.createElement("div");
        categorizeDiv.classList.add('flex', 'items-center', 'gap-3', 'my-3')
        categorizeDiv.innerHTML = `
        <button class="px-12 rounded-3xl py-3 flex flex-row gap-3 ">
          <img class="w-8 h-8" src="${id.category_icon}"/>
          <h3 class="text-lg font-bold">${id.category}</h3>
        </button>
        `
         categorizeSection.append(categorizeDiv);
    })
   

}

const loadDisplayPets = () =>{
     fetch('https://openapi.programming-hero.com/api/peddy/pets')
     .then(res => res.json())
     .then(data => displayPets(data.pets))
     .catch(err => console.error(err))
}
loadDisplayPets();

const displayPets = (pets) =>{
    const allPet = document.getElementById('all-pet')

    console.log(pets)

    pets.forEach(pet =>{
        const petCard = document.createElement('div')
        petCard.classList.add('flex', 'flex-row')

        petCard.innerHTML = `
        <div class="card w-65 mx-auto p-3 border-1 border-gray-300 rounded-xl">

           <img class="w-full h-full rounded-xl" src="${pet.image}" />
           <h3 class="text-xl font-bold my-2">${pet.pet_name}</h3>

           <p class="flex gap-2 items-center text-gray-600 "><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=Zkm9nD_HFSMJ&format=png&color=000000"/>Breed: ${pet.breed}</p>

           <p class="flex gap-2 items-center text-gray-600 mt-2"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000"/> Birth: ${pet.date_of_birth}</p>

           <p class="flex gap-2 items-center text-gray-600 mt-2"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=11780&format=png&color=000000"/> Gender: ${pet.gender}</p>

           <p class="flex gap-2 items-center text-gray-600 mt-2 my-4"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000"/> Price: ${pet.price}</p>
           
           <hr class="text-gray-400"/>
           <div class="flex flex-row justify-between mt-4">
              <button class="btn btn-sm"> 
                   <img class="w-8 h-8" src="https://img.icons8.com/?size=100&id=U6uSXVbuA1xU&format=png&color=000000" /> 
              </button>
              <button class="btn btn-sm text-[#0E7A81] font-bold">Adopt</button>
              <button class="btn btn-sm text-[#0E7A81] font-bold">Details</button>
           </div>
        </div>


        `
        allPet.append(petCard)
    })
}


// SCROLLTOCATEGORIZESECTION SECTION FROM VIEW MORE

function scrollToCategory() {
       document.getElementById('categorize-section').scrollIntoView({behavior : 'smooth'});
}
