import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
export function js_node_shape_signature(node) {
  arguments_assert(arguments, 1);
  ("what a piece of parsed code is SHAPED like, with everything it says stripped out: which operator a two-sided node holds and which number or word a value node holds are both dropped, and only the tree of node kinds is written out.");
  ("Two lines built from the same tiles can hold the same signs and the same values and still be different sentences, because a sign landing in another sign's place can bind differently: 6 >= 8 === 8 >= 6 compares two comparisons, and 6 >= 8 >= 8 === 6 is a chain with a comparison hung off it. Nothing about the tiles says which of those a line is - only the tree does - so the tree is what gets asked.");
  ("Brackets are not looked for and do not need to be. A bracket exists to make the tree come out one way rather than another, so by the time there is a tree the bracket has already been spent; two lines whose trees agree were bracketed to the same effect whether or not they were bracketed the same.");
  let type = property_get(node, "type");
  let two_sided = list_includes(
    ["BinaryExpression", "LogicalExpression"],
    type,
  );
  if (two_sided) {
    let left_node = property_get(node, "left");
    let right_node = property_get(node, "right");
    let left = js_node_shape_signature(left_node);
    let right = js_node_shape_signature(right_node);
    let written = text_combine_multiple([type, "(", left, ",", right, ")"]);
    return written;
  }
  let one_sided = equal(type, "UnaryExpression");
  if (one_sided) {
    let argument_node = property_get(node, "argument");
    let argument = js_node_shape_signature(argument_node);
    let written = text_combine_multiple([type, "(", argument, ")"]);
    return written;
  }
  return type;
}
