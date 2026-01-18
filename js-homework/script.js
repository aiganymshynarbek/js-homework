// Задание 1: Имя и возраст
let firstName = "Aiganym";
let lastName = "Shynarbek";
let age = 22;

console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} года`);


// Задание 2: Город
let city = "Астана";
console.log("Я родом из города " + city);


// Задание 3: Пароль и доступ
let password = "myPassword123";
let hasAccess = password !== "";

console.log("Пароль:", password);
console.log("Есть доступ:", hasAccess);


// Задание 4: Преобразование boolean в строку
let isMember = false;
let isMemberString = isMember.toString();

console.log(isMemberString);
console.log(typeof isMemberString);


// Задание 5: Проверка пустой корзины
let cartItems = 0;
let isCartNotEmpty = Boolean(cartItems);

console.log(isCartNotEmpty);
console.log(
  "Корзина считается пустой, потому что 0 при приведении к boolean даёт false"
);


// Задание 6: Округление числа
let averageScore = 89.75695;
averageScore = averageScore.toFixed(1);

console.log(averageScore);


// Задание 7: Работа со строкой
let greetingMessage = "      Приветствуем вас в мире программирования!        ";

let trimmedMessage = greetingMessage.trim();
console.log(trimmedMessage);

let upperCaseMessage = trimmedMessage.toUpperCase();
console.log(upperCaseMessage);

let containsWord = trimmedMessage.includes("программирования");
console.log(containsWord);


// Задание 8: Проверка возраста пользователя
let userAgeInput = prompt("Введите ваш возраст");

if (userAgeInput === "") {
  alert("Пожалуйста, введите возраст");
} else if (isNaN(userAgeInput)) {
  alert("Возраст должен быть числом");
} else if (Number(userAgeInput) < 18) {
  alert("Доступ ограничен");
} else {
  alert("Добро пожаловать!");
}


// Задание 9: Угадай число
let secretNumber = 7;
let userNumber = prompt("Введите число от 1 до 10");

if (Number(userNumber) === secretNumber) {
  alert("Поздравляем! Вы угадали число!");
} else if (Number(userNumber) > secretNumber) {
  alert("Ваше число слишком велико");
} else if (Number(userNumber) < secretNumber) {
  alert("Ваше число слишком мало");
} else {
  alert("Некорректный ввод");
}


// Задание 10: Выбор напитка
let timeOfDay = prompt("Введите время суток (утро, день, вечер)");

if (typeof timeOfDay !== "string" || timeOfDay.trim() === "") {
  alert("Ошибка: введите корректное значение времени суток");
} else {
  timeOfDay = timeOfDay.toLowerCase().trim();

  if (timeOfDay === "утро") {
    alert("Рекомендуем кофе");
  } else if (timeOfDay === "день") {
    alert("Рекомендуем чай");
  } else if (timeOfDay === "вечер") {
    alert("Рекомендуем горячий шоколад");
  } else {
    alert("Ошибка: неизвестное время суток");
  }
}
