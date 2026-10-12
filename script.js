var calories = [450, 380, 520, 480, 250, 720, 280];

function findMax(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function sumArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

function filterArray(array, minValue) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > minValue) {
            result.push(array[i]);
        }
    }
    return result;
}

var userName = prompt("Как вас зовут?");
alert("Привет, " + userName + "! Добро пожаловать в мой кулинарный блог!");

console.log("Пользователь: " + userName);

var totalCalories = sumArray(calories);
var highCalorieDishes = filterArray(calories, 600);
var highCalorieSum = sumArray(highCalorieDishes);

var lowCalorieCount = 0;
var lowCalorieSum = 0;
for (var i = 0; i < calories.length; i++) {
    if (calories[i] <= 300) {
        lowCalorieCount = lowCalorieCount + 1;
        lowCalorieSum = lowCalorieSum + calories[i];
    }
}

var lowCalorieShare = (lowCalorieCount / calories.length) * 100;

alert("Суммарная калорийность — " + totalCalories + " ккал, из них " + highCalorieSum + " ккал — в высококалорийных блюдах");

console.log("Доля низкокалорийных блюд: " + lowCalorieShare.toFixed(1) + "%");
console.log("Количество низкокалорийных блюд: " + lowCalorieCount);
console.log("Максимальная калорийность блюда: " + findMax(calories) + " ккал");

if (totalCalories > 3000) {
    console.log("Такой рацион лучше распределить на 2 дня");
}