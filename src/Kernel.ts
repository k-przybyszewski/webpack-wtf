import _ from 'lodash';
console.log('asd');

export class Kernel {
    constructor() {
        this.boot();
    }

    boot(): void {

        let ctrl = 'HomeController';

        import(/* webpackChunkName: "[request]" */
            `./controller/${ctrl}`
        ).then(({ default: Controller }) => {
            let ctrl = new Controller();

            console.log(_.compact([0, 1, false, 2, '', 3]));
        });
    }
}