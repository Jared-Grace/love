import { arguments_assert } from "./arguments_assert.mjs";
import { integer_is_assert } from "./integer_is_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
export function js_code_brace_partner_index(code, index) {
  arguments_assert(arguments, 2);
  integer_is_assert(index);
  ("where the brace pairing with the brace at index stands: the } that closes a {, or the { that opens a }");
  ("Counted, not searched for: walking away from the brace, one of its own kind adds 1 and one of the other kind takes 1 away, and the brace that brings the count back to 0 is its partner. That is the rule a learner is taught, so the answer a quiz marks right is reached the way the learner is asked to reach it.");
  ("A { walks down the code and a } walks up it, because a { is always opened before the } that closes it.");
  ("Every brace counts, including one inside a string; the programs this is asked about hold none there.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let own = code[index];
  let other = right;
  let step = 1;
  if (equal(own, right)) {
    other = left;
    step = -1;
  } else {
    let b = equal(own, left);
    assert(b);
  }
  let count = 0;
  for (
    let i = index;
    less_than_equal(0, i) && less_than(i, code.length);
    i += step
  ) {
    let c = code[i];
    if (equal(c, own)) {
      count += 1;
    } else if (equal(c, other)) {
      count -= 1;
    }
    if (equal(count, 0)) {
      return i;
    }
  }
  error();
}
