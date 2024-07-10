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
fruits.push("Lemon");
console.log(fruits);

//shift - видаляє перший елемент масиву
fruits.shift();
console.log(fruits);

//unshift - додає перший елемент масиву
fruits.unshift("Apple");
console.log(fruits);