// ! - НЕ
// || - AБО
// && - І
//комбінація клавіш щоб закоментувати/розкоментувати: виділений код -> ctrl + /

//Масиви
//Оголешення масиву
let cars = ["BMW", "Reno", "Audi",];

//alert(cars);
//alert(cars[2]);//"Audi"

cars[2] = "Ferrari";
cars[1] = "Lada";
//alert(cars);
//alert(cars[2]);


console.log(cars.length);//довжина масиву - кількість елементів
for (let i = 0; i < cars.length; i++){
    console.log(i, cars[i]);
}

function letterFinder (word, match = 'a') {
    for (let i = 0; i < word.length; i++){
        if (word[i] == match)
        {
            console.log(i, word[i]);
        } else console.log('Такої літери в цьому слові немає.');
    }
}

// console.log('letterFinder');
//  //word = ['c', 'a', 't'];
// letterFinder ('Hanna', );
// letterFinder ('Andriy', 'w');
// letterFinder ('Andriy', 'y');

let fruits = ["Apple", "Orange", "Plum", "Kiwi", "Watermelon", "Lemon", "Melon"];

console.log(fruits.length);//0

function showArray (){
//цикл, який виводить всі елменти масиву
 for (let i = 0; i < fruits.length; i++) {
   console.log(i, fruits[i]);
   //console.log(fruits.at(i));
}
}

//останній елемент масиву
console.log(fruits[fruits.length - 1]);//6
console.log("At:", fruits.at(-1));
//at може мати від'ємні значення
//at дозволяє отримати елемент масиву за індексом
// console.log("[]", fruits[1]);
// console.log("[]", fruits[5]);
// console.log("[]", fruits[fruits.length - 1]);//6

// console.log("[]", fruits[3]);
// console.log("{}", fruits.at(-4));
// console.log("{}", fruits.at(3));

//передостанній елемент масиву
console.log(fruits[fruits.length - 2]);//5
console.log("At:", fruits.at(-2));

//showArray();

//Pop - видаляє останній елемент масиву та повертає його
console.log("Pop:");
console.log(fruits.pop(), "видалено");
showArray();

console.log(fruits.pop(), "видалено");
showArray();

//Push - додає елмент в кінець масиву
console.log("Push:");
console.log(fruits.push("Peach"), "додано");
showArray();

fruits.push("Cherry");
fruits.push("Apricot");

console.log(fruits);

//showArray();

fruits.pop();
fruits.pop();
fruits.push("Lemon", "Pinneapple");
console.log(fruits);

//shift - видаляє перший елемент масиву
fruits.shift();
console.log(fruits);

//unshift - додає перший елемент масиву
fruits.unshift("Apple", "Bluberry");
console.log(fruits);
//push/pop працюють швидко
//shift/unshift, працюють повільно.

//Цикли
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 46, 55, 64];
let sumEven = 0, sumOdd = 0, sum1 = 0;
let factorial = 1;
//Цикли і масиви. Індекси для масивів, виведення поточного, попереднього та наступного елментів масиву. Додали код, що рахує суму елементів через один.
console.log(numbers);

for (let i = 0; i < numbers.length; i++){
  //console.log(numbers[i]);
    if (numbers[i] % 2 == 0){//numbers[i]%2 - остача від ділення на 2
        sumEven = sumEven + numbers[i];
    } else {
        sumOdd = sumOdd + numbers[i];
    }
    factorial = factorial * numbers[i];

    if (numbers[i] == numbers[0]){
        console.log('Поточне число:', numbers[i]);
        console.log('Наступне число:', numbers[i+1]);
    } else if (numbers[i] == numbers[numbers.length - 1]){
        console.log('Попереднє число:', numbers[i-1]);
        console.log('Поточне число:', numbers[i]);
    } else {
        console.log('Попереднє число:', numbers[i-1]);
        console.log('Поточне число:', numbers[i]);
        console.log('Наступне число:', numbers[i+1]);
    }
//    // sum1 = sum1 + numbers[i++];
//    if(numbers[i] == numbers[numbers.length-2]){
//     console.log('Sum1:',  sum1);
//     sum1 = sum1 + numbers[i+2];
//    }
}
console.log('Sum of even numbers:', sumEven);
console.log('Sum of odd numbers:', sumOdd);
console.log('Sum1:',  sum1);
console.log('Factorial:', factorial);

// for...of
//numbers = [101, 46, 55, 64, 99, 100];
sumEven = 0;
sumOdd = 0;
factorial = 1;
//цикл працює від першого елменту масиву до останнього
for (let num of numbers){
    console.log(num);
    if (num % 2 == 0){//numbers[i]%2 - остача від ділення на 2
        sumEven = sumEven + num;
    } else {
        sumOdd = sumOdd + num;
    }
    //factorial = factorial * num;

}
console.log('Sum of even numbers:', sumEven);
console.log('Sum of odd numbers:', sumOdd);
//console.log('Factorial:', factorial);

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

let temp;
temp = numbers[0];//temp = 1
numbers[0] = numbers[numbers.length - 1];//numbers[0] = 64
numbers[numbers.length - 1] = temp;//numbers[numbers.length - 1] = 1

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers);

console.log(numbers.length);
numbers.length = 10;//процес скорочення елментів масиву - незворотній
console.log(numbers);

numbers.length = 14;
console.log(numbers);

numbers.length = 0;//повне очищення масиву
console.log(numbers);

let num1 = [64, 83, 29, 10, 18, 19, 35, 20, 24, 101];
let num2 = [83, 10, 65, 10, 77, 89, 24, 99, 100, 101];
let num3 = [];
for (let i = 0; i < num1.length; i++){
    if (num1[i] == num2[i]){
        num3[i] = num1[i];//10
        console.log(num3[i]);
    }
}
console.log(num3);

let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

//Об'єкти
let newModelBMW = {
    name: "BMW M4 CS",
    price: "Starts from £117,100",
    "hourse power": 510,
    turbocharging: true,
    color: "darkgreen",
};

//доступ до ключів через крапку
//виведення значень об'єкту
console.log(newModelBMW);
console.log(newModelBMW.name);
console.log(newModelBMW.price);
//console.log(newModelBMW.hoursePower);
console.log(newModelBMW.turbocharging);
console.log(newModelBMW.color);

//додати/видалити властивості(ключі) об'єкту
newModelBMW.engine = "3.0-litre";
newModelBMW.engineForm = "diamond";
console.log(newModelBMW);

delete newModelBMW.turbocharging;
console.log(newModelBMW);

//доступ до ключів через квадратні дужки
console.log(newModelBMW["name"]);// = console.log(newModelBMW.name);

newModelBMW["turbocharging"] = true;
console.log(newModelBMW["turbocharging"]);
delete newModelBMW.turbocharging;

delete newModelBMW["turbocharging"];// = delete newModelBMW.turbocharging;
console.log(newModelBMW);

delete newModelBMW["hoursePower"];

//коли саме використовувати тільки [ ]
//коли назви ключа має декілька слів
newModelBMW["hourse power"] = 550;//з крапкою неможливо newModelBMW.hourse power 
console.log(newModelBMW);

//[ ] дозволяють звернутися до властивості, ім'я якої може бути результатом виразу
let key = "really pretty";

newModelBMW[key] = true;// newModelBMW["really pretty"] = true;
//newModelBMW.key = true;
console.log(newModelBMW);

//let keyInput = prompt('Введіть, яку властивість моделі BMW M4 хочете побачити?', );//keyInput = те, що ми ввели
//keyInput = "name"
//keyInput = "color"

//console.log(newModelBMW[keyInput]);//newModelBMW["color"] - > darkgreen

//обчислювальні властивості [ ]
let fruit = "apple";
//let fruit = prompt("Які фрукти купити?", "apple");
let vegatable = "potato";

let bag = {
    [fruit + "Sweet"]: 5,
    [vegatable]: 10,
};

// let bag = {};
// bag[fruit] = 5;

console.log(bag);

function makeUser(name, age) {
    return {
        name, // = name: name, 
        age,  // = age: age,
        test: undefined,   
    };
};

let user = makeUser("Hanna", "22");
console.log(user);

//оператор пошуку in
//Перевіряє чи існує ключ в об'єкті? = true/false
console.log( "name" in user );
console.log( "region" in user );
console.log("test" in user);

let developer = {
    name: "Tom",
    age: 25,
    softSkills: 80,
    techSkills: 70,
    health: 100,
}

//цикл for...in (має доступ до ключів/властивостей + до значень)
for (let key in developer) {
    //key - назва ключа/властивості
    // console.log(key);
    // console.log(developer[key]);
    console.log(key, developer[key]);
}

let codes = {
    "+49": "Німеччина",
    "+41": "Швейцарія",
    "+44": "Великобританія",
    "+38": "Україна",
    "+1": "США",
}
//впорядкування властивостей об'єкта
//"49" - цілочисельне ім'я властивості, цикл for...in впорядковує їх за зростанням
for (let key in codes) {
    console.log(key, codes[key]);
}

//завдання 1
//1
let user1 = {};
//2
// user1.name = "Ivan";
user1["name"] = "Ivan";
// //3
// user1.surname = "Smith";
user1["surname"] = "Smith";
// //4
// user1.name = "Petro";
user1["name"] = "Petro";
// //5
// delete user1.name
delete user1["name"];

console.log(user1);

//завдання 2
function isEmpty(obj){
    // if ("8:30" in obj){
    //     return false;
    // }
    // else return true;  
    for (let key in obj){
        return false;
    }
    return true;
}
let schedule = {};

//let result = isEmpty(schedule);
console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";
console.log(schedule);

console.log( isEmpty(schedule) ); // false

//Bugs та Errors
//Bugs - помилка в коді, яка не зупиняє програму, еле прошграма веде себе непередбачувано(не так як нам хочеться)
//Errors - помилка в коді, яка повністю зупиняє програму

/////////////////////////////////////////////////////
//Syntax Error - шматок коду, який не можна прочитати

//SyntaxError: Unexpected EOF
//let error = "Syntax; 

//SyntaxError: Unexpected identifier 'b'. Expected a ')' or a ',' after a parameter declaration.
// function add(a b){
//     let result = a + b;

//     if (result > 10){
//         console.log("Error"); 
//         if (result > 20) //SyntaxError: Unexpected token '}'. Expected a statement as the body of an if block.
//     }
    //return a + b;
//}

/////////////////////////////////////////////////////
//Reference error(помилки під час виконання)

//ReferenceError: Can't find variable: a
//console.log(a); 

// function greeting(){
//     var greeting = "Hello Word!";
//     console.log(greting);//ReferenceError: Can't find variable: greting
//     //ReferenceError: greting is not  defined
// }

// greeting();

/////////////////////////////////////////////////////
//Type error - помилка, коли значення не відповідає очікуваному типу

// function multiple(a, b){
//     console.log(a * b);//NaN - Not a Number
// }

// multiple("Десять", "Десять");

// const a = 1;
// a = 10;
//TypeError: Attempted to assign to readonly property.
//TypeError: Assignment to constant variable

// let a = 1;
// console.log(a());
//TypeError: a is not a function. (In 'a()', 'a' is 1)

//(5).pop();
//TypeError: (5).pop is not a function. (In '(5).pop()', '(5).pop' is undefined)

/////////////////////////////////////////////////////
//Range Error - помилка виникає тоді, коли аргументи функції виходять за межі дозволеного діапазону вхідних значень
// console.log((10).toString(2));
// console.log((104384984).toString(16));
// console.log((10).toString(100));//RangeError: toString() radix argument must be between 2 and 36
//2-36

//try..catch
try {
    // let d = 1;
    // let c = 10;
    //console.log(c + d);

    // let a = 1;
    // console.log(a());

    //console.log((10).toString(100));
} catch(err) { //err = "ReferenceError: Can't find variable: c"
    console.log("Block Catch");
    console.log(err);
}

console.log("This line runs");

//коли нема помилок, блок catch ігнорується
//коли виникає помилка в блоці try, блок try зупиняється, спрацьовує блок catch
//try..catch НЕ може ловити синтаксичні помилки(SyntaxError)

try {
    // setTimeout(function() {
    //     LALALA;
    // }, 1000)

} catch (err){
    console.log("Block Catch");
    console.log(err);
}

console.log("This line runs");

//блоки try та catch працюють синхронно, тому коли в блоці try є затримка, помилка не ловиться