export class EventHandlers {
  cosntructor() {

  }
    // Эта функция подсвечивает выбранные элементы
    highlightElems(elemsArr, needsHighlight, modifier) {
      if (needsHighlight) {
        $.each(elemsArr, (_, element) => {
          // Получим класс текущего элемента
          let currElemClass  = $(element).attr('class');
          // Подсветим элемент
          $(element).addClass(`${currElemClass}${modifier}`);
        })
      } else {
        $.each(elemsArr, (_, element) => {
          // Получим класс текущего элемента
          let elementClasses = element.classList,
              classToRemove = elementClasses[elementClasses.length - 1];
          // Подсветим элемент
          $(element).removeClass(`${classToRemove}`);
        })
      }
    }

    addSqueezeEffect(parent) {
      let $cardBody = $(parent).find('div.card-body');
      // Если карточка была нажата, при ее наведении ничего не происходит
      if ($cardBody.hasClass('card-body--hovered')) {
        $cardBody.removeClass('card-body--hovered');
      } else {
        $cardBody.addClass('card-body--hovered')
      }
     }

     removeSqueezeEffect(parent) {
         let $cardBody = $(parent).find('div.card-body');
         $cardBody.removeClass('card-body--hovered');
     }

  }
