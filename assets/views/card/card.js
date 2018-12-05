import { View } from "../view";
// import { CardWrapper } from "../../blocks/card/card-wrapper/card-wrapper";
import { CardBody } from "../../blocks/card/card-body/card-body";
import { ImagePreview } from "../../blocks/card/img-preview/img-preview";
import { CardContent } from "../card-content/card-content";
import { ExpandCardBtn } from "../../blocks/card/expand-card-btn/expand-card";
import { CardModel } from "../../models/card-model";
import { bigImgView } from "../../../app";

import layout from './layout.pug';
import loading from './loading-layout.pug';

import _ from './styles.scss';

import { controller } from "../../../app";
import { EventHandlers } from "../../js/event-handlers";

const eventHandlers = new EventHandlers();

export class CardView extends View {
    constructor(el) {
        super(el);
        this.isOpen = false;
        this.itemId;
        this.bigImgUrl;
        this.bigImgShown = false;

        this.render();

        // Добавляем компоненты

        this.cardBody = new CardBody($(this.el).find('div.js-card-body-wrapper'));

        this.imgPreview = new ImagePreview($(this.el).find('div.js-item-preview-img-wrapper'));

        // Это view для текстового контента карточки (название, цена и т.д.)
        this.cardContent = new CardContent($(this.el).find('div.card-content'));
        // Если что, вернуть все как было
        this.expandCardBtn = new ExpandCardBtn($(this.el).find('div.view-more-info-btn'));

        // Подсветим надпись "развернуть" при наведении и сожмем тело карточки
        $(this.el).mouseenter((event) => {
            // let $cardBody = $(this.el).find('.card-body');
            // if ($cardBody.hasClass('card-body--hovered')) {
            //     $cardBody.removeClass('card-body--hovered');
            // }

            if ($(event.currentTarget).hasClass('card--card-expanded')) {
                return;
            };
            let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
            eventHandlers.highlightElems(elemsToHighlight, '--highlighted');
            eventHandlers.addSqueezeEffect(this.el);
        });

        $(this.el).mouseleave((event) => {
            // let $cardBody = $(this.el).find('.card-body');
            // if ($cardBody.hasClass('card-body--hovered')) {
            //     $cardBody.removeClass('card-body--hovered');
            // }
            if ($(event.currentTarget).hasClass('card--card-expanded')) {
                return;
            }
            let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
            eventHandlers.dehighlightElems(elemsToHighlight, '--highlighted');
            eventHandlers.removeSqueezeEffect(this.el);
        });

        $(this.el).on('click', 'a.add-to-cart-btn', (event) => {
            event.preventDefault();
            let controlBtn = new Promise((resolve, reject) => {
                controller.tasks['post'](this.itemId);
                $(event.target).html(loading());

                resolve(event.target);

                reject();
            });

            controlBtn.then(
                (target) => {
                    // Анимация загрузки
                    setTimeout(() => {
                        $(target).html('<span class="add-to-cart-btn-status-txt">Готово</span>');
                        $('.add-to-cart-btn-status-txt').fadeTo(1000, 0);
                        setTimeout(() => {
                            $(target).html('Добавить в корзину');
                        }, 1000);
                    }, 1000);
                    console.log(target);

                },
                () => {
                    // Ошибка
                    setTimeout(() => {
                        $(target).html('<span class="add-to-cart-btn-status-txt">Ошибка</span>');
                        $('.add-to-cart-btn-status-txt').fadeTo(1000, 0);
                        setTimeout(() => {
                            $(target).html('Добавить в корзину');
                        }, 1000);
                    }, 1000);
                }
            )
            });

        $(this.el).on('click', 'div.js-item-preview-img-wrapper', (event) => {
            bigImgView.processImg(this.bigImgUrl);
            console.log('Нажали на картинку');
            console.log(event.target);
        })
    }


    render(options) {
        if (options) {
            // this.card.render();
            this.itemId = options.content.id;
            this.cardBody.render();
            this.imgPreview.render(options.content.image_preview);
            this.cardContent.render(options.content);
            this.expandCardBtn.render(options.viewMoreInfoBtn);
        } else {
            $(this.el).html(layout());
        }
    }

    expand() {
        let $cardBody = $(this.el).find('.card-body');
        $(this.el).addClass('card--card-expanded');
        if ($cardBody.hasClass('card-body--hovered')) {
            $cardBody.removeClass('card-body--hovered');
        }
        this.cardBody.expand();
        this.expandCardBtn.expand();
        this.imgPreview.expand();
        this.cardContent.expand();
        this.isOpen = true;
    }

    wrap() {
        let $cardBody = $(this.el).find('.card-body'),
            expandCardBtn = $(this.el).find('.view-more-info-btn');
        $(this.el).removeClass('card--card-expanded');
        if ($cardBody.hasClass('card-body--hovered')) {
            $cardBody.removeClass('card-body--hovered');
        }
        this.cardBody.wrap();
        this.expandCardBtn.wrap();
        this.imgPreview.wrap();
        this.cardContent.wrap();
        // Скрытый метод, убирающий подсветку у надписи "развернуть"
        let elemsToDehighlight = $(this.el).find('.view-more-info-btn').children();
        eventHandlers.highlightElems(elemsToDehighlight, false, '--highlighted');
        this.isOpen = false;
    }
}