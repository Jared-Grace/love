import { js_node_types_is } from "./js_node_types_is.mjs";
export function js_argument_droppable_is(node) {
  "whether an argument can be taken out of a call without taking a behaviour out with it";
  "a name and a written-out value are the only two shapes that do nothing when they are evaluated. everything else - a call, a property read that can throw, a spread that decides how many arguments there are - may be the whole reason the line was written, so dropping it would not be the behaviour-preserving edit it looks like";
  let types = ["Identifier", "Literal"];
  let droppable = js_node_types_is(node, types);
  return droppable;
}
