import { Component } from '../../component';

import layout from 'assets/blocks/card/card-wrapper/layout.pug';


export class CardWrapper extends Component {

  constructor(data) {
    super(data);
  }

  render() {
    $(this.el).html(layout(this.options));
  }
}
