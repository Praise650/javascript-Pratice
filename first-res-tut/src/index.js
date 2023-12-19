import { apiService, ApiService} from "./api_service/api_service.js";

console.log("Hello World");

const photos = document.getElementById('photos');

async function fetchData() {
    // ApiService.setEndpoint();
    await apiService.retrieveData('/posts').then((data)=>{
        console.log(data);
        for(var item in data){
            photos.innerHTML += `<li>
        <a>${item['title']}</a>
        <p>${item['body']}</p>
        </li>`;
        }
    // data.forEach((currentItem, index) => {
    //     photos.innerHTML += `<li>
    //     <a>${currentItem['title']}</a>
    //     <img src='url(${currentItem['']})'/> 
    //     </li>`;
    // });
    });
}

fetchData().then((_)=>{
    console.log("huhdcsfd");
});
