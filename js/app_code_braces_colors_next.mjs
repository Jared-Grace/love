import { math_min } from "./math_min.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_colors } from "./app_code_braces_colors.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { app_code_braces_colors_bag } from "./app_code_braces_colors_bag.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_remove_first } from "./list_remove_first.mjs";
export function app_code_braces_colors_next(code) {
  arguments_assert(arguments, 1);
  ("the colours for the pairs of braces in code, one for each pair in the order the pairs open, taken from the one bag the whole app draws from: every colour is used once, in a random order, before any is used again, as the human asked 2026-10-11, so one program after another does not keep opening on the same colour");
  ("The bag is shuffled again each time it runs out. A colour this drawing already took is moved to the end of the new round, so two pairs of one program never wear the same colour, and the round still holds every colour once.");
  ("Rejected: a fresh shuffle for every drawing, which is what was here before. It let the first pair of the next program wear the same colour as the last one.");
  let all = app_code_braces_colors();
  let left = js_code_brace_left();
  let count = 0;
  for (let i = 0; less_than(i, code.length); i++) {
    if (equal(code[i], left)) {
      count++;
    }
  }
  count = math_min(count, all.length);
  let bag = app_code_braces_colors_bag();
  let remaining = property_get(bag, "remaining");
  let taken = [];
  while (less_than(taken.length, count)) {
    if (list_empty_is(remaining)) {
      let round = app_code_braces_colors();
      list_shuffle(round);
      let fresh = [];
      let used = [];
      for (let color of round) {
        if (list_includes(taken, color)) {
          list_add(used, color);
        } else {
          list_add(fresh, color);
        }
      }
      list_add_multiple(remaining, fresh);
      list_add_multiple(remaining, used);
    }
    let color = list_remove_first(remaining);
    list_add(taken, color);
  }
  return taken;
}
