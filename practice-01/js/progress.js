"use strict";

const totalTasks = 12;
const completedTasks = 5;

if (Number.isFinite(totalTasks) === false) {
  console.log("Ошибка: кол-во задач должно быть числом");
} else if (Number.isFinite(completedTasks) === false) {
  console.log("Ошибка: кол-во выполненных задач должно быть числом");
} else if (Number.isSafeInteger(totalTasks) === false) {
  console.log("Ошибка: кол-во задач должно быть целым числом");
} else if (Number.isSafeInteger(completedTasks) === false) {
  console.log("Ошибка: кол-во выполненных задач должно быть целым числом");
} else if (totalTasks < 0) {
  console.log("Ошибка: кол-во задач не может быть отрицательным");
} else if (completedTasks < 0) {
  console.log("Ошибка: кол-во выполненных задач не может быть отрицательным");
} else if (totalTasks > 1000) {
  console.log("Ошибка: кол-во задач не может быть больше 1000");
} else if (completedTasks > totalTasks) {
  console.log(
    "Ошибка: кол-во выполненных задач не может быть больше общего кол-ва задач",
  );
} else if (totalTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const progress = (completedTasks / totalTasks) * 100;
  let status;

  if (completedTasks === 0) {
    status = "Не начато";
  } else if (completedTasks === totalTasks) {
    status = "Завершено";
  } else {
    status = "В работе";
  }

  console.log("Всего задач: ", totalTasks);
  console.log("Выполнено: ", completedTasks);
  console.log("Осталось: ", remainingTasks);
  console.log("Прогресс: ", progress.toFixed(1) + "%");
  console.log("Статус: ", status);
}
