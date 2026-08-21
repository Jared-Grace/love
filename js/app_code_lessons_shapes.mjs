import { add_1 } from "./add_1.mjs";
import { app_code_lesson_lines } from "./app_code_lesson_lines.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_line_shape } from "./app_code_line_shape.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";

export function app_code_lessons_shapes(rounds) {
  arguments_assert(arguments, 1);
  "Every lesson in the order it is learned, beside the hardest line it can hand out: how many operators stand on that line, how deep they sit, and the line itself.";
  "The hardest rather than the usual, because a lesson is as hard as the worst thing it can ask. A learner who meets the one three-operator line a two-operator lesson can reach has met a three-operator line, and an average would have hidden it.";
  "A lesson that hands out no code at all is kept in the list and marked, rather than left out of it, so that a reading of the order still has every lesson in its own place and can say which places it passed over.";
  let fns = app_code_lessons_fns();
  let shapes = [];
  let place = 0;
  for (let fn of fns) {
    place = add_1(place);
    let lesson = fn();
    let id = property_get(lesson, "id");
    let lines = app_code_lesson_lines(lesson, rounds);
    let operators = 0;
    let depth = 0;
    let hardest = null;
    let code = false;
    for (let line of lines) {
      let shape = app_code_line_shape(line);
      let unread = null_is(shape);
      if (unread) {
        continue;
      }
      code = true;
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
    list_add(shapes, {
      place,
      id,
      code,
      operators,
      depth,
      hardest,
    });
  }
  return shapes;
}
