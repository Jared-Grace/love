import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { or } from "./or.mjs";
export function js_loop_walking_is(node) {
  arguments_assert(arguments, 1);
  ("is this a loop that walks a list or an object - the two whose header names one thing at a time rather than counting");
  ("a name declared in such a header is given its value by the walk, so it is the one declaration in the language that must be left without one. The pass that fills in a missing value knew about the list kind and not the object kind, and wrote a value into the header of every for-in in the repo - which is not a wrong value but an unparseable line, so the file it had just rewritten would no longer load. Asking both kinds in one place is what stops the next such pass learning only half of it.");
  let over_list_is = js_node_type_is(node, "ForOfStatement");
  let over_object_is = js_node_type_is(node, "ForInStatement");
  let walking = or(over_list_is, over_object_is);
  return walking;
}
