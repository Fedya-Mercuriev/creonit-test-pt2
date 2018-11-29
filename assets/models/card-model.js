export class CardModel {
    constructor() {
        this.cardOptions = {
            cardContent: {}
        };
        this.viewMoreInfoTxt = {
            default: "Развернуть",
            expanded: "Свернуть"
        };
        this.itemImg = {};
    }

    prepareItems(itemsArr) {
        let items = itemsArr.map((obj) => {
            let cardInfo = {
                content: {},
                viewMoreInfoBtn: this.viewMoreInfoTxt,
                itemImg: undefined
            };
            for (let key in obj) {
                if (key != 'image') {
                    cardInfo.content[key] = obj[key];
                } else {
                    cardInfo.itemImg = obj[key];
                }
            }
            return cardInfo;
        });
        return items;
    }

    returnItems() {
        return this.cardOptions;
    }
}