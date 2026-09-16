import { app_code_lessons_stretched } from "./app_code_lessons_stretched.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_get_property } from "./list_get_property.mjs";
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
  ("Every lesson standing ahead of its own difficulty - one whose hardest line carries more operators than the hardest line of a lesson taught after it - counted by how many later lessons are simpler than it, worst first.");
  ("A learner meets the course in one order, so a lesson that asks for three operators held at once, followed by dozens that ask for two, has moved the hard part of the curve to the wrong place. The count is how far out of place it is: one later lesson being simpler is a new operator being introduced gently, and sixty is a lesson that belongs much further on.");
  ("Nothing here says the order is wrong. A lesson may sit above what follows it on purpose - a new idea is often taught on a small line after a big one - so this hands over the list and the reasons stay with whoever reads it. What it can say is where to look, and it puts the furthest out of place at the top.");
  ("MEASURED 2026-09-16: all seventeen entries this then produced were opened and read, and sixteen of them were sound lessons in the right place. What the reading cannot tell apart is a lesson that regresses from one that is a shorthand for what came before it (whole_one_step shows 15 / 4 and asks for 12, the one-step form of the Math.floor(15 / 4) * 4 just built), a generalisation of it (rem_any is % with any divisor after three lessons with fixed ones), a new kind of value (log_string is the first writing put into a log), a question of a different sort altogether (fn_invalid asks whether add 3, 4) is valid code, and works nothing out), or the first lesson of a new topic (comment and comment_skip). Each of those carries fewer operators than the lesson before it and each is the correct next lesson.");
  ("The one true finding among the seventeen was not an ordering fault either: swap_divide draws from + and * against / % and **, so it can hand a learner 3 ** 5 === 5 ** 3 - seven steps - in a stretch where every neighbour is three. The lesson is where it belongs; one of the lines it deals is far heavier than the rest.");
  ("A second blind spot this uncovered: only operators are counted, so a program costs nothing for being long. name_copy is four lines, three names and a copy to follow, and prices zero, which reads as easier than 1 + 2. Counting a line as a step is the correction, and it has not been made.");
  ("So this is a place to look and has never been more than that. It was read by a gate for a time, which turned each entry into an accusation; that was measured wrong sixteen times in seventeen and the gate should not be believed without opening the lesson.");
  ("The lessons that hand out no code are passed over rather than counted as nothing, because the front of the course teaches how symbols and names are spelled, and a lesson with no line on it is not a simple line.");
  let measured = app_code_lessons_shapes(rounds);
  let shapes = app_code_lessons_stretched(measured);
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
    let stretch = property_get(shape, "stretch");
    let later_simpler = 0;
    for (let j = add_1(i); less_than(j, count); j++) {
      ("only a lesson in the same stretch can say this one is out of place. A lesson past the next fresh start is at the beginning of something else, so its short line says nothing about how hard this one was.");
      let later_stretch = list_get_property(solving, j, "stretch");
      let same_stretch = equal(later_stretch, stretch);
      if (not(same_stretch)) {
        continue;
      }
      let later_operators = list_get_property(solving, j, "operators");
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
