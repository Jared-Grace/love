import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_is } from "./text_is.mjs";
import { js_call_is } from "./js_call_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export function js_prose_part_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this piece of a paragraph is only a name being spelled out, rather than something that does anything.");
  ("A paragraph in this repo wants a function's name inside it, spelled as a reference so that renaming the function carries the sentence along. That leaves a sentence made of pieces - some of them text, one of them a name - and a reading deciding whether the whole thing is a comment has to ask this of every piece.");
  ("The one call allowed is the one that spells a name. Every other kind of call could do something, and calling a line that does something a comment would hide real work from the readings that exist to find it - which is a worse fault than the miscounting the question is being asked to fix.");
  let text_part_is = js_literal_is(node);
  if (text_part_is) {
    let value = js_literal_value_get(node);
    let string_is = text_is(value);
    return string_is;
  }
  let named_is = js_node_type_is(node, "Identifier");
  if (named_is) {
    return true;
  }
  let reached_is = js_node_type_is(node, "MemberExpression");
  if (reached_is) {
    return true;
  }
  let call_is = js_call_is(node);
  if (call_is) {
    let callee = property_get(node, "callee");
    let called = js_identifier_name_try(callee);
    let naming = fn_name("fn_name");
    let naming_is = equal(called, naming);
    return naming_is;
  }
  return false;
}
