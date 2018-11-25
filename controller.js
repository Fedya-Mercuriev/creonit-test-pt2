export class Controller {
    constructor() {
        this.apiUrl = "http://vue-tests.dev.creonit.ru/api/";
        this.tasks = {};
    }

    task(name, fn) {
        this.tasks[name] = fn;
    }

    routeChanged() {
        // Тут будет логика, которая будет обрабатывать хэщ  делать разные запросы
        console.log('Изменился хэш');
    }


    start() {
        window.addEventListener('hashchange', () => {
            this.routeChanged();
        })
    }
}