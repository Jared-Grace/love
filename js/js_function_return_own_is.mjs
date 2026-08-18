import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_any } from "./list_any.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export function js_function_return_own_is(declaration) {
  arguments_assert(arguments, 1);
  ("Whether this function hands an answer back of its own - not whether a function written inside it does.");
  ("A function whose whole body is a loop handing a callback along is full of the word and hands nothing back itself: every one of those belongs to the callback, which is its own function and answers for its own. Counting them reads a function that returns nothing as one that returns, and a caller waiting to be handed something then waits for ever.");
  ("The twin of the reading that asks the same question about waiting, written the same way and for the same reason. What settles it is that no function stands between the word and the body it is written in.");
  let block = property_get(declaration, "body");
  function lambda(la) {
    js_visit_type(block, "ReturnStatement", la);
  }
  let handed_back = list_adder(lambda);
  function outside_every_function(v) {
    let stack = property_get(v, "stack");
    let owner = js_stack_last_function(stack);
    let own = null_is(owner);
    return own;
  }
  let any = list_any(handed_back, outside_every_function);
  return any;
}
