import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_own_is } from "./js_node_type_own_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_return_own_is(declaration) {
  arguments_assert(arguments, 1);
  ("Whether this function hands an answer back of its own - not whether a function written inside it does.");
  ("A function whose whole body is a loop handing a callback along is full of the word and hands nothing back itself: every one of those belongs to the callback, which is its own function and answers for its own. Counting them reads a function that returns nothing as one that returns, and a caller waiting to be handed something then waits for ever.");
  ("The twin of the reading that asks the same question about waiting. The two were written out separately and were a whole body alike, so the looking is one function now and this is the kind of thing it looks for - what settles it either way is that no function stands between the word and the body it is written in.");
  let block = property_get(declaration, "body");
  let any = js_node_type_own_is(block, "ReturnStatement");
  return any;
}
