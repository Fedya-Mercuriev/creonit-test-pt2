import { View } from "../view";
import layout from './layout.pug';

export class CategorySwitch extends View {
    constructor(el) {
        super(el);
        this.categoriesAvailable = ['shiny', 'diski'];
        this.categoryChosen = this.categoriesAvailable[0];

        // Обрабатывает клики по тогглу
        $(this.el).on('click', '.toggle-categories-dropdown', (event) => {
            console.log(this);
            if ($(this.dropdownList).is(':hidden')) {
                this.highlightToggle();
                this.showList();
            } else {
                this.dehighlightToggle();
                this.hideList();
            }
            event.stopPropagation();
        });

        // Обрабатывает клики по лейблам
        // $(this.el).on('click', '.category-link', (event) => {
        //     console.log($(event.target).parent());
        //     let categoryFlag = $(this.el).find('.category-switch-wrapper__category-flag'),
        //         categoryLinks = $(this.el).find('.category-link');
        //     this.categoryChosen = $(event.target).text();
        //     if (this.categoryChosen === 'diski') {
        //         $(categoryFlag).css('left', '32px');
        //         $(categoryLinks[0]).removeClass('category-link--category-chosen');
        //         $(categoryLinks[1]).addClass('category-link--category-chosen');
        //     } else {
        //         $(categoryFlag).css('left', '3px');
        //         $(categoryLinks[0]).addClass('category-link--category-chosen');
        //         $(categoryLinks[1]).removeClass('category-link--category-chosen');
        //     }
        // });

        // Обрабатывает клики по самому переключателю
        // $(this.el).on('click', '.category-switch-wrapper', () => {
        //     let categoryFlag = $(this.el).find('.category-switch-wrapper__category-flag'),
        //         categoryLinks = $(this.el).find('.category-link');
        //
        //     if (this.categoryChosen === 'shiny') {
        //         this.categoryChosen = 'diski';
        //         $(categoryFlag).css('left', '32px');
        //         $(categoryLinks[0]).removeClass('category-link--category-chosen');
        //         $(categoryLinks[1]).addClass('category-link--category-chosen');
        //     } else {
        //         this.categoryChosen = 'shiny';
        //         $(categoryFlag).css('left', '3px');
        //         $(categoryLinks[0]).addClass('category-link--category-chosen');
        //         $(categoryLinks[1]).removeClass('category-link--category-chosen');
        //     }
        // })
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
        this.toggleListBtn = $(this.el).find('.toggle-categories-dropdown');
        this.dropdownList = $(this.el).find('.categories-dropdown-list');
        $(this.el).find('.categories-dropdown-list').hide();
        //let categoryLinks = $(this.el).find('.category-link');
        //$(categoryLinks[0]).addClass('category-link--category-chosen')
    }

    showList() {
        $(this.dropdownList).slideDown(250);
    }

    hideList() {
        $(this.dropdownList).slideUp(250);
    }

    highlightToggle() {
        let modifier = 'toggled';
        let baseClass = $(this.toggleListBtn).attr('class').split(' ')[0];
        $(this.toggleListBtn).addClass(`${baseClass}--${modifier}`);
    }

    dehighlightToggle() {
        let modifier = 'toggled';
        let baseClass = $(this.toggleListBtn).attr('class').split(' ')[0];
        $(this.toggleListBtn).removeClass(`${baseClass}--${modifier}`);
    }

    overrideChosenCategory(category) {
        let textElem = $(this.toggleListBtn).find('span'); 
        this.categoryChosen = category;
        $(textElem).html(this.categoryChosen);
    }
}