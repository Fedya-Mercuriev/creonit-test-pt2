import { View } from "../view";
import { CardView } from "../card/card";

export class ProductsView extends View {

    constructor(el) {
        super(el);
        this.cards = [];

        // Обрабатываем клики по карточкам
        $(this.el).on('click', 'div.card', (event) => {
            if ($(event.target).is('.item-preview-img')) {
                return;
            }

            if ($(event.target).is('a')) {
                return;
            } else {
                this.cards.forEach((card) => {
                    let target = event.currentTarget;
                    // Таргетом явлется сама карточка или вложенный элемент?
                    if (target === card.el) {
                        if (card.isOpen) {
                            card.wrap();
                        } else {
                            card.expand();
                        }
                    } else {
                        if (card.isOpen) {
                            card.wrap();
                        }
                    }
                    event.stopPropagation();
                });
            }
        });
    }

    render(options) {
        for (let i = 0; i < options.length; i++) {
            let opts = options[i],
                newElement = document.createElement('div');
            $(newElement).addClass('card');
            $(this.el).append(newElement);
            let cardView = new CardView(newElement);
            cardView.bigImgUrl = opts.itemImg;
            $(this.el).append(cardView.render(opts));
            this.cards.push(cardView);
        }
    };
}