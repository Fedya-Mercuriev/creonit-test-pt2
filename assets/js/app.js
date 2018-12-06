import { Controller } from './controller.js';
import { ProductsView } from "./assets/js/views/products/products";
import { CategorySwitch } from "./assets/js/views/category-switch/category-switch";
import { CardModel } from "./assets/models/card-model";
import { BigImgView } from './assets/js/views/big-img-view/big-img';

// import _ from './styles.scss';
import _ from './dist/main.scss';

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
              })
          }
      });

      // Обрабатывает клики по переключателю категорий
      $(categorySwitch.el).on('click', '.category-switch-block', () => {
          // В зависимости от выбранной категории вызвать get с соответствующим аргументом
          // Очистим секцию products от карточек
          $(productsView.el).empty();
          controller.tasks['get'](categorySwitch.categoryChosen);
      });

  }


  $(window).ready(() => {
    start();
  });
