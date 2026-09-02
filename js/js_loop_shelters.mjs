import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
export function js_loop_shelters(loop) {
  "$plain loop";
  "The pieces written inside this loop that a refusal cannot climb out of, so that it never reaches the loop itself. Read-only, pure.";
  "Two kinds, and they shelter for different reasons. A try catches by saying so. A function written inside the loop shelters because a refusal inside it belongs to whoever runs it - the loop may hand it to a catcher, or may not, and either way the refusal leaves that function before it is anywhere near the loop. So an await standing inside a nested function says nothing at all about whether this loop stops early, and only an await standing in the loop's own body does.";
  "The loop itself is deliberately not asked whether it is inside a try somewhere further out. A whole walk wrapped in one try does stop at the first refusal - it merely stops quietly instead of loudly - so counting that as shelter would hide the very thing this is looking for.";
  arguments_assert(arguments, 1);
  let kinds = [
    "TryStatement",
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  let shelters = js_list_types_nodes(loop, kinds);
  return shelters;
}
