import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_length } from "./list_length.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function js_stack_logical_right_is(stack) {
  "Whether this place in the code sits on the right of an and, an or, or a nullish - the side that is only run when the left side says to run it";
  "A piece of an expression lifted out into a name above it is run once either way, everywhere except where the piece was not always going to run. The right of one of these is exactly that place: the left is a guard, and lifting anything out of the right runs it in front of the very guard that was there to decide whether it should run at all";
  "Measured on 2026-08-03, and it had already broken the repo. js_node_type_is asked whether something was a piece of parsed code before asking what kind it was, written as one line joined by and. The kind lookup was lifted above the guard, so it ran on nothing, threw, and every canonicalize in the repo stopped until the guard was put back by hand";
  "Proved by the same measure the lifting itself uses. The lifted name is put in the innermost block above, so a piece of code escapes the guard exactly when the and stands deeper in the stack than that block. A piece of a function written inside the right side has that function's own block in between, so it is never mistaken for a piece of the right side itself";
  "The left side is not counted, because it always runs";
  let escapes = false;
  let length = list_length(stack);
  for (let index = 0; index < length; index++) {
    let one = list_get(stack, index);
    let block_is = js_node_type_is(one, "BlockStatement");
    if (block_is) {
      escapes = false;
      continue;
    }
    let logical_is = js_node_type_is(one, "LogicalExpression");
    if (logical_is) {
      let right = property_get(one, "right");
      let below = list_get(stack, index + 1);
      let right_is = equal(below, right);
      if (right_is) {
        escapes = true;
      }
    }
  }
  return escapes;
}
