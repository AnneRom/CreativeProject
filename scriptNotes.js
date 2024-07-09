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
   console.log(fruits[i]);
   //console.log(fruits.at(i));
}
}

//останній елемент масиву
console.log(fruits[fruits.length - 1]);//6
console.log("At:", fruits.at(-1));//at можу мати від'ємні значення

//передостанній елемент масиву
console.log(fruits[fruits.length - 2]);//5
console.log("At:", fruits.at(-2));

showArray();