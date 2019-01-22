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
maxValue(2, 1);
function maxValue(value1, value2) {
    return Math.max(value1, value2);
}
//Definición de tipos
//Boolean
var isBoolean = false;
//Number
var decimal = 43.343;
var age = 21;
//String
var myName = 'Francisco';
//Array
var listAges = [10, 12, 40];
var listNames = ['Juan', 'Isabel', 'Bea'];
//Tuplas
var personTuple;
personTuple = ['Francisco', 30];
//Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Purple"] = 3] = "Purple";
    Color[Color["Brown"] = 4] = "Brown";
})(Color || (Color = {}));
;
//Any
var notSure = '345';
notSure = 24;
notSure = true;
//Void
function alertUser() {
    alert('Alerta de la funcion void');
}
//Null
var u = null;
//Undefined
var ud = undefined;
//Clases
var Animal = /** @class */ (function () {
    function Animal(name, age, skinColor) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + name;
    };
    return Animal;
}());
var animal = new Animal('Juan', 30, Color.Green);
animal.skinColor = Color.Brown;
alert(animal.greet());
//Herencia
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.greet = function () {
        return "Woof! woof! " + name;
    };
    return Dog;
}(Animal));
//Abstractas
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(Person));
var personDeveloper = new Developer('Francisco');
//let personDeveloper = new Person('Francisco');
//Condicional
if (personDeveloper.name === 'Francisco') {
    console.log('Developer found!');
}
switch (animal.skinColor) {
    case Color.Brown:
        console.log('brown!');
        break;
    default:
        console.log('no color found');
        break;
}
