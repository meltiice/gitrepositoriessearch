class View {
   constructor() {
      this.app = document.getElementById('app');

      this.title = this.createElement('h1', 'title');
      this.title.textContent = 'Github Search Repositories';

      this.searchLine = this.createElement('div', 'search-line');
      this.searchInput = this.createElement('input', 'search-input');
      this.searchInput.placeholder = 'Find a repository';
      this.searchLine.append(this.searchInput);

      this.reposWrapper = this.createElement('div', 'repos-wrapper');
      this.reposList = this.createElement('ul', 'repos');
      this.reposWrapper.append(this.reposList);

      this.favs = this.createElement('div', 'favs-repos');
      this.favsName = this.createElement('h2', 'favs-name');
      this.favsName.textContent = 'Favorites repositories';
      this.favsList = this.createElement('ul', 'favs-list');
      this.favs.append(this.favsName);
      this.favs.append(this.favsList);

      this.main = this.createElement('div', 'main');
      this.main.append(this.searchLine);
      this.main.append(this.reposWrapper);
      this.main.append(this.favs);

      this.app.appendChild(this.title);
      this.app.append(this.main);
   }

   createElement(elemTag, elemClass) {
      const element = document.createElement(elemTag);
      if (elemClass) {
         element.classList.add(elemClass);
      }
      return element;
   }
   createRepo(repoData) {
      const repoElement = this.createElement('li', 'repo');
      repoElement.insertAdjacentHTML('afterbegin', `<button class="repo-button">${repoData.name}</button>`);
      this.reposList.append(repoElement);
      repoElement.firstChild.addEventListener('click', this.addFavs.bind(this, repoData));
   }
   addFavs(repoData) {
      const favElement = this.createElement('li', 'fav-elem');
      favElement.insertAdjacentHTML('afterbegin', `<div class="fav-name"><span class="fav-span">Repository</span><span class="fav-p">${repoData.name}</span></div>
                                                   <div class="fav-author"><span class="fav-span">Author</span><span class="fav-p">${repoData.owner.login}</span></div>
                                                   <div class="fav-stars"><span class="fav-span">Stars</span><span class="fav-p">${repoData.stargazers_count}</span></div>
                                                   <button class="fav-button">Delete</button>`);
      const button = favElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
      button.addEventListener('click', this.removeFavs.bind(this, favElement));
      document.querySelector('.favs-list').appendChild(favElement);
      this.reposList.innerHTML = '';
      document.querySelector('.search-input').value = '';
   }
   removeFavs (favElement) {
      favElement.remove();
   }
}

export {View};