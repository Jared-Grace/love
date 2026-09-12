import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { equal } from "./equal.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_expression_parsed_meaning(node) {
  arguments_assert(arguments, 1);
  ("what a line of javascript MEANS, once it has been read by a real javascript reader, written in the very same words a shape writes its own meaning in: a pair of brackets round every operator and no spaces anywhere, so Math.floor(14 / 4) * 4 comes out (Math.floor((14/4))*4)");
  ("The second of the two writers. One says what a shape means; this one says what the line that shape printed means, and the line is read here by javascript itself rather than by anything of ours - so a line javascript would take a different way cannot be written out the way we intended it. That is the whole of the check: the two writings are held against each other as plain text.");
  ("The lenient key that already existed reads nearly the same walk and answers a different question. It is built to call two rearrangements of one line the same - a run of numbers added in any order writes out as one key - which is exactly what must NOT be forgiven here, because a printed line that put the sides the other way round is a printed line that lies about its shape. So this walk forgives spacing and nothing else.");
  ("A kind of node no shape of this app can build is written out as a sentence with spaces in it. No shape's meaning ever holds a space, so such a line can never be mistaken for agreement, and the sentence names the kind so a reader sees at once what was found.");
  let type = js_node_type(node);
  let literal_is = equal(type, "Literal");
  if (literal_is) {
    ("a number, a true or a false stands for itself, spelled as it was written");
    let written = js_unparse(node);
    return written;
  }
  let unary_is = equal(type, "UnaryExpression");
  if (unary_is) {
    let symbol = property_get(node, "operator");
    let acted_on = property_get(node, "argument");
    let minus_is = equal(symbol, "-");
    let acted_on_literal_is = js_node_type_is(acted_on, "Literal");
    if (minus_is && acted_on_literal_is) {
      ("a minus standing in front of a plain number is part of how that number is spelled and not an operator anybody presses, so it is kept with the number");
      let negative = js_unparse(node);
      return negative;
    }
    let inside = app_code_expression_parsed_meaning(acted_on);
    let one_sided = text_combine_multiple([symbol, "(", inside, ")"]);
    return one_sided;
  }
  let two_sided_types = ["BinaryExpression", "LogicalExpression"];
  let two_sided_is = list_includes(two_sided_types, type);
  if (two_sided_is) {
    let symbol_between = property_get(node, "operator");
    let left = property_get(node, "left");
    let right = property_get(node, "right");
    let left_meaning = app_code_expression_parsed_meaning(left);
    let right_meaning = app_code_expression_parsed_meaning(right);
    let both_sides = text_combine_multiple([
      "(",
      left_meaning,
      symbol_between,
      right_meaning,
      ")",
    ]);
    return both_sides;
  }
  let call_is = equal(type, "CallExpression");
  if (call_is) {
    let handed = property_get(node, "arguments");
    let one_is = list_size_equal(handed, 1);
    if (one_is) {
      let callee = property_get(node, "callee");
      let name = js_unparse(callee);
      let only = list_get(handed, 0);
      let inside_call = app_code_expression_parsed_meaning(only);
      let called = text_combine_multiple([name, "(", inside_call, ")"]);
      return called;
    }
  }
  let strange = text_combine_multiple([
    "a kind of line no shape of this app builds: ",
    type,
  ]);
  return strange;
}
