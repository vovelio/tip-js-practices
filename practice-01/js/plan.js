"use strict";

const totalTasks = 18;
const completedTasks = 6;
const dailyLimit = 5;

if (Number.isFinite(totalTasks) === false) {
  console.log("Ошибка: кол-во задач должно быть числом");
} else if (Number.isFinite(completedTasks) === false) {
  console.log("Ошибка: кол-во выполненных задач должно быть числом");
} else if (Number.isFinite(dailyLimit) === false) {
  console.log("Ошибка: дневная норма должна быть числом");
} else if (Number.isSafeInteger(totalTasks) === false) {
  console.log("Ошибка: кол-во задач должно быть целым числом");
} else if (Number.isSafeInteger(completedTasks) === false) {
  console.log("Ошибка: кол-во выполненных задач должно быть целым числом");
} else if (Number.isSafeInteger(dailyLimit) === false) {
  console.log("Ошибка: дневная норма должна быть целым числом");
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
} else if (dailyLimit < 1) {
  console.log("Ошибка: дневная норма должна быть больше 0");
} else if (dailyLimit > 1000) {
  console.log("Ошибка: дневная норма не может быть больше 1000");
} else {
  let remainingTasks = totalTasks - completedTasks;
  let days = 0;
  if (remainingTasks === 0) {
    console.log("Все задачи выполнены!");
    console.log("Потребуется дней: 0");
  } else {
    console.log(`Осталось задач: ${remainingTasks}`);
    while (remainingTasks > 0) {
      days = days + 1;
      let tasksToday = Math.min(remainingTasks, dailyLimit);
      remainingTasks = remainingTasks - tasksToday;
      console.log(
        `День ${days}: выполнено ${tasksToday}, осталось ${remainingTasks}`,
      );
    }
    console.log(`Потребуется дней: ${days}`);
  }
}
