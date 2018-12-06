import { View } from "../view";
import layout from './layout.pug'
import _ from './styles.scss';

export class BigImgView  extends View {
    constructor(el) {
        super(el);
        this.imgIsShown = false;

        $(this.el).on('click', (event) => {
            if (!$(event.target).is('img')) {
                this.processImg();
            }
        })
    }

    render() {
        $(this.el).append(layout());
    }

    processImg(url = undefined) {
        let img = $(this.el).find('img'),
            imgWrapper = $(this.el).find('.item-big-img-wrapper'),
            elemClassname = $(imgWrapper).attr('class');

        if (!this.imgIsShown) {
            $(img).attr('src', url);
            $(imgWrapper).addClass(`${elemClassname}--img-shown`);
            this.imgIsShown = true;
        } else {
            elemClassname = elemClassname.split(' ');
            $(img).attr('src', '');
            $(imgWrapper).removeClass(`${elemClassname[elemClassname.length - 1]}`);
            this.imgIsShown = false;
        }
    }
}