var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = (function () {
    function A() {
    }
    A.prototype.show = function () {
        alert(this.getItems().FOO);
    };
    A.prototype.getItems = function () {
        return {
            FOO: 'A'
        };
    };
    ;
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.getItems = function () {
        return {
            FOO: 'B'
        };
    };
    return B;
}(A));
var a = new A();
var b = new B();
a.show(); // alert "A"
b.show(); // alert "B"
