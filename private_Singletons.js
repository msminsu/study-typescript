"use strict";
// Singletons    메서드를 한개만 만든
var Single = /** @class */ (function () {
    function Single(name) {
        this.age = 0;
        this.name = 'super woman';
    }
    Single.getInstance = function () {
        if (!Single.instance) {
            Single.instance = new Single('Woman');
        }
        return Single.instance;
    };
    return Single;
}());
// let single1 = new Single('catgirl');
// console.log(single1.name);
var singleTwo = Single.getInstance();
var singleOne = Single.getInstance();
console.log(singleOne == singleTwo);
