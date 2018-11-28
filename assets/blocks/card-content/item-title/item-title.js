import { Component } from '../../component';
import layout from './layout.pug';


export class ItemTitle extends Component{
    constructor(data) {
        super(data);
    }

    render() {
        $(this.el).append(layout(this.options));
    }
}