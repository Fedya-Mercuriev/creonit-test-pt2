import template from '../templates/card.pug';
import { eventHandlers } from './event-handlers';

export class Card {
  constructor() {
    this.el;
    this._data = {};
    this._dynamicElems;
  }

  init(data) {
    //Копируем объект с сведениями о товаре к себе
    for (let key in data) {
      this._data[key] = data[key]
    }
  }

// Эта функция прячет переданные ей элемент
  hideItems(elements) {
    for (var element in elements) {
      elements[element].hide();
    }
  }

// Эта функция отрисовывает карточку товара
  render() {
    let cardsContainer = $('.js-cards-wrapper');
    let card = template(this._data);
    cardsContainer.append(card);
    this.el = $('.card:last');
    let disappearingElems = {
      previewImg: $('.item-preview-img'),
      id: $('.card-text-content__item-id'),
      slug: $('.card-text-content__slug'),
      addToCartBtn: $('.add-to-cart-btn')
    };
    this._dynamicElems = disappearingElems;
    this.hideItems(disappearingElems);
    this.eventListeners();
  }

// Этот метод содержит события для элементов карточки
  eventListeners() {
    // Обработка клика при нажатии на карточку
    $(this.el).click((event) => {
      this.wrapOtherCards(this.el);
      this.expand(this.el);
      event.stopPropagation();
    });

    // Подсвечивает надпись "подробнее" при наведении мышки на карточку
    $(this.el).mouseenter(() => {
      let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
      eventHandlers.highlightElems(elemsToHighlight, true);
    });

    $(this.el).mouseleave(() => {
      let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
      eventHandlers.highlightElems(elemsToHighlight, false);
    })

    // $(this.el).mouseover(() => {
    //   console.log(`Навели мышку на ${this}`);
    //   let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
    //   eventHandlers.highlightElems(elemsToHighlight, true);
    // })
    //
    // $(this.el).mouseout(() => {
    //   console.log(`Убрали мышку с ${this}`);
    //   let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
    //   eventHandlers.highlightElems(elemsToHighlight, false);
    // })
  }

  wrapOtherCards(current) {
    let elemSiblings = $(current).siblings();
    $.each(elemSiblings, (_, elem) => {
      if ( $(elem).hasClass('card--card-expanded')) {
        $(elem).removeClass('card--card-expanded');
      }
    })
  }

  showHiddenElems(elemsObj) {
    for (let elem in elemsObj) {

    }
  }

  expand(element) {
    // Раскроем карточку
    element.toggleClass('card--card-expanded');
    element.children().first().toggleClass('card--card-expanded');
    // Покажем ранее скрытый контент
    $.each($(this.el).children(), (_, element) => {
      let $currentElem = $(element);
      if ($currentElem.css('display') == 'none') {
        $currentElem.show().fadeIn();
      }
    })
  }
}
