import { View } from "../view";
import layout from './layout.pug';
import { EventHandlers } from "../../js/event-handlers";

import _ from './styles.scss';

const eventHandlers = new EventHandlers();

export class CategorySwitch extends View {
    constructor(el) {
        super(el);
        this.categoryChosen = 'shiny';

        // Обрабатывает клики по лейблам
        $(this.el).on('click', '.category-link', (event) => {
            let categoryFlag = $(this.el).find('.category-switch-wrapper__category-flag'),
                categoryLinks = $(this.el).find('.category-link');
            this.categoryChosen = $(event.target).text();
            if (this.categoryChosen === 'diski') {
                $(categoryFlag).css('left', '32px');
                $(categoryLinks[0]).removeClass('category-link--category-chosen');
                $(categoryLinks[1]).addClass('category-link--category-chosen');
            } else {
                $(categoryFlag).css('left', '3px');
                $(categoryLinks[0]).addClass('category-link--category-chosen');
                $(categoryLinks[1]).removeClass('category-link--category-chosen');
            }
        });

        // Обрабатывает клики по самому переключателю
        $(this.el).on('click', '.category-switch-wrapper', () => {
            let categoryFlag = $(this.el).find('.category-switch-wrapper__category-flag'),
                categoryLinks = $(this.el).find('.category-link');

            if (this.categoryChosen === 'shiny') {
                this.categoryChosen = 'diski';
                $(categoryFlag).css('left', '32px');
                $(categoryLinks[0]).removeClass('category-link--category-chosen');
                $(categoryLinks[1]).addClass('category-link--category-chosen');
            } else {
                this.categoryChosen = 'shiny';
                $(categoryFlag).css('left', '3px');
                $(categoryLinks[0]).addClass('category-link--category-chosen');
                $(categoryLinks[1]).removeClass('category-link--category-chosen');
            }
        })
    }

    render() {
        $(this.el).append(layout({
            categoryOne: 'shiny',
            categoryTwo: 'diski'
        }));
        let categoryLinks = $(this.el).find('.category-link');
        $(categoryLinks[0]).addClass('category-link--category-chosen')

    }

    switchCategory(category) {

    }


}