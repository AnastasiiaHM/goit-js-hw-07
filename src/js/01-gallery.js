import { galleryItems } from "./gallery-items.js";
// Change code below this line

const wraperGalleryEl = document.querySelector(".gallery");

function createGaleryItemsElem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

const galleryItem = createGaleryItemsElem(galleryItems);

wraperGalleryEl.insertAdjacentHTML("beforeend", galleryItem);

wraperGalleryEl.addEventListener("click", hanleClickElGallery);

window.addEventListener("keydown", handleEscClose);

let instance = "";

function hanleClickElGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  let srcActive = event.target.dataset.source;

  instance = basicLightbox.create(` <img
      class="gallery__image"
      src="${srcActive}"
     width ="1200"
    />`);

  instance.show();
}

function handleEscClose(event) {
  const escape = event.code;
  if (escape === "Escape") {
    instance.close();
    console.log("Escape");
  }
}
