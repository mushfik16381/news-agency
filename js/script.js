const loadCatagory = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try{
        fetch(url)
        .then(res => res.json())
        .then(data => displayCatagory(data.data.news_category))
    }
    catch (error){
        console.log(error);
    }
}

const displayCatagory = (catagories) =>{
    const catagoryContainer = document.getElementById('catagory');
    catagories.forEach(catagory => {
        const catagoryDiv = document.createElement('li');

        catagoryDiv.innerHTML=`
        <a href="#" class="active" aria-current="page" onclick="catagoryLoadDeatails('${catagory.category_id}')">${catagory.category_name}</a>
        `;
        catagoryContainer.appendChild(catagoryDiv);
        // console.log(catagory)
    });
    togggle(true);
}

const catagoryLoadDeatails = (category_id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    try{
        fetch(url)
        .then(res => res.json())
        .then(data => displayCatagoryDetails(data.data))
    }
    catch (error){
        console.log(error);
    }
}

const displayCatagoryDetails = (catagoryDetails) =>{
    const detailsContainer = document.getElementById('detail');
    detailsContainer.innerHTML = '';
    let totalNews = document.getElementById('news-found');
    if(catagoryDetails.length>0){
        totalNews.innerText = catagoryDetails.length + ' Items Found'
    }
    else
    {
        totalNews.innerText = 'No Item Found'
    }
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
                        <p class="card-text">${catagoryDetail.details.slice(1,380) + '...'}</p>
                        <div class="d-flex author justify-content-between align-items-center mt-3">
                        <div class="profile-img d-flex align-items-center">
                         
                                <img class="img-fluid profile-img" src="${catagoryDetail.author.img}" alt="">
                      
                            <div class="text ">
                                <p style="color: #FF6F3F;">${catagoryDetail.author.name ? catagoryDetail.author.name: 'No author found'}</p>
                                <p>${catagoryDetail.author.published_date ? catagoryDetail.author.published_date: 'No date found'}</p>
                            </div>
                        </div>
                        <div><p>${catagoryDetail.total_view ? catagoryDetail.total_view: 'No view'}</p></div>
                        <div>
                        <button onclick="modalData('${catagoryDetail._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Read More
                        </button>
                        </div>
                        </div>

                    </div>
                </div>

        `;
        detailsContainer.appendChild(catagoryDetailsDiv);
      
    });
    togggle(false);
}

const modalData = (_id) =>{
    const url = ` https://openapi.programming-hero.com/api/news/${_id}`
    try{
        fetch(url)
        .then(res => res.json())
        .then(data => displayModal(data.data[0]))
    }
    catch (error){
        console.log(error);
    }
}

const displayModal = (id) =>{
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = id.title;
    const discription = document.getElementById('modal-text');
    discription.innerText = id.details;
}


let togggle = (isloading) =>
{
    let loder = document.getElementById('lodder');
    if(isloading){
        loder.classList.remove('d-none');
    }
    else
    {
        loder.classList.add('d-none')
    }
}

loadCatagory();
modalData();
catagoryLoadDeatails('08');