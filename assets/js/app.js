import { Controller } from './controller.js';
import { ProductsView } from "./views/products/products";
import { CategorySwitch } from "./views/category-switch/category-switch";
import { CardModel } from "../models/card-model";
import { BigImgView } from './views/big-img-view/big-img';

import _ from '../scss/main.scss';

export const controller = new Controller();
const cardModel = new CardModel();

const productsView = new ProductsView($('.js-product-cards-wrapper'));
const categorySwitch = new CategorySwitch($('.js-item-category-switch'));

export const bigImgView = new BigImgView($('.big-item-img'));

  function start() {
      categorySwitch.render();

      controller.registerTask('get', function (itemCategory = controller.defaultCategory) {
          $.get(
              `${controller.apiUrl}/catalog/${itemCategory}`,
              function(data) {
                  return data;
              },
              'json'
          ).done(function(data) {
              let items = cardModel.prepareItems(data.items);
              productsView.render(items);
              bigImgView.render();
          });
      });

      controller.registerTask('post', function (itemId) {
          $.post({
              url: `${controller.apiUrl}/cart/product/${itemId}`
          })
      });

      controller.start();

      $('body').on('click', (event) => {
          if ($(event.target).is('a')) {
              return;
          } else {
              productsView.cards.forEach((card) => {
                  if ($(card.el).hasClass('card--card-expanded')) {
                      card.wrap();
                  }
              });
              // categorySwitch.dehighlightToggle();
              // categorySwitch.hideList();
          }
      });

      // Обрабатывает клики по переключателю категорий
      $(categorySwitch.el).on('click', '.categories-dropdown-list', (event) => {
          let itemNum = $(event.target).index(),
              currCategoryNum = categorySwitch.categoriesAvailable.indexOf(categorySwitch.categoryChosen);
          if (itemNum === currCategoryNum) {
              categorySwitch.dehighlightToggle();
              categorySwitch.hideList();
          } else {
              // В зависимости от выбранной категории вызвать get с соответствующим аргументом
              // Очистим секцию products от карточек
              categorySwitch.overrideChosenCategory(categorySwitch.categoriesAvailable[itemNum]);
              $(productsView.el).empty();
              controller.tasks['get'](categorySwitch.categoryChosen);
              categorySwitch.dehighlightToggle();
              categorySwitch.hideList();
          }
      });

  }

  $(window).ready(() => {
    start();
  });
