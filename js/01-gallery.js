'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// Function to create single gallery item
const createGalleryItem = ({ preview, original, description }) => {
  const galleryItemEl = document.createElement('div');
  galleryItemEl.classList.add('gallery_item');

  const imageLinkEl = document.createElement('a');
  imageLinkEl.classList.add('gallery__link');
  imageLinkEl.href = `${original}`;

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery__image');
  imageEl.setAttribute('data-source', `${original}`);

  imageEl.src = preview;
  imageEl.alt = description;
  imageLinkEl.append(imageEl);
  galleryItemEl.append(imageLinkEl);
  return galleryItemEl;
};

// Create array with multiple gallery items
const galleryImages = galleryItems.map(createGalleryItem);

// Append gallery items to the div with class "gallery"
gallery.append(...galleryImages);

// Function to zoom in modal window
function modalImageZoom(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
<img
class="gallery__image"
src="${event.target.getAttribute('data-source')}"
alt="${event.target.alt}"
/>
`);

  instance.show();
  if (instance.visible()) {
    gallery.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        instance.close();
      }
    });
  }
}

gallery.addEventListener('click', modalImageZoom);
gallery.removeEventListener('click', modalImageZoom, true);
