import template from '../templates/card.pug';

export class Card {
  constructor() {
    this.el;
    this._data = {};
  }

  init(data) {
    //Копируем объект с сведениями о товаре к себе
    for (let key in data) {
      this._data[key] = data[key]
    }
  }

  hideItems(elements) {
    for (var element in elements) {
      elements[element].hide();
    }
  }

  render() {
    // Отрисовываем карточку товара
    let cardsContainer = $('.js-cards-wrapper');
    let card = template(this._data);
    cardsContainer.append(card);
    this.el = $('.card:last');
    let disappearingElems = {
      previewImg: $('.card__item-preview-img'),
      id: $('.card-text-content__item-id'),
      slug: $('.card-text-content__slug'),
      addToCartBtn: $('.add-to-cart-btn')
    }
    this.hideItems(disappearingElems);
  }
}

  // expand() {
  //
  // }
  //
  // wrap() {
  //
  // }
