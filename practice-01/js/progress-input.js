"use strict";

const totalTasksText = "18";
const completedTasksText = "6";

if (typeof totalTasksText !== "string") {
  console.log("Ошибка: общее кол-во задач должно быть строкой");
} else if (typeof completedTasksText !== "string") {
  console.log("Ошибка: кол-во выполненных задач должно быть строкой");
} else {
  const totalTasksTrimmed = totalTasksText.trim();
  const completedTasksTrimmed = completedTasksText.trim();

  if (totalTasksTrimmed === "") {
    console.log("Ошибка: общее кол-во задач не может быть пустым");
  } else if (completedTasksTrimmed === "") {
    console.log("Ошибка: кол-во выполненных задач не может быть пустым");
  } else {
    const totalTasks = Number(totalTasksTrimmed);
    const completedTasks = Number(completedTasksTrimmed);

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
      console.log(
        "Ошибка: кол-во выполненных задач не может быть отрицательным",
      );
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

      console.log("Всего задач:", totalTasks);
      console.log("Выполнено:", completedTasks);
      console.log("Осталось:", remainingTasks);
      console.log("Прогресс:", progress.toFixed(1) + "%");
      console.log("Статус:", status);
    }
  }
}
