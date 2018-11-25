import { Component } from '../../component';
import layout from './layout.pug';
import _ from './styles.scss';

export class ImagePreview extends Component{
    super(data);

    render() {
        $(this.el).html(layout(this.options));
    }
}