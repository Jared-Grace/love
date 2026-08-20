import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_quiz_lesson_lenient_names } from "./app_code_quiz_lesson_lenient_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_all } from "./list_all.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function app_code_quiz_lenient_names() {
  arguments_assert(arguments, 0);
  (
    "every lesson and way round in the whole course that can be passed by reading the right answer off the code, named as the lesson and the way joined by a space"
  );
  (
    "Read three times over rather than once, and a name is kept only where all three agree. A lesson draws new numbers and new words every time it is asked, so one reading answers about the draw it happened to get; a screen that is passable by how it is built is passable in every draw, and a screen that came out passable by chance is not."
  );
  let fns = app_code_lessons_fns();
  let names = [];
  for (let fn of fns) {
    let lesson = fn();
    let first = app_code_quiz_lesson_lenient_names(lesson);
    let again = app_code_quiz_lesson_lenient_names(lesson);
    let third = app_code_quiz_lesson_lenient_names(lesson);
    for (let name of first) {
      function held(other) {
        "true when this later reading found the same way round passable too";
        let has = list_includes(other, name);
        return has;
      }
      let readings = [again, third];
      let every = list_all(readings, held);
      if (every) {
        list_add(names, name);
      }
    }
  }
  let sorted = list_sort_text(names);
  return sorted;
}
