import {createNewElement} from "./createNewElement.js";

function createRepo(repoData, reposList) {
   const repoElement = createNewElement('li', 'repo');
   repoElement.insertAdjacentHTML('afterbegin', `<button class="repo-button">${repoData.name}</button>`);
   reposList.append(repoElement);
   repoElement.firstChild.addEventListener('click', addFavs.bind(this, repoData, reposList));
}
function addFavs(repoData, reposList) {
   const favElement = createNewElement('li', 'fav-elem');
   favElement.insertAdjacentHTML('afterbegin', `<div class="fav-name"><span class="fav-span">Repository</span><span class="fav-p">${repoData.name}</span></div>
                                                <div class="fav-author"><span class="fav-span">Author</span><span class="fav-p">${repoData.owner.login}</span></div>
                                                <div class="fav-stars"><span class="fav-span">Stars</span><span class="fav-p">${repoData.stargazers_count}</span></div>
                                                <button class="fav-button">Delete</button>`);
   const button = favElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
   button.addEventListener('click', removeFavs.bind(this, favElement));
   document.querySelector('.favs-list').appendChild(favElement);
   reposList.innerHTML = '';
   document.querySelector('.search-input').value = '';
}
function removeFavs (favElement) {
   favElement.remove();
}

export {createRepo}