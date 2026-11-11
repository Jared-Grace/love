import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_indexes } from "./list_indexes.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_places_get } from "./list_places_get.mjs";
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
import { list_add } from "./list_add.mjs";
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
  let left = list_size(variation);
  let last = subtract(left, 1);
  function quoted_is(at) {
    if (equal(at, 0)) {
      return false;
    }
    if (equal(at, last)) {
      return false;
    }
    let index2 = subtract(at, 1);
    let before = list_get(variation, index2);
    let after = list_get(variation, at + 1);
    let r = equal(before, '"') && equal(after, '"');
    return r;
  }
  let quoted = list_filter(places, quoted_is);
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
    let r2 = catch_null(run);
    return r2;
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
