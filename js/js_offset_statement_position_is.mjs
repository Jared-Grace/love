import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
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
    ("which of two nodes is the inner one is decided by the shorter span, not by the later beginning. Several nodes routinely begin at the very same character - a line, the expression that is all of it, and the call that is all of that - so a beginning alone cannot separate them, and reading it as though it could hands back the outermost of the three. That is the whole of a call's arguments answering as though it were a place a statement may stand.");
    let start_held = property_get(innermost, "start");
    let end_held = property_get(innermost, "end");
    let later = greater_than(start, start_held);
    let alongside = equal(start, start_held);
    let tighter = less_than(end, end_held);
    let deeper = later || (alongside && tighter);
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
