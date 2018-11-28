import { View } from "../view";
import { CardWrapper } from "../../blocks/card/card-wrapper/card-wrapper";
import { CardBody } from "../../blocks/card/card-body/card-body";
import { ImagePreview } from "../../blocks/card/img-preview/img-preview";
import { CardContent } from "../card-content/card-content";
import { ExpandCardBtn } from "../../blocks/card/expand-card-btn/expand-card";

import layout from './layout.pug';
// import {EventHandlers} from "../../js/event-handlers";


export class CardView extends View {
    constructor(el) {
        super(el);

        this.render();

        // this.render();
        // const eventHandlers = new EventHandlers();

        // Добавляем компоненты

        // this.card = new CardWrapper($('.js-card-wrapper'));
        // и сразу отрисовываем их


        this.cardBody = new CardBody($(`${this.el} .js-card-body-wrapper`));
        // this.cardBody.render();

        this.imgPreview = new ImagePreview($(`${this.el} .js-item-preview-img-wrapper`));
        // this.imgPreview.render(this.options.content['image_preview']);
        // Это view для текстового контента карточки (название, цена и т.д.)
        this.cardContent = new CardContent($(`${this.el} .card-content`));
        this.expandCardBtn = new ExpandCardBtn($(`${this.el} .js-view-more-info-btn-wrapper`));

        // $(this.el).mouseenter(() => {
        //     let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
        //     eventHandlers.highlightElems(elemsToHighlight, true, '--highlighted');
        // });
        //
        // $(this.el).mouseleave(() => {
        //     let elemsToHighlight = $(this.el).find('.view-more-info-btn').children();
        //     eventHandlers.highlightElems(elemsToHighlight, false, '--highlighted');
        // })
    }

    render(options) {
        // $(this.el).html(layout);
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

    show() {

    }

    expand() {

    }

    wrap() {

    }
}