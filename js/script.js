const loadCatagory = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCatagory(data.data.news_category))
}
const displayCatagory = (catagories) =>{
    const catagoryContainer = document.getElementById('catagory');
    catagories.forEach(catagory => {
        const catagoryDiv = document.createElement('li');

        catagoryDiv.innerHTML=`
        <a href="#" onclick="catagoryLoadDeatails('${catagory.category_id}')">${catagory.category_name}</a>
        `;
        catagoryContainer.appendChild(catagoryDiv);
        // console.log(catagory)
    });
}

const catagoryLoadDeatails = (category_id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatagoryDetails(data.data))
}

const displayCatagoryDetails = (catagoryDetails) =>{
    const detailsContainer = document.getElementById('detail');
    detailsContainer.innerHTML = '';
    catagoryDetails.forEach(catagoryDetail => {
        const catagoryDetailsDiv = document.createElement('div');
        catagoryDetailsDiv.classList.add('data')
        catagoryDetailsDiv.innerHTML =`
        <div class="row">
                  <div class="col-md-3">
                    <img src="${catagoryDetail.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title pb-3">${catagoryDetail.title}</h5>
                        <p class="card-text">${catagoryDetail.details}</p>
                        <div class="d-flex author justify-content-between align-items-center mt-3">
                        <div class="profile-img d-flex align-items-center">
                         
                                <img class="img-fluid profile-img" src="${catagoryDetail.author.img}" alt="">
                      
                            <div class="text ">
                                <p style="color: #FF6F3F;">${catagoryDetail.author.name ? catagoryDetail.author.name: 'no author found'}</p>
                                <p>${catagoryDetail.author.published_date ? catagoryDetail.author.published_date: 'no date found'}</p>
                            </div>
                        </div>
                        <div><p>${catagoryDetail.total_view ? catagoryDetail.total_view: 'no view'}</p></div>
                        <div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Read More
                        </button>
                        </div>
                        </div>

                    </div>
                </div>

        `;
        detailsContainer.appendChild(catagoryDetailsDiv);
      
    });
}



catagoryLoadDeatails()
loadCatagory()