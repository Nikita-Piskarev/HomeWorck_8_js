// 1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// const number1 = [1, 2, 3];
// const number2 = [4, 5, 6];

// const lunchtime = number1.concat(number2);
// console.log(lunchtime);

// 2 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// const number1 = [1, 2, 3];

// const reversed = number1.reverse();
// console.log(number1);

// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const number1 = [1, 2, 3];

// number1.push(4, 5, 6);

// number1.unshift(4, 5, 6);

// console.log(number1);

// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

// const program = ['js', 'css', 'jq'];
// console.log(program[0]);
// const js = program.shift();

// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .

// const program = ['js', 'css', 'jq'];
// console.log(program[program.length-1]);
// const jq = program.pop();

// 7 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// const numbers = [1, 2, 3, 4, 5];

// const newNumber = numbers.slice(0,3);

// 8 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// const numbers = [1, 2, 3, 4, 5];
// const newNumber = numbers.slice(-2);

// 9 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 2);

//  10 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// const numbers = [1, 2, 3, 4, 5];
// const newNumber = numbers.splice(1, 3);

// 11 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(3, 0, "a", "b", "c");

// 12 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 0, 'a', 'b' );
// numbers.splice(6, 0, 'c');
// numbers.splice(8, 0 ,'e');

//  13 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// Можно и без этого дла практики сделал функцию
// const numbers = [3, 4, 1, 2, 7];
// numbers.sort( function (a, b){ return a > b ? 1: -1} )

// console.log( numbers );

// 14 Дан массив со следующими объектами внутри:
// {firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”

// const user1 = {
//   firstName: "Test",
//   lastName: "Testovich",
//   age: 42,
//   gender: "male",
// };
// const user2 = {
//   firstName: "User",
//   lastName: "Userovich",
//   age: 12,
//   gender: "male",
// };
// const user3 = {
//   firstName: "Test`ya",
//   lastName: "Testovna",
//   age: 16,
//   gender: "female",
// };
// const user4 = {
//   firstName: "Logina",
//   lastName: "Consol`evna",
//   age: 42,
//   gender: "female",
// };

// const user = [user1, user2, user3, user4];

// const user = [
//   { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
// ];

// user.forEach((currentValue, index) => {
//   console.log(`Value:`, currentValue);
//   console.log(`index:, ${index}`);
//   console.log(
//     `Пользователь ${currentValue.firstName} ${currentValue.lastName} является ${currentValue.gender} и ему сейчас ${currentValue.age} лет`
//   );
// });

// 15 Дан массив со следующими объектами внутри:  					{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).

// const user = [
//   { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
// ];

// const user1 = user.map(function (currentValue) {
//   currentValue.telephoneNumber = 2043909580;
//   return currentValue;
// });

// 16 Дан массив со следующими объектами внутри:
// {firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender ‘male’,},
// {firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}				Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.

// const user = [
//   { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//   { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//   { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//   { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
//   { firstName: "Undefined", lastName: "Undefinovich", age: 99 },
//   { firstName: "Null", lastName: "Nullovich", gender: "male" },
// ];

// const userFilter = user.filter(function (elem) {
//   return elem.gender === "male" && elem.age >= 18;
// });

// 17 Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.

// const numbers = [1, 2, 3, [10, 20, 30, [100, 200, 300, [1000, 2000, 3000]]]];

// const newNumbers = numbers.flat(Infinity);
