import { Component } from '../../component';

import layout from './layout.pug';


export class CardWrapper extends Component {

  constructor(el) {
    super(el);
  }

  render() {
    $(this.el).append(layout());
  }
}
