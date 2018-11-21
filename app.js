import template from './assets/templates/card.pug';
import "./dist/main.scss";
import { Card } from  "./assets/js/card.js";

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

  function prepareItems() {
    var itemsArr = goods.responseJSON.items;
    items = itemsArr;
    for (let item of items) {
      let card = new Card();
      card.init(item);
      cards.push(card);
    }
  }

  function renderCards(renderItems) {
    for (let i = 0; i < renderItems.length; i++) {
      renderItems[i].render();
    }
  }

  goods = $.get({
    url: requestUrl,
    success: prepareItems,
    dataType: 'json'
  }).done(renderCards.bind(this, cards));
