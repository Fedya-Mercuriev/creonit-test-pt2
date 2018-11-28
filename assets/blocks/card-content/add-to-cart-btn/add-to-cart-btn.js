import { Component } from "../../component";
import layout from './layout.pug';
import _ from './styles.scss';

export class AddToCartBtn extends Component{
    constructor(data) {
        super(data);
    }

    render() {
        $(this.el).append(layout(this.options));
    }
}