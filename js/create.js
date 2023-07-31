import {debounce, searchRepos} from "./async.js";
import {createNewElement} from "./createNewElement.js";

function createTitle(text) {
   let title = createNewElement('h1', 'title');
   title.textContent = text;
   return title;
}
function createSearchLine (placeholder) {
   const searchLine = createNewElement('div', 'search-line');
   const searchInput = createNewElement('input', 'search-input');
   searchInput.placeholder = placeholder;
   searchInput.addEventListener('keyup', debounce(searchRepos, 500).bind(this));
   searchLine.append(searchInput);
   return searchLine;
}
function createSearchList () {
   const reposWrapper = createNewElement('div', 'repos-wrapper');
   const reposList = createNewElement('ul', 'repos');
   reposWrapper.append(reposList);
   return reposWrapper;
}
function createFavsList (title) {
   const favs = createNewElement('div', 'favs-repos');
   const favsName = createNewElement('h2', 'favs-name');
   favsName.textContent = title;
   const favsList = createNewElement('ul', 'favs-list');
   favs.append(favsName);
   favs.append(favsList);
   return favs;
}
function createMain (...blocks) {
   const main = createNewElement('div', 'main');
   for (let block of blocks) {
      main.append(block);
   }
   return main;
}
function createThis() {
   const app = document.getElementById('app');

   const title = createTitle('Github Search Repositories');
   const searchLine = createSearchLine('Find a repository');
   const searchWrapper = createSearchList();
   const favs = createFavsList('Favorites repositories');
   const main = createMain(title, searchLine, searchWrapper, favs);

   app.append(main);
}

export {createThis}