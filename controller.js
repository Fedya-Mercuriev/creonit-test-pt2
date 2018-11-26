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
        let newArguments = Array.prototype.slice.call(arguments, 1);
        this.tasks[arguments[0]].apply(this, newArguments);
    }


    start() {
        this.invokeTask('get');
    }
}