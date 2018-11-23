let eventHandlers = {
    // Эта функция подсвечивает выбранные элементы
    highlightElems(elemsArr, needsHighlight) {
      if (needsHighlight) {
        $.each(elemsArr, (_, element) => {
          // Получим класс текущего элемента
          let currElemClass  = $(element).attr('class');
          // Подсветим элемент
          $(element).addClass(`${currElemClass}--highlighted`);
        })
      } else {
        $.each(elemsArr, (_, element) => {
          // Получим класс текущего элемента
          let elementClasses = element.classList,
              classToRemove = elementClasses[elementClasses.length - 1];
          // Подсветим элемент
          $(element).removeClass(`${classToRemove}`);
        })
        // for (let i = 0; i < elemsArr[i]; i++) {
        //   // Получим класс текущего элемента
        //   let currElemClass = $(elemsArr[i]).attr('class');
        //   // Подсветим элемент
        //   $(elemsArr[i]).removeClass(`${currElemClass}--highlighted`);
        // }
      }
    }
  };

export {eventHandlers};
