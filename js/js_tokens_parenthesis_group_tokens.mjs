import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function js_tokens_parenthesis_group_tokens(tokens) {
  "What each ( in a line of tokens has gathered up, one entry per bracket pair, each entry being the tokens inside that pair in the order they stand.";
  "The scanning is kept apart from what is then asked of it, because two questions are asked of the same gathering and they want different answers out of it - one wants what a bracket gathered, the other only how much.";
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
      list_add(groups, inside);
    }
  }
  return groups;
}
