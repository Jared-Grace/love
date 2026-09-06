import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression_try } from "./js_parse_expression_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_node_shape_signature } from "./js_node_shape_signature.mjs";
export function js_code_shape_signature(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("what a line of code is shaped like, written out as text - or nothing at all, when the line will not parse.");
  ("Nothing rather than a complaint, because this is asked of rearrangements of a learner's tiles and most rearrangements are not lines. A line that will not parse has no shape to be alike to anything, which is the same answer as having a shape that differs.");
  let parsed = js_parse_expression_try(code);
  let unparsed = null_is(parsed);
  if (unparsed) {
    return null;
  }
  let signature = js_node_shape_signature(parsed);
  return signature;
}
