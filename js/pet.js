
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

