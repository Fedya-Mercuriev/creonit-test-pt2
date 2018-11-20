const pug = require('pug');
const renderCardFunc = pug.compileFile('template.pug');

import $ from 'jquery'

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

  let goods,
      requestUrl = 'http://vue-tests.dev.creonit.ru/api/catalog/shiny?page=page',
      items;

  function render() {
    let cardsContainer = $('.js-cards-wrapper');
    for (iem of items) {
      let card = renderCardFunc(item);
      cardsContainer.append(card);
    }
  }

  function prepareItems() {
    let itemsArr = goods.responseJSON.items;
    items = itemsArr;
  }

  goods = $.get({
    url: requestUrl,
    success: prepareItems,
    dataType: 'json'
  });


})(jQuery);
