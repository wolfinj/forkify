import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMesage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _mesage = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(bmark => previewView.render(bmark, false)).join('');
  }
}

export default new BookmarksView();
