import { Component } from '../../component';

import layout from './layout.pug';


export class CardWrapper extends Component {

  constructor(data) {
    super(data);
  }

  render() {
    $(this.el).html(layout());
  }
}
