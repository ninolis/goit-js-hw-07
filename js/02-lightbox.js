'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// Function to create single gallery item
const createGalleryItem = ({ preview, original, description }) => {
  const galleryItemEl = document.createElement('a');
  galleryItemEl.classList.add('gallery_item');
  galleryItemEl.href = `${original}`;

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery__image');

  imageEl.src = preview;
  imageEl.alt = description;
  galleryItemEl.append(imageEl);

  return galleryItemEl;
};

// Create array with multiple gallery items
const galleryImages = galleryItems.map(createGalleryItem);

// Append gallery items to the ul with class "gallery"
gallery.append(...galleryImages);

// ** Modal window zoom function
function modalImageZoom(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: Attr,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// gallery.addEventListener('click', modalImageZoom);
