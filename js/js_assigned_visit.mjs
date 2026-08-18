import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
export function js_assigned_visit(node, lambda) {
  arguments_assert(arguments, 2);
  ("Walk every write inside this piece of code - every place a name already standing is given a different value - handing each one to the lambda.");
  ("There are two ways to spell a write and a walk that knows only one of them reads half the writes and says nothing about the other half. Naming the pair once is what keeps two readers of the same question from learning different halves of it.");
  let types = ["AssignmentExpression", "UpdateExpression"];
  js_visit_types(node, types, lambda);
}
