const loadCatagory = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCatagory(data.data.news_category))
}
const displayCatagory = (catagories) =>{
    const catagoryContainer = document.getElementById('catagory');
    catagories.forEach(catagory => {
        const catagoryDiv = document.createElement('li');

        catagoryDiv.classList.add('country');
        catagoryDiv.innerHTML=`
            <li>${catagory.category_name}</li>
        `;
        catagoryContainer.appendChild(catagoryDiv);
        console.log(catagory)
    });
}

const catagoryDeatails = () => {
    const url = ` https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

const displayCatagoryDetails = () =>{
    const DetailsContainer = document.getElementById('row');
    detailsDiv
}



catagoryDeatails()
loadCatagory()