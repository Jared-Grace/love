export function js_offset_statement_position_is(ast, offset) {
  "Whether a statement could stand at a place in the source. Most of a file is not such a place: between the entries of a written-out record, between the items of a list, among the arguments of a call, a statement is not something the language allows at all, and putting one there does not make a worse file - it makes a file that no longer parses.";
  "The innermost thing holding the place is what decides it, so that is what this looks for - the deepest node whose span covers the offset. Only the few kinds that hold a run of statements can take another one: the file itself, a block, the body of a class, an arm of a switch.";
  let innermost = null;
  function lambda(node) {
    let start = property_get(node, "start");
    let end = property_get(node, "end");
    let after = greater_than_equal(offset, start);
    let before = less_than(offset, end);
    let inside = after && before;
    if (not(inside)) {
      return;
    }
    let first_is = null_is(innermost);
    if (first_is) {
      innermost = node;
      return;
    }
    let start_held = property_get(innermost, "start");
    let deeper = greater_than_equal(start, start_held);
    if (deeper) {
      innermost = node;
    }
  }
  js_visit_nodes(ast, lambda);
  let none_is = null_is(innermost);
  if (none_is) {
    return false;
  }
  let type = property_get(innermost, "type");
  let holders = ["Program", "BlockStatement", "StaticBlock", "SwitchCase"];
  let holds = list_includes(holders, type);
  return holds;
}
