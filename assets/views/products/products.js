import { View } from "../view";
import { CardView } from "../card/card";
import _ from './styles.scss';

export class ProductsView extends View{

    constructor(el) {
        super(el);
        this.cards = [];

        // Обрабатываем клики по карточкам
        $(this.el).on('click', 'div.card', (event) => {
            this.cards.forEach((card) => {
                let target = event.currentTarget;
                // Таргетом явлется сама карточка или вложенный элемент?
                if (target == card.el) {
                    if (card.isOpen) {
                        card.wrap();
                    } else {
                        card.expand();
                    }
                } else {
                    if (!card.isOpen) {
                        return
                    } else {
                        card.wrap();
                    }
                }
            })
            event.stopPropagation();
        });

        // $(document.body).click(() => {
        //     this.cards.forEach((card) => {
        //         if (card.isOpen) {
        //             card.wrap();
        //         } else {
        //             return;
        //         }
        //     })
        // })
    }

    render(options) {
        for (let i = 0; i < options.length; i++) {
            let opts = options[i],
                newElement = document.createElement('div');
            $(newElement).addClass('card');
            $(this.el).append(newElement);
            let cardView = new CardView(newElement);
            $(this.el).append(cardView.render(opts));
            this.cards.push(cardView);
        }
    }

    show() {
        $(this.el).show();
    }

    hide() {
        $(this.el).hide();
    }
}