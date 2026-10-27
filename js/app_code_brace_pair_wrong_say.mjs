import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { equal } from "./equal.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { text_get } from "./text_get.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function app_code_brace_pair_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("for a quiz asking which brace pairs with the one pointed at: walks from the pointed-at brace the way ",
    fn_name("js_code_brace_partner_index"),
    " does, counting each brace of its own kind as 1 more and each of the other kind as 1 less, and names the block the pair belongs to; null when nothing is pointed at");
  let unmarked = app_code_brace_unmarked(question);
  let code = unmarked.code;
  let index = unmarked.index;
  if (equal(index, -1)) {
    return null;
  }
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let own = text_get(code, index);
  let partner = js_code_brace_partner_index(code, index);
  let step = equal(own, left) ? 1 : -1;
  let other = equal(own, left) ? right : left;
  let counts = [];
  let count = 0;
  for (let i = index; not_equal(i, partner + step); i += step) {
    let c = text_get(code, i);
    if (equal(c, own)) {
      count += 1;
      let item = String(count);
      list_add(counts, item);
    } else if (equal(c, other)) {
      count -= 1;
      let item2 = String(count);
      list_add(counts, item2);
    }
  }
  let opener = equal(own, left) ? index : partner;
  let line_start = code.lastIndexOf("\n", opener) + 1;
  let head = code.slice(line_start, opener).trim();
  if (head.startsWith(right)) {
    head = head.slice(1).trim();
  }
  let way = equal(own, left) ? "down" : "up";
  let joined = list_join_comma_space(counts);
  let parts = [
    "Remember: walk " + way + " from the pointed-at ",
    own,
    ", counting each ",
    own,
    " as 1 more and each ",
    other,
    " as 1 less; the count goes ",
    joined,
    ", and the ",
    other,
    " that brings it back to 0 is its pair, so together they hold the block of ",
    head + " " + left,
    "",
  ];
  return parts;
}
