import { app_code_line_kinds } from "./app_code_line_kinds.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_lesson_fn_id_set } from "./app_code_lesson_fn_id_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_lines_solved } from "./app_code_lesson_lines_solved.mjs";
import { app_code_line_shape } from "./app_code_line_shape.mjs";
import { null_is } from "./null_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_lessons_shapes(rounds) {
  arguments_assert(arguments, 1);
  ("Every lesson in the order it is learned, beside the hardest line it can hand out: how many operators stand on that line, how deep they sit, the line itself, and every kind of thing the lesson writes.");
  ("The kinds are what tells one part of the course from the next. A lesson carrying a kind no lesson before it carried is starting something, and the lessons after it are learning that rather than carrying on with what came before.");
  ("The hardest rather than the usual, because a lesson is as hard as the worst thing it can ask. A learner who meets the one three-operator line a two-operator lesson can reach has met a three-operator line, and an average would have hidden it.");
  ("A lesson that hands out no code at all is kept in the list and marked, rather than left out of it, so that a reading of the order still has every lesson in its own place and can say which places it passed over.");
  ("Every lesson here, rather than the run the built site shows, because the order is a fact about the course as written and a reading of it should not change with what has been released.");
  ("The lesson is asked for through the helper that puts its id on rather than by calling the function, which is what keeps the names in this reading the same names the app stores progress under. Calling the function got the id the lesson built for itself, and that one is on its way out.");
  let fns = app_code_lessons_fns();
  let shapes = [];
  let place = 0;
  for (let fn of fns) {
    place = add_1(place);
    let lesson = app_code_lesson_fn_id_set(fn);
    let id = property_get(lesson, "id");
    let lines = app_code_lesson_lines_solved(lesson, rounds);
    let operators = 0;
    let depth = 0;
    let hardest = null;
    let code = false;
    ("what is on this lesson that a learner may never have seen, gathered from every line it asks to be worked out");
    let kinds_all = [];
    for (let line of lines) {
      let shape = app_code_line_shape(line);
      let unread = null_is(shape);
      if (unread) {
        continue;
      }
      code = true;
      let line_kinds = app_code_line_kinds(line);
      list_add_multiple(kinds_all, line_kinds);
      let line_operators = property_get(shape, "operators");
      let harder = greater_than(line_operators, operators);
      if (harder) {
        operators = line_operators;
        hardest = line;
      }
      let line_depth = property_get(shape, "depth");
      let deeper = greater_than(line_depth, depth);
      if (deeper) {
        depth = line_depth;
      }
    }
    let kinds = list_unique_sorted(kinds_all);
    list_add(shapes, {
      place,
      id,
      code,
      operators,
      depth,
      hardest,
      kinds,
    });
  }
  return shapes;
}
