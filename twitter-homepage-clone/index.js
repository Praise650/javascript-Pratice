import { items } from "./core/data/footer-data-repo.js";

const listItem = document.querySelector('.footer-list-item');

items.forEach((currentItem, index) => {
    listItem.innerHTML += `<li><a>${currentItem}</a></li>`;
});