"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
        this.hero = 'Batman';
    }
    // private 는 자손도 안되고 내부에서만 사용
    Base.prototype.action = function () {
        console.log('Driving Bat car!');
    };
    return Base;
}());
var base1 = new Base;
// console.log(base1.action());  protected 밖에서 호출 못함
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hero = 'Robin';
        return _this;
    }
    Derived.prototype.action = function () {
        // super points to public or protected method.
        _super.prototype.action.call(this);
        console.log('Running');
    };
    return Derived;
}(Base));
var dev1 = new Derived;
console.log(dev1.hero);
console.log(dev1.action());
// https://www.youtube.com/watch?v=0NyTg9iNzGA&list=PLlSZlNj22M7S1HmF3Vs8TJ2gUq_0xNN6-&index=28
