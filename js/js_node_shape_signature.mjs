import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_code_binary_expression_commutative } from "./js_code_binary_expression_commutative.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
export function js_node_shape_signature(node) {
  arguments_assert(arguments, 1);
  ("what a piece of parsed code is SHAPED like, with everything it says stripped out: which operator a two-sided node holds and which number or word a value node holds are both dropped, and only the tree of node kinds is written out.");
  ("Two lines built from the same tiles can hold the same signs and the same values and still be different sentences, because a sign landing in another sign's place can bind differently: 6 >= 8 === 8 >= 6 compares two comparisons, and 6 >= 8 >= 8 === 6 is a chain with a comparison hung off it. Nothing about the tiles says which of those a line is - only the tree does - so the tree is what gets asked.");
  ("Brackets are not looked for and do not need to be. A bracket exists to make the tree come out one way rather than another, so by the time there is a tree the bracket has already been spent; two lines whose trees agree were bracketed to the same effect whether or not they were bracketed the same.");
  ("A SIGN THAT READS BOTH WAYS HAS ITS TWO SIDES WRITTEN IN A FIXED ORDER, so a line and the same line with that sign's sides exchanged come out to one signature. Without it (true && true) || false and true || (false && true) are two shapes, and the second was refused - although exchanging the sides of an or is the very move the maker of orderings is allowed to make, so the quiz was accepting that exchange by one road and calling it a different sentence by another. Two readers disagreeing about one line is worse than either answer, and it is the reader that has to give way, because the exchange really is the same sentence.");
  ("Which side is written first is decided by the two sides' own signatures rather than by anything about the sign, so the ordering is settled the same way wherever it is asked, and a node whose two sides are shaped alike is untouched by it.");
  ("Only a sign that reads both ways is ordered. A minus and a divide keep the sides the line gave them, because for those the two sides are not exchangeable and a signature that said they were would call 1 - (2 - 3) and (1 - 2) - 3 one shape.");
  ("This buys back nothing the paragraph above gives away. What that paragraph is guarding against is a sign landing where it binds differently, and a different binding is a different tree however its sides are ordered: 2 < 6 && 5 < 9 holds two comparisons under its and, while 2 && 6 < 5 < 9 holds a value and a chain, and no exchange of sides turns one into the other.");
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
    let operator = property_get(node, "operator");
    let commutatives = js_code_binary_expression_commutative();
    let both_ways = list_includes(commutatives, operator);
    let first = left;
    let second = right;
    let exchange = both_ways && less_than(right, left);
    if (exchange) {
      first = right;
      second = left;
    }
    let written = text_combine_multiple([type, "(", first, ",", second, ")"]);
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
