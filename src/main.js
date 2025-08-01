import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  appendToGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

const perPage = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'The search field cannot be empty',
      position: 'topRight',
      backgroundColor: '#f57676ff',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, no images found. Try again!',
        position: 'topRight',
        backgroundColor: '#f57676ff',
      });
      return;
    }

    createGallery(data.hits);
    form.reset();
    if (currentPage * perPage < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({ message: "We're sorry, but you've reached the end of search results.", position: 'topRight', backgroundColor: '#f57676ff' });
    }
  } catch (error) {
    iziToast.error({
      message: 'The request failed. Please try again later',
      position: 'topRight',
      backgroundColor: '#f57676ff',
    });
    console.error('API Error:', error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    appendToGallery(data.hits);

    const { height: cardHeight } = document.querySelector('.gallery a').getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (currentPage * perPage >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#f57676ff',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Failed to load more images',
      position: 'topRight',
      backgroundColor: '#f57676ff',
    });
    console.error('Load more error:', error);
  } finally {
    hideLoader();
  }

  if (currentPage * perPage < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
});