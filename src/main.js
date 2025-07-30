import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loader = document.getElementById('loader');

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

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#f57676ff',
      });
      return;
    }

    createGallery(data.hits);
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