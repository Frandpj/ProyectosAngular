//Iteradores

let listNumber: Array<number> = [10, 27, 41];

for (let number of listNumber){
    console.log(number); //10, 27, 41
}

for (let number in listNumber){ //Da el indice
    console.log(number); //0, 1, 2
}

for(let i = 0; i < listNumber.length; i++){
    console.log(i); //0, 1, 2
    console.log(listNumber[i]); //10, 27, 41
}

class CustomCollection<T>{
    private itemArray: Array<T>;
    constructor(){
        this.itemArray = [];
    }

    Add(item: T){
        this.itemArray.push(item);
    }
}

class PersonInfo{
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
}

let listName = new CustomCollection<string>();
listName.Add('Francisco');
let listAge = new CustomCollection<number>();
listAge.Add(30);
let listPersonInfo = new CustomCollection<PersonInfo>();
listPersonInfo.Add(new PersonInfo('Pedro'));

//Interfaces

interface Message{
    title: string;
    message: string;
    errorNumber?: number;
}

function WriteMessage(message: Message){
    console.log(message.title);
}

//Modules y namespaces

namespace Validator{
    export interface NumberValidator{
        isValidNumber(value: number): boolean;
    }

    export class ZipCodeValidator implements NumberValidator{
        isValidNumber(value: number): boolean{
            return value > 0 && 10 < value;
        }
    }
}

let validator: Validator.NumberValidator = new Validator.ZipCodeValidator;

validator.isValidNumber(5);

//Decoradores

function Logged(){
    return function (target: any){
        console.log('Logged!');
    }
}

@Logged()
class TestDecorator{
    method(): boolean{
        return true;
    }
}