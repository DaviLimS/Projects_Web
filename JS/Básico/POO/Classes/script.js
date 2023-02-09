class obj {
    constructor(param) {
        this.param = param;
    }

    set param(string) {
        this.param = string;
    }

    get param() {
        return this.param;
    }

    walk() {
        return this.name + 'está andando';
    }

    function1() {
        console.log('Isso é um método === função');
    }
}