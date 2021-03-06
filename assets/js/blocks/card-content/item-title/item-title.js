import { Component } from '../../component';
import layout from './layout.pug';


export class ItemTitle extends Component{
    constructor(data) {
        super(data);
    }

    render(options) {
        $(this.el).append(layout(options));
    }

    expand() {
        let titleElem = $(this.el).find('.item-title'),
            elemClasses = $(titleElem).attr('class').split(' ');
        $(titleElem).addClass(`${elemClasses[0]}--card-expanded`);
    }

    wrap() {
        let titleElem = $(this.el).find('.item-title'),
            elemClasses = $(titleElem).attr('class').split(' ');
        $(titleElem).removeClass(elemClasses[elemClasses.length - 1]);
    }

}