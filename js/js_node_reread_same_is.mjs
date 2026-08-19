import { js_node_types } from "./js_node_types.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function js_node_reread_same_is(node) {
  "Whether this piece of a line is certain to give the same thing when it is read again later - x and 1 and [1, x] are, and g(1) and a.b and i++ are not.";
  "Asked whenever a reading is about to be moved to a different place in the running order. Moving one is safe only when nothing that now happens in between could change what it gives, and the only way to be sure of that without knowing what every function in the file does is to let through nothing that could be changed by any of them.";
  "The reading is hopeful in one direction and careful in the other: a name is let through even though something holding it from an enclosing scope could in principle be written to from elsewhere, while a field read is not, because a field is read out of an object any function handed the object can write to. That is the line between what this repo actually does - objects are plain data passed about - and what it does not.";
  let unsettled = [
    "CallExpression",
    "NewExpression",
    "AwaitExpression",
    "YieldExpression",
    "AssignmentExpression",
    "UpdateExpression",
    "MemberExpression",
    "TaggedTemplateExpression",
  ];
  let types = js_node_types(node);
  let found = list_intersection(types, unsettled);
  let same_is = list_empty_is(found);
  return same_is;
}
