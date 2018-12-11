import { View } from "../view";
import layout from './layout.pug';

export class CategorySwitch extends View {
    constructor(el) {
        super(el);
        this.categoriesAvailable = ['shiny', 'diski'];
        this.categoryChosen = this.categoriesAvailable[0];

        // Обрабатывает клики по тогглу
        $(this.el).on('click', '.toggle-categories-dropdown', (event) => {
            if ($(this.dropdownList).is(':hidden')) {
                this.highlightToggle();
                this.showList();
            } else {
                this.dehighlightToggle();
                this.hideList();
            }
            event.stopPropagation();
        });
    }

    render() {
        let chosenCategoryNum = this.categoriesAvailable.indexOf(this.categoryChosen),
            listItemBaseclass;
        $(this.el).append(layout({
            categoryChosen: this.categoryChosen,
            categories: this.categoriesAvailable
        }));
        this.toggleListBtn = $(this.el).find('.toggle-categories-dropdown');
        this.dropdownList = $(this.el).find('.categories-dropdown-list');
        listItemBaseclass = $('.categories-dropdown-list li').attr('class').split(' ')[0];
        $('.categories-dropdown-list li').eq(chosenCategoryNum).addClass(`${listItemBaseclass}--category-chosen`);
        $(this.el).find('.categories-dropdown-list').hide();
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

    highlightChosenCategory(item) {
        let itemBaseClass = $(item).attr('class').split(' ')[0];
        $(item).addClass(`${itemBaseClass}--category-chosen`);
    }

    dehighlightChosenCategory(item) {
        let itemBaseClass = $(item).attr('class').split(' ')[0];
        $(item).removeClass(`${itemBaseClass}--category-chosen`);
    }
}