import template from './assets/templates/card.pug';
// import "./dist/main.scss";
// import { Card } from  "./assets/js/card.js";
import { Controller } from './controller.js';
// import { ProductsView } from "./assets/views/products/products";
// import  { CardView } from "./assets/views/card/card";


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

  var goods,
      requestUrl = 'http://vue-tests.dev.creonit.ru/api/catalog/shiny?page=page',
      items,
      cards = [];

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

  function start() {
      const controller = new Controller();
      // Делает запрос

      // Сортирует данные и выдает их каждому view (только те даннеы, которые нужны конкретным view)
      // const productsView = new ProductsView($('.js-product-cards-wrapper'));

      // const card = new CardView();

      controller.registerTask('get', function (itemCategory = controller.defaultCategory) {
          $.get(
              `${controller.apiUrl}/catalog/${itemCategory}`,
              function(data) {
                  return data;
              },
              'json'
          );
      });

      controller.registerTask('post', function (itemId) {
          $.get({
              url: `${controller.apiUrl}/cart/product/${itemId}`
          }).done(() => {
              console.log(`Товар \"${itemId}\" добавлен в корзину`);
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

  }

  $(window).ready(() => {
    start();
  });

  // function renderCards(renderItems) {
  //   for (let i = 0; i < renderItems.length; i++) {
  //     renderItems[i].render();
  //   }
  // }

  // goods = $.get({
  //   url: requestUrl,
  //   success: prepareItems,
  //   dataType: 'json'
  // }).done(renderCards.bind(this, cards));
