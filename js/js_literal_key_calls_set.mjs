import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { property_get } from "./property_get.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_string_site_key_is } from "./js_string_site_key_is.mjs";
import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_literal_key_calls_set(ast, literal, f_name) {
  arguments_assert(arguments, 3);
  ("Points every place a file names a field with a written word at the function");
  ("that returns that word instead.");
  ("Only the places naming a field are touched. The same word elsewhere in the same");
  ("file is a different thing that happens to be spelled alike, and routing it here");
  ("would invent a dependency nobody wrote - which is the whole failure this repo");
  ("keeps meeting when a report offers to merge two spellings.");
  ("A word standing as the key of a written-out record is left alone even though it");
  ("does name a field. A call cannot stand in that place unless the brackets are put");
  ("around it, and adding brackets is a second change of a different kind.");
  ("How many places were pointed is answered, because so many of the words this is");
  ("asked about stand somewhere it may not touch: a caller handed a file where the");
  ("word is only ever written some other way gets no change at all, and without a");
  ("count that reads exactly like a file it repaired.");
  let changed = 0;
  let call_code = js_code_call_args(f_name, []);
  function each_item(v) {
    let node = property_get(v, "node");
    let held = js_literal_value_get(node);
    let same = equal(held, literal);
    if (not(same)) {
      return;
    }
    let stack = property_get(v, "stack");
    let key_is = js_string_site_key_is(stack);
    if (not(key_is)) {
      return;
    }
    let above = js_stack_node_above(stack);
    let above_type = js_node_type(above);
    let entry_is = equal(above_type, "Property");
    if (entry_is) {
      return;
    }
    let expression = js_parse_expression(call_code);
    object_replace(node, expression);
    changed = add(changed, 1);
  }
  js_visit_types(ast, ["Literal"], each_item);
  return changed;
}
