import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_exercise_on_answer_is } from "./app_code_exercise_on_answer_is.mjs";
import { app_code_lesson_quiz_lines_order } from "./app_code_lesson_quiz_lines_order.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lines_indent_braces } from "./app_code_lines_indent_braces.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lessons_exercises_each } from "./app_code_lessons_exercises_each.mjs";
export function app_code_quiz_lines_order_indent_unlike() {
  arguments_assert(arguments, 0);
  ("Names every code lesson whose put-the-lines-in-order quiz asks for a program that, drawn the way the quiz draws the lines tapped, does not look the way the lesson wrote it. Hands back how many programs were looked at beside them, since nothing found is also what this says on the day it stops reaching any.");
  ("THE QUIZ DRAWS ITS OWN INDENT. Each line tapped is drawn by the { } it stands inside in the order tapped, because the indent a line was written with belongs to that one order and was wrong for every other order that logs the same - the human found a line standing at the wrong depth on 2026-10-23. So the order the lesson wrote must come out drawn exactly as the lesson wrote it, or the program on the examples screen and the same program in the quiz are two different-looking things. A lesson written with four spaces, or a { not at the end of its line, is what this finds.");
  let rounds = 20;
  let walked = 0;
  let names = [];
  let found = [];
  function on_exercise(exercise_visit) {
    let exercise = property_get(exercise_visit, "exercise");
    let lines_order = app_code_exercise_on_answer_is(
      exercise,
      app_code_lesson_quiz_lines_order,
    );
    if (not(lines_order)) {
      return;
    }
    walked++;
    let lesson = property_get(exercise_visit, "lesson");
    let already = list_includes(names, lesson);
    if (already) {
      return;
    }
    let answer_property = property_path_get_2(
      exercise,
      "info",
      "answer_property",
    );
    let code = property_get(exercise, answer_property);
    let lines = text_split_newline(code);
    let list = app_code_lines_indent_braces(lines);
    let drawn = list_join_newline(list);
    let b = equal(drawn, code);
    if (not(b)) {
      list_add(names, lesson);
      list_add(found, {
        lesson,
        code,
        drawn,
      });
    }
  }
  app_code_lessons_exercises_each(rounds, on_exercise);
  let r = {
    walked,
    found,
  };
  return r;
}
