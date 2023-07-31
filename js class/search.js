import {View} from "./view.js";

class Search extends View {
   constructor() {
      super();
      this.searchInput.addEventListener('keyup', this.debounce(this.searchRepos, 500).bind(this));//this.view
   }
   debounce (fn, debounceTime) {
      let timeout;
      return function() {
          const fncall = () => {fn.apply(this, arguments);}
          clearTimeout(timeout);
          timeout = setTimeout(fncall, debounceTime);
      }
  };
   async searchRepos() {
      this.reposList.innerHTML = '';
      let result;
      try {
         let fetchURL = await fetch(`https://api.github.com/search/repositories?q=${this.searchInput.value}&per_page=5`);
         result = await fetchURL.json()
         .then(res => {
            res.items.forEach(repo => this.createRepo(repo));
         });
      }
      catch {
         throw new Error('Fetch Error');
      }
      return result;
   }
}

export{Search};