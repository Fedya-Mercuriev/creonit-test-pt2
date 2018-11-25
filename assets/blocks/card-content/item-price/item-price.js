import { Component } from "../../component";
import layout from './layout.pug';
import _ from './styles.scss';


export class ItemPrice extends Component {
    constructor(data) {
        super(data);
    }


    render() {
        $(this.el).html(layout(this.options));
    }
}