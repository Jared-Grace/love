export function js_statement_swap_asked_named_or_null(node_before, node_after) {
  "$plain node_before";
  "$plain node_after";
  "The name for one if swapped for another if, said as the condition having been written differently - or nothing, where anything inside the branches moved as well.";
  "AN IF IS ONLY THE CONDITION ONCE EVERY BRANCH HAS COME BACK IDENTICAL. Both branches moving is two edits and an else appearing is a change of shape, and neither of those touched the condition at all - so the branches are compared before the condition is named, and the two other shapes are handed back unnamed. The reading beside this one gives that same case up on purpose, saying every run matching is the head having moved and belongs to the caller; this is the caller it meant.";
  arguments_assert(arguments, 2);
  let differing = js_statement_runs_differing_or_null(node_before, node_after);
  let apart = null_is(differing);
  if (apart) {
    return null;
  }
  let inside = list_empty_not_is(differing);
  if (inside) {
    return null;
  }
  let r5 = "a condition written differently";
  return r5;
}
