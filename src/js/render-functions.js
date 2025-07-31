import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        const firstThreeTags = tags.split(',').slice(0, 3).join(', ');
        return `
          <a class="gallery__item" href="${largeImageURL}">
            <img class="gallery__image" src="${webformatURL}" alt="${firstThreeTags}" loading="lazy"/>
            <div class="gallery__info">
              <p class="info-item"><b>Likes:</b> ${likes}</p>
              <p class="info-item"><b>Views:</b> ${views}</p>
              <p class="info-item"><b>Comments:</b> ${comments}</p>
              <p class="info-item"><b>Downloads:</b> ${downloads}</p>
            </div>
          </a>
        `;
      }
    )
    .join('');
  
  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function appendToGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        const firstThreeTags = tags.split(',').slice(0, 3).join(', ');
        return `
          <a class="gallery__item" href="${largeImageURL}">
            <img class="gallery__image" src="${webformatURL}" alt="${firstThreeTags}" loading="lazy"/>
            <div class="gallery__info">
              <p class="info-item"><b>Likes:</b> ${likes}</p>
              <p class="info-item"><b>Views:</b> ${views}</p>
              <p class="info-item"><b>Comments:</b> ${comments}</p>
              <p class="info-item"><b>Downloads:</b> ${downloads}</p>
            </div>
          </a>
        `;
      }
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); 
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// export function showLoader() {
//   document.querySelector('.loader').classList.remove('is-hidden');
// }

export function showLoader() {
  document.querySelector('.loader').classList.remove('is-hidden');
  document.querySelector('.load-more').classList.add('is-hidden');
}

// export function hideLoader() {
//   document.querySelector('.loader').classList.add('is-hidden');
// }
export function hideLoader() {
  document.querySelector('.loader').classList.add('is-hidden');
  document.querySelector('.load-more').classList.remove('is-hidden');
}

export function showLoadMoreButton() {
  document.querySelector('.load-more').classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('.load-more').classList.add('is-hidden');
}