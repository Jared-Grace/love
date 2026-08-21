import { add_1 } from "./add_1.mjs";
import { app_code_lessons_shapes } from "./app_code_lessons_shapes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";

export function app_code_lessons_order_ahead(rounds) {
  arguments_assert(arguments, 1);
  "Every lesson standing ahead of its own difficulty - one whose hardest line carries more operators than the hardest line of a lesson taught after it - counted by how many later lessons are simpler than it, worst first.";
  "A learner meets the course in one order, so a lesson that asks for three operators held at once, followed by dozens that ask for two, has moved the hard part of the curve to the wrong place. The count is how far out of place it is: one later lesson being simpler is a new operator being introduced gently, and sixty is a lesson that belongs much further on.";
  "Nothing here says the order is wrong. A lesson may sit above what follows it on purpose - a new idea is often taught on a small line after a big one - so this hands over the list and the reasons stay with whoever reads it. What it can say is where to look, and it puts the furthest out of place at the top.";
  "The lessons that hand out no code are passed over rather than counted as nothing, because the front of the course teaches how symbols and names are spelled, and a lesson with no line on it is not a simple line.";
  let shapes = app_code_lessons_shapes(rounds);
  function code_is(shape) {
    let code = property_get(shape, "code");
    return code;
  }
  let solving = list_filter(shapes, code_is);
  let count = list_size(solving);
  let ahead = [];
  for (let i = 0; less_than(i, count); i++) {
    let shape = list_get(solving, i);
    let operators = property_get(shape, "operators");
    let later_simpler = 0;
    for (let j = add_1(i); less_than(j, count); j++) {
      let later = list_get(solving, j);
      let later_operators = property_get(later, "operators");
      let simpler = less_than(later_operators, operators);
      if (simpler) {
        later_simpler = add_1(later_simpler);
      }
    }
    let out_of_place = greater_than(later_simpler, 0);
    if (out_of_place) {
      list_add(ahead, {
        place: property_get(shape, "place"),
        id: property_get(shape, "id"),
        operators,
        depth: property_get(shape, "depth"),
        hardest: property_get(shape, "hardest"),
        later_simpler,
      });
    }
  }
  function later_simpler_of(entry) {
    let n = property_get(entry, "later_simpler");
    return n;
  }
  list_sort_number_mapper_reverse(ahead, later_simpler_of);
  let r = {
    lessons: list_size(shapes),
    solving: count,
    ahead,
  };
  return r;
}
