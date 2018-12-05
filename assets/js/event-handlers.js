export class EventHandlers {
  cosntructor() {

  }
    // Эта функция подсвечивает выбранные элементы
    highlightElems(elemsArr, modifier) {
      let elemsAr = $.makeArray(elemsArr);
        elemsAr.forEach((element) => {
            let currElemClass  = $(element).attr('class').split(' ')[0];
            // Подсветим элемент
            $(element).addClass(`${currElemClass}${modifier}`);
        });
        // $.each(elemsArr, (_, element) => {
        //   // Получим класс текущего элемента
        //   let currElemClass  = $(element).attr('class').split(' ')[0];
        //   // Подсветим элемент
        //   $(element).addClass(`${currElemClass}${modifier}`);
        // })
    }

    dehighlightElems(elemsArr, modifier) {
        let elemsAr = $.makeArray(elemsArr);
        elemsAr.forEach((element) => {
            let currElemClass  = $(element).attr('class').split(' ')[0];
            // Подсветим элемент
            $(element).removeClass(`${currElemClass}${modifier}`);
        });
    }

    addSqueezeEffect(parent) {
      let $cardBody = $(parent).find('div.card-body');
      // Если карточка была нажата, при ее наведении ничего не происходит
      // if ($cardBody.hasClass('card-body--hovered')) {
      //   $cardBody.removeClass('card-body--hovered');
      // } else {
        $cardBody.addClass('card-body--hovered')
      // }
     }

     removeSqueezeEffect(parent) {
         let $cardBody = $(parent).find('div.card-body');
         $cardBody.removeClass('card-body--hovered');
     }

  }
