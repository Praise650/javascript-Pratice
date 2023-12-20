import { getUsers } from "./repo/users_repo.js";

class User {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    // Additional methods if needed
    // fromJson(item){
    //     this.userId = item.userId;
    //     this.id = item.id;
    //     this.title = item.title;
    //     this.body = item.body;
    // }
}

async function displayUsers() {
    const photos = document.getElementById('photos');

    try {
        const users = await getUsers();
        if (users.length > 0) {
            users.forEach((item) => {
                const user = new User(item.userId, item.id, item.title, item.body);

                const card = document.createElement('div');
                card.classList.add('card');

                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const cardTitle = document.createElement('span');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = user.title;

                const cardBody = document.createElement('p');
                cardBody.classList.add('card-body');
                cardBody.textContent = user.body;

                cardContent.appendChild(cardTitle);
                cardContent.appendChild(cardBody);

                card.appendChild(cardContent);
                photos.appendChild(card);
            });
        } else {
            const noUsersCard = document.createElement('div');
            noUsersCard.classList.add('card');

            const noUsersContent = document.createElement('div');
            noUsersContent.classList.add('card-content');

            const noUsersText = document.createElement('span');
            noUsersText.textContent = "No users found";

            noUsersContent.appendChild(noUsersText);
            noUsersCard.appendChild(noUsersContent);

            photos.appendChild(noUsersCard);
        }
    } catch (error) {
        console.error(error);
        const errorCard = document.createElement('div');
        errorCard.classList.add('card');

        const errorContent = document.createElement('div');
        errorContent.classList.add('card-content');

        const errorText = document.createElement('span');
        errorText.textContent = "Error fetching users";

        errorContent.appendChild(errorText);
        errorCard.appendChild(errorContent);

        photos.appendChild(errorCard);
    }
}

displayUsers();

