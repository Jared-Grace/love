import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
export function js_escape_statements_is(node) {
  arguments_assert(arguments, 1);
  ("Whether anything inside this piece of code can leave the loop it stands in");
  ("Three statements can: breaking out, returning from the function around it, and");
  ("throwing. Any one of them means the code can stop going round even when nothing");
  ("about the loop's own condition ever changes, so a reader asking whether a loop is");
  ("stuck has to ask this first.");
  ("A leave found inside a loop nested here, or inside a function written here, is");
  ("counted too even though it does not leave this loop. That says stuck too seldom");
  ("rather than too often, which is the safe way round for the one thing this is");
  ("asked for.");
  let found = false;
  function lambda(v) {
    found = true;
  }
  js_visit_types(
    node,
    ["BreakStatement", "ReturnStatement", "ThrowStatement"],
    lambda,
  );
  return found;
}
