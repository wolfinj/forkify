import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and there is other pages
    if (curentPage === 1 && numPages > 1) {
      return this._generateMarkupNextPage(curentPage);
    }
    //Page 1 and there is no more pages
    if (curentPage === 1 && numPages === 1) {
      return '';
    }
    //last page
    if (curentPage === numPages) {
      return this._generateMarkupPreviusPage(curentPage);
    }
    //Other pages
    if (curentPage < numPages) {
      return [
        this._generateMarkupPreviusPage(curentPage) +
          this._generateMarkupNextPage(curentPage),
      ].join('');
    }
  }

  _generateMarkupNextPage(page) {
    return `
    <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    
    `;
  }
  _generateMarkupPreviusPage(page) {
    return `
    <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page - 1}</span>
    </button>
    `;
  }
}

export default new PaginationView();
