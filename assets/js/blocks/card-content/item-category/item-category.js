import { Component } from "../../component";
import layout from './layout.pug'

export class ItemCategory extends Component {
    constructor(data) {
        super(data);
    }

    render(options) {
        $(this.el).append(layout(options));
    }

    expand() {
        let elem = $(this.el).find('.item-category'),
            elemClasses = $(elem).attr('class').split(' ');
        $(elem).addClass(`${elemClasses[0]}--card-expanded`);
    }

    wrap() {
        let elem = $(this.el).find('.item-category'),
            elemClasses = $(elem).attr('class').split(' ');
        $(elem).removeClass(elemClasses[elemClasses.length - 1]);
    }
}