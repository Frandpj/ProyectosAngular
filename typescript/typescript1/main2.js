"use strict";
//Iteradores
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var listNumber = [10, 27, 41];
for (var _i = 0, listNumber_1 = listNumber; _i < listNumber_1.length; _i++) {
    var number = listNumber_1[_i];
    console.log(number); //10, 27, 41
}
for (var number in listNumber) { //Da el indice
    console.log(number); //0, 1, 2
}
for (var i = 0; i < listNumber.length; i++) {
    console.log(i); //0, 1, 2
    console.log(listNumber[i]); //10, 27, 41
}
var CustomCollection = /** @class */ (function () {
    function CustomCollection() {
        this.itemArray = [];
    }
    CustomCollection.prototype.Add = function (item) {
        this.itemArray.push(item);
    };
    return CustomCollection;
}());
var PersonInfo = /** @class */ (function () {
    function PersonInfo(name) {
        this.name = name;
    }
    return PersonInfo;
}());
var listName = new CustomCollection();
listName.Add('Francisco');
var listAge = new CustomCollection();
listAge.Add(30);
var listPersonInfo = new CustomCollection();
listPersonInfo.Add(new PersonInfo('Pedro'));
function WriteMessage(message) {
    console.log(message.title);
}
//Modules y namespaces
var Validator;
(function (Validator) {
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isValidNumber = function (value) {
            return value > 0 && 10 < value;
        };
        return ZipCodeValidator;
    }());
    Validator.ZipCodeValidator = ZipCodeValidator;
})(Validator || (Validator = {}));
var validator = new Validator.ZipCodeValidator;
validator.isValidNumber(5);
//Decoradores
function Logged() {
    return function (target) {
        console.log('Logged!');
    };
}
var TestDecorator = /** @class */ (function () {
    function TestDecorator() {
    }
    TestDecorator.prototype.method = function () {
        return true;
    };
    TestDecorator = __decorate([
        Logged()
    ], TestDecorator);
    return TestDecorator;
}());
