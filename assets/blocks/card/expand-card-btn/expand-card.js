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
}