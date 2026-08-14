import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { list_add } from "./list_add.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_join } from "./list_join.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function js_tokens_parenthesis_groups(tokens) {
  "What each ( in a line of tokens has gathered up, one entry per bracket pair, each entry being the tokens inside it sorted and joined. Sorted again as a whole, so two lines can be asked whether their brackets gather the same things.";
  "It answers what brackets are FOR rather than where they sit. Two lines can hold the same symbols in the same number and still bracket different things - (3 === 5) === false and (3) === 5 === false are built from one set of tiles - and every check that goes by value calls those two the same line, because they are the same line by value. What they are not is the same answer to a lesson about brackets.";
  "An unclosed ( gathers everything after it, which is the honest reading of a line nobody could have written; nothing here has to reject it, because a line that does not parse never reaches a comparison in the first place.";
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let size = list_size(tokens);
  let groups = [];
  for (let start = 0; less_than(start, size); start = add_1(start)) {
    let opener = equal(tokens[start], left);
    if (opener) {
      let depth = 0;
      let inside = [];
      for (let at = start; less_than(at, size); at = add_1(at)) {
        let token = tokens[at];
        let opens = equal(token, left);
        if (opens) {
          depth = add_1(depth);
        }
        let closes = equal(token, right);
        if (closes) {
          depth = subtract_1(depth);
        }
        let done = equal(depth, 0);
        if (done) {
          break;
        }
        let after_opener = greater_than(at, start);
        if (after_opener) {
          list_add(inside, token);
        }
      }
      let list = list_copy(inside);
      let sorted = list_sort_text(list);
      let separator = " ";
      let key = list_join(sorted, separator);
      list_add(groups, key);
    }
  }
  list_sort_text(groups);
  return groups;
}
