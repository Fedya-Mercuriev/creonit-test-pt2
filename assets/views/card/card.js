import { View } from "../view";
import { CardWrapper } from "../../blocks/card/card-wrapper/card-wrapper";
import { CardBody } from "../../blocks/card/card-body/card-body";
import { ImagePreview } from "../../blocks/card/img-preview/img-preview";
import { CardContent } from "../card-content/card-content";
import { ExpandCardBtn } from "../../blocks/card/expand-card-btn/expand-card";

import layout from './layout.pug';
import _ from './styles.scss';
import {EventHandlers} from "../../js/event-handlers";


export class CardView extends View {
    constructor(el) {
        super(el);
        this.isOpen = false;

        this.render();

        const eventHandlers = new EventHandlers();

        // Добавляем компоненты

        this.cardBody = new CardBody($(this.el).find('div.js-card-body-wrapper'));
        // this.cardBody.render();

        this.imgPreview = new ImagePreview($(this.el).find('div.js-item-preview-img-wrapper'));
        // this.imgPreview.render(this.options.content['image_preview']);
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
            eventHandlers.highlightElems(elemsToHighlight, true, '--highlighted');
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
            eventHandlers.highlightElems(elemsToHighlight, false, '--highlighted');
            eventHandlers.removeSqueezeEffect(this.el);
        });
    }

    render(options) {
        if (options) {
            // this.card.render();
            this.cardBody.render();
            this.imgPreview.render(options.content.image_preview);
            this.cardContent.render(options.content);
            this.expandCardBtn.render(options.viewMoreInfoBtn.default);
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
        this.isOpen = true;
    }

    wrap() {
        let $cardBody = $(this.el).find('.card-body');
        $(this.el).removeClass('card--card-expanded');
        if ($cardBody.hasClass('card-body--hovered')) {
            $cardBody.removeClass('card-body--hovered');
        }
        this.cardBody.wrap();
        // $(this.el).find('card-body').removeClass('card-body--hovered');
        this.isOpen = false;
    }
}