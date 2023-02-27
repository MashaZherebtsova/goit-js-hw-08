// Add imports above this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);
const galleryRef =document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryRef.innerHTML=markup;

function createMarkup(images) {
return images.map(({preview,original,description})=>{
    return `
    <a class="gallery__link" href = "${original}" >
      <img
        class= "gallery__image"
        src= "${preview}"
        alt= "${description}"
        title= "Beautiful Image"
      />
    </a>`
    ;
    
}).join('');
}
new SimpleLightbox(".gallery a", {
    /* options */
    captionPosition: "bottom",
    captionDelay: "250",
    captionsData: "alt",
    
  });