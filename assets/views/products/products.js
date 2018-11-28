import { CardView } from "../card/card";
import _ from './styles.scss';

export class ProductsView {

    constructor(el) {
        this.el = el;
    }

    render(options) {
        for (let i = 0; i < options.length; i++) {
            let opts = options[i],
                $newElement = $(document.createElement('div'));
            $newElement.addClass('card');
            $(this.el).append($newElement);
            const cardView = new CardView('.card:last');
            $(this.el).append(cardView.render(opts));
        }
    }

    show() {
        $(this.el).show();
    }

    hide() {
        $(this.el).hide();
    }
}