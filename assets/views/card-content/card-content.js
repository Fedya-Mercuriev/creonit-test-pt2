import { ItemTitle } from "../../blocks/card-content/item-title/item-title";
import { ItemPrice } from "../../blocks/card-content/item-price/item-price";
import { ItemId } from "../../blocks/card-content/item-id/item-id";
import {ItemCategory} from "../../blocks/card-content/item-category/item-category";
import { AddToCartBtn } from "../../blocks/card-content/add-to-cart-btn/add-to-cart-btn";
import { View } from "../view";

import layout from './layout.pug';

export class CardContent extends View {
    constructor(el) {
        super(el);

        // this.render();
        this.title = new ItemTitle(this.el);
        this.price = new ItemPrice(this.el);
        this.itemId = new ItemId(this.el);
        this.itemCategory = new ItemCategory(this.el);
        this.addToCartBtn = new AddToCartBtn(this.el);
    }

    render(cardContent) {
        if (cardContent) {
            this.title.render(cardContent.title);
            this.price.render(cardContent.price);
            this.itemId.render(cardContent.id);
            this.itemCategory.render(cardContent.category);
            this.addToCartBtn.render('Добавить в корзину');
        }
        // else {
        //     this.el.html(layout());
        // }

    }

    // Отобразим компоненты и релизуем обработчики событий
}

