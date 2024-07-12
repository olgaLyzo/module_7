//Задание 7.7.1

// Создайте функцию printInfo, 
// которая будет выводить информацию о человеке 
// в формате "Name: <имя>, Age: <возраст>". 
// Создайте объект person с двумя свойствами: name и age. 
// Используйте метод call, чтобы вызвать функцию printInfo 
// от имени объекта person.

const Person = {
  name: 'Olga',
  age: 25
}
function printInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  }
console.log(printInfo.call(Person))

///////////////////////////////////////////////////////////
//Задание 7.7.2
//Создайте функцию calculate, которая будет принимать три параметра: a, b и operator. Функция должна производить математическую операцию между a и b в зависимости от значения operator (может быть "+", "-", "*" или "/") и возвращать результат операции. Используйте метод apply, чтобы вызвать функцию calculate с передачей объекта со значениями a, b и operator в качестве первого аргумента и массива с тремя значениями [2, 3, "+"] в качестве второго аргумента.

const Obj = {
  a: 0,
  b: 0,
  operator: ''
};

const arr = [2, 3, "+"];

function calculate(a, b, operator) {
  let res;
  switch (operator) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  return res;
}
const result = calculate.apply(Obj, arr);
console.log(result); // Должно вывести 5

///////////////////////////////////////////////////////////
//Задание 7.7.3
//Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст). Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18. Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.

const users = [
  {name:'olga',age: 13}, 
  {name:'oleg',age: 33}, 
  {name:'nic', age:50}, 
  {name:'max', age: 20}]

const usersNames = [];
users.forEach((obj)=>
   usersNames.push({name: obj.name})
)
console.log(usersNames);
  
const newArr = [];
users.forEach((el)=>
   (el.age === 18 || el.age > 18) && newArr.push(el)
  )
console.log(newArr) 

/////////////////////////////////////////////////////////

//Задание 7.7.4
//Создайте функцию setFullName, которая будет устанавливать свойство fullName у переданного ей объекта. 
//Используйте метод bind, чтобы создать новую функцию setPersonFullName, которая будет устанавливать fullName для объекта person из предыдущего примера. 
//Вызовите setPersonFullName с параметром "John Smith" и убедитесь, что свойство fullName объекта person было изменено соответствующим образом. 
 
const Person = {
  name: 'Olga',
  age: 25,
  fullName: 'carter'
} 
 
function setFullName(obj, str) {
  obj.fullName = str;
}

const setPersonFullName = setFullName.bind(null, Person);

setPersonFullName("John Smith");

console.log(Person.fullName); // Должно вывести "John Smith"

/////////////////////////////////////////////////////////
//Задание 7.7.5
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа, отсортированные в порядке возрастания.

const arr = [3,5,6,3,4,4,8];

function sortSomeArr(arr){
  const result = Array.from(new Set(arr))
  console.log(result); 
}
sortSomeArr(arr)