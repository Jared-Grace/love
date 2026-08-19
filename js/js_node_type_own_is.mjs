import { arguments_assert } from "./arguments_assert.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_any } from "./list_any.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_type_own_is(node, type) {
  "$plain type";
  "Whether a thing of this kind is written in this piece of code and belongs to it - not to some function written inside it.";
  "A function written inside a piece of code answers for its own words. A body whose whole work is handing a callback along is full of the callback's words and says none of them itself, so a reading that asks only whether the word appears somewhere below reads that body as doing what the callback does. Both of the questions asked through here had that failure and the same cure: the word counts only when no function stands between it and the piece of code being asked about.";
  "The two callers are a whole body apart from the kind of thing they look for, which is why the looking lives here and the meaning stays with them. What each kind means to a reader - a function that hands nothing back, a line that does not wait - is a different sentence, and the sentence is the whole of what is left in each.";
  arguments_assert(arguments, 2);
  function lambda(la) {
    js_visit_type(node, type, la);
  }
  let found = list_adder(lambda);
  function outside_every_function(v) {
    let stack = property_get(v, "stack");
    let owner = js_stack_last_function(stack);
    let own = null_is(owner);
    return own;
  }
  let any = list_any(found, outside_every_function);
  return any;
}
