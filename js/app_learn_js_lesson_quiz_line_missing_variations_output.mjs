import { list_indexes } from "./list_indexes.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_set } from "./list_set.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { json_to } from "./json_to.mjs";
import { catch_null } from "./catch_null.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_places_set_copy } from "./list_places_set_copy.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_learn_js_quiz_string_tokens_merge } from "./app_learn_js_quiz_string_tokens_merge.mjs";
import { js_tokens_to_code } from "./js_tokens_to_code.mjs";
import { each } from "./each.mjs";
export function app_learn_js_lesson_quiz_line_missing_variations_output(
  lines,
  index,
  variation,
) {
  "Every other order of the missing line's own tiles that leaves the whole program writing out exactly what it wrote before - so a learner asked for a list whose first item is logged may put the items after it in any order.";
  "THE PROGRAM IS JUDGED, NOT THE LINE ON ITS OWN. A line read alone has only one right order of its words, but the question is never the line alone: with console.log(a[0]) below it, joy, love, peace and joy, peace, love write out the same thing, and nothing on the screen tells the two apart.";
  "Only the words inside quotes are handed round, among the places of other words inside quotes. Those are the tiles a learner can put in another order without breaking the line; a dealing that would break it writes nothing out and so is refused by the same test anyway.";
  "Declines past 5040 orders, which costs nothing: every order kept here is over and above the answers the quiz already accepts.";
  let none = [];
  let places = list_indexes(variation);
  ('2026-11-12, from the human\'s report on the lesson logging a.length - 1: a word is inside quotes when an odd number of quote marks stand before it. It used to be any tile with a quote mark either side, and the comma in " , " between two words has one either side too, so the commas were dealt round as words: with five items that made nine, past the limit, and no other order was accepted at all');
  let quoted = [];
  let inside = false;
  for (let at of places) {
    let token = list_get(variation, at);
    if (equal(token, '"')) {
      inside = not(inside);
      continue;
    }
    if (inside) {
      list_add(quoted, at);
    }
  }
  let words = list_places_get(variation, quoted);
  let count = list_size(words);
  if (less_than(count, 2)) {
    return none;
  }
  if (greater_than(count, 7)) {
    return none;
  }
  function output_of(line) {
    let lines_filled = list_copy(lines);
    list_set(lines_filled, index, line);
    let program = list_join_newline(lines_filled);
    function run() {
      let written = eval_console_log_lines(program);
      let json = json_to(written);
      return json;
    }
    let r = catch_null(run);
    return r;
  }
  let line_original = list_get(lines, index);
  let output_original = output_of(line_original);
  if (equal(output_original, null)) {
    return none;
  }
  let orderings = list_permutations(words);
  let kept = [];
  let joined = list_join_space(variation);
  let written_seen = [joined];
  function deal(ordering) {
    let dealt = list_places_set_copy(variation, quoted, ordering);
    let written = list_join_space(dealt);
    if (list_includes(written_seen, written)) {
      return;
    }
    list_add(written_seen, written);
    let merged = app_learn_js_quiz_string_tokens_merge(dealt);
    let line = js_tokens_to_code(merged);
    let output = output_of(line);
    if (equal(output, output_original)) {
      list_add(kept, dealt);
    }
  }
  each(orderings, deal);
  return kept;
}
