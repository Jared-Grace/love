import { object_copy_assign } from "./object_copy_assign.mjs";
import { app_code_lesson_quiz_lines_order } from "./app_code_lesson_quiz_lines_order.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lesson_quiz_line_missing } from "./app_code_lesson_quiz_line_missing.mjs";
export function app_code_lesson_quizzes_lines_add(infos, backwards) {
  "Both run in the backwards direction, because the program is what gets built: the learner is shown what it logs and puts the program together that logs it";
  let lines_order = object_copy_assign(backwards, {
    on_answer: app_code_lesson_quiz_lines_order,
    answer_label: "Please put the lines in order: ",
  });
  list_add(infos, lines_order);
  let line_missing = object_copy_assign(backwards, {
    on_answer: app_code_lesson_quiz_line_missing,
    answer_label: "Please build the missing line: ",
  });
  list_add(infos, line_missing);
}
