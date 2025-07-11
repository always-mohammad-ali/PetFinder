
const fetchCategoryButton = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayFetchCategoryButton(data.categories))
    .catch(err => console.error(err))
}
fetchCategoryButton()

const displayFetchCategoryButton = (data) =>{
    const categorizeSection = document.getElementById('categorize-section')
       console.log(data)
    data.forEach(id =>{
        console.log(id.category);
        const categorizeDiv = document.createElement("div");
        categorizeDiv.classList.add('flex', 'items-center', 'gap-3', 'my-3')
        categorizeDiv.innerHTML = `
        <button id="btn-${id.category}" onclick="loadingSpinner('${id.category}') ; categorilyPetLoad('${id.category}')" class="btn px-13 rounded-3xl py-6 flex flex-row gap-3 btn-style">
          <img class="w-8 h-8" src="${id.category_icon}"/>
          <h3 class="text-lg font-bold">${id.category}</h3>
        </button>

        
        <!-- LOADING SPINNER  -->
       <div id="loading-spinner" class="hidden absolute left-50 md:left-110 lg:left-180 mt-80 md:mt-40">
         <span class="loading loading-spinner loading-xl text-[#0E7A81]"></span>
       </div>
    

        
        `
         categorizeSection.append(categorizeDiv);
    })
   

}

// LOADING SPINNER FUNCTION 
function loadingSpinner(spin) {
     const loadSpinner = document.getElementById("loading-spinner")

     loadSpinner.classList.remove("hidden")

     setTimeout(() => {
        console.log('loading', spin);

        loadSpinner.classList.add("hidden");
     }, 1500);
}

// VIDEO LOAD CATEGORIZE SYSTEMATICALLY

const categorilyPetLoad = (categoryName) =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    .then(res => res.json())
    .then(data => {
         removeActiveBgClassName();

         const activeBtn = document.getElementById(`btn-${categoryName}`)
         activeBtn.classList.add('active-bg')

         

        displayPets(data.data)
    })
    .catch(err => console.error(err))
}
categorilyPetLoad()

const removeActiveBgClassName = () =>{
    const btnStyle = document.getElementsByClassName('btn-style')
    
    for(let buttonStyle of btnStyle){
        buttonStyle.classList.remove('active-bg')
    }
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
    
    

    allPet.innerHTML = "";

     if(pets.length == 0){
        allPet.classList.remove('grid');
        allPet.classList.add("hidden")
        setTimeout(() => {
            allPet.classList.remove("hidden")
        }, 1502);
        
        allPet.classList.add('mx-auto', 'items-center', 'flex', 'flex-col')
        
        allPet.innerHTML = `
          <img class="mt-30 mb-2" src="../images/error.webp" />
          <h1 class="text-2xl font-bold mb-1"> No Information Available </h1>
          <p class="text-xs text-gray-500 w-3/5 mb-15">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a. </p>
        `

        return 0;
    }
    else{
        allPet.classList.add("grid")
    }


    console.log(pets)

    

    pets.forEach(pet =>{

       
        const petCard = document.createElement('div')
        petCard.classList.add('flex', 'flex-row', "hidden")
    
        setTimeout(() => {
            petCard.classList.add("inline")
         }, 1502);

        petCard.innerHTML = `
        <div class="card w-5/6 mx-auto p-3 border-1 border-gray-300 rounded-xl">
         
        
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
              <button onclick="loadPetDetails('${pet.petId}')" class="btn btn-sm text-[#0E7A81] font-bold">Details</button>
           </div>
        </div>


        `
        allPet.append(petCard)
    })
}



// LOAD PET DETAILS THROUGH FETCH API ONE BY ONE

const loadPetDetails = (petId) =>{
    fetch(`http://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then(res => res.json())
    .then(data => displayPetDetails(data.petData))
    .catch(err => console.error(err))
}
loadPetDetails();

const displayPetDetails = (petDetails) =>{
    const modalContent = document.getElementById('modal-content')

    modalContent.innerHTML = `
        <div>
            <img class="w-full" src="${petDetails.image}" />
            <h2 class="text-xl font-bold text-[#0E7A81] my-3">${petDetails.pet_name}</h2>

        <div class="grid grid-cols-2 grid-rows-3">
            <p class="flex gap-2 items-center text-gray-600 text-xs"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=Zkm9nD_HFSMJ&format=png&color=000000"/>Breed: ${petDetails.breed}</p>

           <p class="flex gap-2 items-center text-gray-600  text-xs"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000"/> Birth: ${petDetails.date_of_birth}</p>

           <p class="flex gap-2 items-center text-gray-600  text-xs"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=11780&format=png&color=000000"/> Gender: ${petDetails.gender}</p>

           <p class="flex gap-2 items-center text-gray-600   text-xs"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000"/> Price: ${petDetails.price}</p>

           <p class="flex gap-2 items-center text-gray-600  text-xs"><img class="w-6 h-6 " src="https://img.icons8.com/?size=100&id=962&format=png&color=000000"/> Vaccinated Status: ${petDetails.vaccinated_status}</p>
        </div>

        <h3 class="text-xl font-bold text-[#0E7A81] my-3">Details Information: </h3>
        <ul class="text-gray-500 ">${petDetails.pet_details}</ul>
        </div>
    `

    document.getElementById('customModal').showModal();
}


// SCROLLTOCATEGORIZESECTION SECTION FROM VIEW MORE

function scrollToCategory() {
       document.getElementById('categorize-section').scrollIntoView({behavior : 'smooth'});
}



// END SIRE!