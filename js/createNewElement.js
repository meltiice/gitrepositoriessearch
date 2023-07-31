function createNewElement(elemTag, elemClass) {
   const element = document.createElement(elemTag);
   if (elemClass) {
      element.classList.add(elemClass);
   }
   return element;
}

export {createNewElement};