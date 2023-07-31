import { createRepo } from "./repos.js";

function debounce(fn, debounceTime) {
  let timeout;
  return function () {
    const fncall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fncall, debounceTime);
  };
}
async function searchRepos() {
  const reposList = document.querySelector(".repos");
  const searchInput = document.querySelector(".search-input");
  reposList.innerHTML = "";

  let result;
  let isEmpty = searchInput.value.split("").every((char) => char == " ");
  if (!isEmpty) {
    try {
      let fetchURL = await fetch(
        `https://api.github.com/search/repositories?q=${searchInput.value}&per_page=5`
      );
      result = await fetchURL.json().then((res) => {
        res.items.forEach((repo) => createRepo(repo, reposList));
      });
    } catch {
      throw new Error("Fetch Error");
    }
    return result;
  }
}

export { debounce, searchRepos };
