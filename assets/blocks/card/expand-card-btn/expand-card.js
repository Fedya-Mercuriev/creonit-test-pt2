import { Component } from "../../component";
import layout from './layout.pug'
import _ from './styles.scss'

export class ExpandCardBtn extends Component {
    constructor(el) {
        super(el);
    }

    render(options) {
        $(this.el).append(layout(options));
    }

    expand() {
        let className = $(this.el).attr('class').split(' ')[0],
            textBlock = $(this.el).find('span');
        $(this.el).addClass(`${className}--card-expanded`);
        $(textBlock).html('Свернуть');
    }

    wrap() {
        let className = $(this.el).attr('class').split(' ')[0],
            textBlock = $(this.el).find('span');
        let classesArr = $(this.el).attr('class').split(' ');
        $(this.el).removeClass(`${classesArr[classesArr.length - 1]}`);
        $(textBlock).html('Развернуть');
    }
}