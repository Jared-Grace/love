import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_shape_signature } from "./js_code_shape_signature.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export function js_code_shape_alike_is(code, candidate) {
  "$plain code";
  "$plain candidate";
  arguments_assert(arguments, 2);
  ("whether two lines are built to the same shape - the same tree of nodes - however differently their signs and values are filled in.");
  ("It is the question to ask of a rearrangement that has been allowed to move a sign. A sign in another sign's place can change what binds to what, and then the line is a different sentence saying a different thing, which is how 2 < 6 && 5 < 9 becomes 2 && 6 < 5 < 9 - true, and no longer two comparisons joined. Held to one shape, a moved sign can only change which comparison is which, and every one of those is the same sentence about different numbers.");
  ("A line that will not parse is not alike to anything, itself included.");
  let one = js_code_shape_signature(code);
  let one_unparsed = null_is(one);
  if (one_unparsed) {
    return false;
  }
  let other = js_code_shape_signature(candidate);
  let other_unparsed = null_is(other);
  if (other_unparsed) {
    return false;
  }
  let alike = equal(one, other);
  return alike;
}
