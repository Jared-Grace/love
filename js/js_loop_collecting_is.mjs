import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function js_loop_collecting_is(loop) {
  "$plain loop";
  "Whether this loop is gathering something up as it goes, told by whether it adds to a list. Read-only, pure.";
  "It is what tells a walk meaning to reach the end apart from one meaning to stop at the first thing it finds. A loop adding to a list has already said in its own code that every item is going to be looked at, so a refusal escaping out of that loop breaks a promise the loop made; a loop searching for one item and leaving is not promising anything of the kind.";
  arguments_assert(arguments, 1);
  let adder = fn_name("list_add");
  let adds = js_list_calls_named(loop, adder);
  let collecting = list_empty_not_is(adds);
  return collecting;
}
