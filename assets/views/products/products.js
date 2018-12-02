import { View } from "../view";
import { CardView } from "../card/card";
import _ from './styles.scss';

export class ProductsView extends View {

    constructor(el) {
        super(el);
        this.cards = [];

        // Обрабатываем клики по карточкам
        $(this.el).on('click', 'div.card', (event) => {
            // let addToCartBtn = $(event.currentTarget).find('.add-to-cart-btn');
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

        // ТОЧНАЯ КОПИЯ
        // $(this.el).on('click', 'div.card', (event) => {
        //     this.cards.forEach((card) => {
        //         let target = event.currentTarget;
        //         // Таргетом явлется сама карточка или вложенный элемент?
        //         if (target === card.el) {
        //             if (card.isOpen) {
        //                 card.wrap();
        //             } else {
        //                 card.expand();
        //             }
        //         } else {
        //             if (card.isOpen) {
        //                 card.wrap();
        //             }
        //         }
        //     });
        //     event.stopPropagation();
        // });

        // $(this.el).on('click', (event) => {
        //     // Посмотрим на что нажал пользователь исходя из currentTarget
        //     let eventTargetParentClass = $(event.currentTarget).attr('class').split(' ')[0],
        //         productWrapperClass = $(this.el).attr('class').split(' ')[0];
        //     // Если кликнули на кнопку добавки в корзину
        //     if (eventTargetParentClass === 'card') {
        //         return;
        //     }
        //     // Если кликнули по самой карточке или ее детям, кроме кнопки добавки в корзину
        //     if (eventTargetParentClass === productWrapperClass) {
        //         let parents = $(event.target).parentsUntil('.card');
        //         console.log(parents);
        //         $.each(this.cards, (_, card) => {
        //             if (card.isOpen) {
        //                 card.wrap();
        //             } else {
        //                 card.expand();
        //             }
        //         });
        //     }
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