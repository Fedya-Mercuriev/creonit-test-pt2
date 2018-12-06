import { Component } from '../../component';
import layout from './layout.pug';

export class CardBody extends Component {
    constructor(data) {
        super(data);
    }

    render() {
        $(this.el).append(layout());
    }

    expand() {
        let bodyElem = $(this.el).find('div.card-body'),
            elemClasses = $(bodyElem).attr('class').split(' ');
        $(bodyElem).addClass(`${elemClasses[0]}--card-expanded`);
    }

    wrap() {
        let bodyElem = $(this.el).find('div.card-body'),
            elemClasses = $(bodyElem).attr('class').split(' ');
        $(bodyElem).removeClass(elemClasses[elemClasses.length - 1]);
    }
}