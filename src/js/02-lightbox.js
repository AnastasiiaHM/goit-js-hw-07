import { galleryItems } from "./gallery-items.js";
// Change code below this line

const wraperGalleryEl = document.querySelector(".gallery");

function createGaleryItemsElem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

const galleryItem = createGaleryItemsElem(galleryItems);
wraperGalleryEl.insertAdjacentHTML("beforeend", galleryItem);
let galleryImages = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.4,
  captions: true,
  captionSelector: "img",
  captionsData: "title",
  captionPosition: "bottom",
  captionDelay: 250,
  animationSpeed: 250,
});
galleryImages.on("error.simplelightbox", function (e) {
  console.log(e);
});
