// import { getUsers } from "./repo/users_repo.js";

// let userModel =  {
//     userId: 0,
//     id: 0,
//     title: "",
//     body: ""
// }

// console.log("Hello World");
// // async function yourFunction() {
// //     try {
// //         const users = await getUsers();
// //         users.forEach(element => {
// //             userModel += element;
// //         });
// //         console.log(userModel); 
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// async function yourFunction() {
//     try {
//         const users = await getUsers();
//         // Assuming users is an array of user objects
//         if (users.length > 0) {
//             users.forEach((item, index) => {
//                 userModel.userId = item.userId;
//                 userModel.id = item.id;
//                 userModel.title = item.title;
//                 userModel.body = item.body;
    
//                 console.log(userModel.id);
//             });
//             // const lastUser = users[users.length - 1]; // Accessing the last user in the array
//             // userModel.userId = lastUser.userId;
//             // userModel.id = lastUser.id;
//             // userModel.title = lastUser.title;
//             // userModel.body = lastUser.body;

//             // console.log(userModel.id);
//         } else {
//             console.log("No users found");
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }


// yourFunction();

// const photos = document.getElementById('photos');

// // console.log(data[0]);
//         // data.forEach((item, index) => {
//             photos.innerHTML= `<li>
//                 <a>${userModel.title}</a>
//                 <p>${userModel.body}</p>
//             </li>`;
//         // });

// import { getUsers } from "./repo/users_repo.js";

// class User {
//     constructor(userId, id, title, body) {
//         this.userId = userId;
//         this.id = id;
//         this.title = title;
//         this.body = body;
//     }

//     // Additional methods if needed
// }

// async function displayUsers() {
//     const photos = document.getElementById('photos');

//     try {
//         const users = await getUsers();
//         if (users.length > 0) {
//             users.forEach((item) => {
//                 const user = new User(item.userId, item.id, item.title, item.body);

//                 const listItem = document.createElement('li');
//                 const anchor = document.createElement('a');
//                 anchor.textContent = user.title;
//                 const paragraph = document.createElement('p');
//                 paragraph.textContent = user.body;

//                 listItem.appendChild(anchor);
//                 listItem.appendChild(paragraph);
//                 photos.appendChild(listItem);
//             });
//         } else {
//             const listItem = document.createElement('li');
//             listItem.textContent = "No users found";
//             photos.appendChild(listItem);
//         }
//     } catch (error) {
//         console.error(error);
//         const listItem = document.createElement('li');
//         listItem.textContent = "Error fetching users";
//         photos.appendChild(listItem);
//     }
// }

// displayUsers();