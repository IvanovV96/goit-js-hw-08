// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css"
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

function renderGallery(images) {
    const markupArr = []
    images.forEach(img => {
        const template = `
        <a class="gallery__item" href="${img.original}">
            <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
        </a>`
      markupArr.push(template)
    })
    gallery.insertAdjacentHTML('beforeend', markupArr.join(''))
}
renderGallery(galleryItems)

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData : 'alt',
    captionDelay: 250
});
