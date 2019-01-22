maxValue(2, 1);

function maxValue(value1: number, value2: number): number{
    return Math.max(value1, value2);
}

//Definición de tipos

//Boolean

let isBoolean: Boolean = false;

//Number

let decimal: number = 43.343;
let age: number = 21;

//String

let myName: string = 'Francisco';

//Array

let listAges: number[] = [10, 12, 40];
let listNames: Array<String> = ['Juan', 'Isabel', 'Bea'];

//Tuplas

let personTuple: [string, number];
personTuple = ['Francisco', 30];

//Enums

enum Color{Red, Green, Yellow, Purple, Brown};

//Any

let notSure: any = '345';
notSure = 24;
notSure = true;

//Void

function alertUser(): void{
    alert('Alerta de la funcion void');
}

//Null

let u: null = null;

//Undefined

let ud: undefined = undefined;

//Clases

class Animal{
    readonly name: string;
    private age: number;
    public skinColor: Color;

    constructor(name: string, age: number, skinColor: Color){
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }

    greet(): string{
        return `Hello, ${name}`;
    }
}

let animal = new Animal('Juan', 30, Color.Green);
animal.skinColor = Color.Brown;
alert(animal.greet());

//Herencia

class Dog extends Animal{
    greet(): string{
        return `Woof! woof! ${name}`;
    }
}

//Abstractas

abstract class Person{
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Developer extends Person{

}
let personDeveloper = new Developer('Francisco');

//let personDeveloper = new Person('Francisco');

//Condicional

if(personDeveloper.name === 'Francisco'){
    console.log('Developer found!');
}

switch(animal.skinColor){
    case Color.Brown:
    console.log('brown!');
    break;
    default:
    console.log('no color found');
    break;
}