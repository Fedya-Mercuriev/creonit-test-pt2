import { Component } from "../../component";
import layout from './layout.pug';
import _ from './styles.scss';


export class ItemPrice extends Component {
    constructor(data) {
        super(data);
    }


    render(options) {
        $(this.el).append(layout(options));
    }
}