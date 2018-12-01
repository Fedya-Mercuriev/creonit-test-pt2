import { Controller } from './controller.js';
import { ProductsView } from "./assets/views/products/products";
import { CategorySwitch } from "./assets/views/category-switch/category-switch";
import { BigimgView } from './assets/views/big-img-view/big-img';
import { CardModel } from "./assets/models/card-model";

import _ from './styles.scss';


/*
{"id":1,
"title":"\u0428\u0438\u043d\u0430 1",
"slug":"shina-1",
"price":1000,
"image":"http:\/\/vue-tests.dev.creonit.ru\/uploads\/e4f9bd4b166108abf40b9455dad2912c.jpeg",
"image_preview":"http:\/\/vue-tests.dev.creonit.ru\/cache\/4\/f\/1\/4\/2\/4f142b1f8443dae25c894f2dba3460dddf3c4409.jpeg",
"category":{
  "title":"\u0428\u0438\u043d\u044b",
  "slug":"shiny"
}}
*/

  // Эта функция уйдет в модель
  // function prepareItems() {
  //   var itemsArr = goods.responseJSON.items;
  //   items = itemsArr;
  //   for (let item of items) {
  //     let card = new Card();
  //     card.init(item);
  //     cards.push(card);
  //   }
  // }

const controller = new Controller();
const cardModel = new CardModel();

const productsView = new ProductsView($('.js-product-cards-wrapper'));
const categorySwitch = new CategorySwitch($('.js-item-category-switch'));
const bigImgView = new BigimgView($('.big-item-img'));

  function start() {

      controller.registerTask('get', function (itemCategory = controller.defaultCategory) {
          let goods;
          $.get(
              `${controller.apiUrl}/catalog/${itemCategory}`,
              function(data) {
                  return data;
              },
              'json'
          ).done(function(data) {
              let items = cardModel.prepareItems(data.items)
              productsView.render(items);
              categorySwitch.render();
              // bigImgView
          });
      });

      controller.registerTask('post', function (itemId) {
          $.get({
              url: `${controller.apiUrl}/cart/product/${itemId}`,
              function() {
                console.log(`Товар \"${itemId}\" добавлен в корзину`);
              }
          })
      });

      controller.start();

      // Отправляет запрос на сервер
      // controller.task('get', function(category) {
      //   console.log('Отправил запрос get');
      // });
      //
      // controller.task('post', function(itemId) {
      //     console.log('Отправил запрос post');
      // });

      $('body').on('click', () => {
          productsView.cards.forEach((card) => {
              if ($(card.el).hasClass('card--card-expanded')) {
                  card.wrap();
              }
          })
      });

      // Обрабатывает клики по переключателю категорий
      $(window).on('click', (event) => {
          // В зависимости от выбранной категории вызвать get с соответствующим аргументом

      });

  }


  $(window).ready(() => {
    start();
  });


  // goods = $.get({
  //   url: requestUrl,
  //   success: prepareItems,
  //   dataType: 'json'
  // }).done(renderCards.bind(this, cards));
