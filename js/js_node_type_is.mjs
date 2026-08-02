import { equal } from "./equal.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { not } from "./not.mjs";
export function js_node_type_is(node, type) {
  "whether this is a piece of parsed code of the named kind - false for anything that is not a piece of parsed code at all, nothing included";
  "the two questions are asked one after the other on purpose, and this must not be written back as one line joined by and. asking the kind of nothing throws, so the first answer is not a tidier way of writing the second - it is what makes the second askable at all. written as a joined line, the auto pass lifts the kind lookup out in front of its own guard, which then ran on nothing and stopped every canonicalize in the repo until it was put back.";
  let node_is = js_node_is(node);
  if (not(node_is)) {
    return false;
  }
  let left = js_node_type(node);
  let type_is = equal(left, type);
  return type_is;
}
