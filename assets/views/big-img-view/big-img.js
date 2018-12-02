import { View } from "../view";
import layout from './layout.pug'
import _ from './styles.scss';

export class BigimgView  extends View{
    constructor(el) {
        super(el);
        this.imgUrl;
    }

    render(options) {
        $(this.el).append(layout(options));
    }

    showImg() {

    }
}