import { View } from "../view";
import layout from './layout.pug';

export class CategorySwitch extends View {
    constructor(el) {
        super(el);
        this.categoriesAvailable = ['shiny', 'diski'];
        this.categoryChosen = this.categoriesAvailable[0];

        // Обрабатывает клики по лейблам
        $(this.el).on('click', '.category-link', (event) => {
            console.log($(event.target).parent());
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
        // $(this.el).append(layout({
        //     categoryOne: 'shiny',
        //     categoryTwo: 'diski'
        // }));
        $(this.el).append(layout({
            categoryChosen: this.categoryChosen,
            categories: this.categoriesAvailable
        }));
        let categoryLinks = $(this.el).find('.category-link');
        $(categoryLinks[0]).addClass('category-link--category-chosen')
    }
}