export class Controller {
    constructor() {
        this.apiUrl = "http://vue-tests.dev.creonit.ru/api";
        this.tasks = {};
        this.categories = ['shiny', 'diski'];
        this.defaultCategory = this.categories[0];
    }

    registerTask(name, fn) {
        this.tasks[name] = fn;
    }

    invokeTask(name) {
        let args = Array.prototype.slice.call(arguments, 1);
        return this.tasks[arguments[0]].apply(this, args);
    }

    start() {
        this.invokeTask('get');
    }
}