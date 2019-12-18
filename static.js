"use strict";
/* type Hero = {
    name: string,
    age: number
}


let hero1: Hero = {
    name : 'Superman',
    age : 25
}

let hero2: Hero = {
    name : 'Spiderman',
    age : 22
}
*/
var CalcConstans = /** @class */ (function () {
    function CalcConstans() {
    }
    CalcConstans.calcCircle = function (dim) {
        return dim * this.PI;
    };
    CalcConstans.prototype.calcCircle1 = function (num) {
        return CalcConstans.calcCircle(num);
    };
    CalcConstans.PI = 3.14;
    return CalcConstans;
}());
var calc1 = new CalcConstans;
// console.log(calc1.PI1);
console.log(CalcConstans.calcCircle(20));
console.log(calc1.calcCircle1(30));
