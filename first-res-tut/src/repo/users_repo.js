import { apiService } from "../api_service/api_service.js";

// async function fetchData() {
//     try {
//         // ApiService.setEndpoint();
//         let users = await apiService.retrieveData('/posts');
//         // users.forEach((item, index) => {
//         //     user += item;
//         // }); 
//         // console .log(user)
//         return users;
//     } catch (error) {
//         console.error(error)
//     }
// }

// let users = async () => {await fetchData()};

// console.log(users());

// export {users};

async function fetchData() {
    try {
        let users = await apiService.retrieveData('/posts');
        console.log("user data..", users);
        return users;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

async function getUsers() {
    try {
        return await fetchData();
    } catch (error) {
        console.error(error);
        return []; // or handle the error accordingly
    }
}

export {getUsers};