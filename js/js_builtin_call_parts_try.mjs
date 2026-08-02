import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_call_callee_try } from "./js_call_callee_try.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { js_identifier_named } from "./js_identifier_named.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { not } from "./not.mjs";
export function js_builtin_call_parts_try(node) {
  "The name of the built-in Math method this call reaches, or nothing at all when the call is not one of those.";
  "Nothing rather than a refusal, because this is asked of every call in a file and almost none of them are Math calls. A refusal would make the ordinary case the loud one.";
  "A method reached through a written-out key rather than a name is left unrecognised. Math with a name in brackets is worked out while the program runs, so which method it reaches is not something a reading of the file can know, and guessing would rewrite a call nobody can prove.";
  let none = null;
  let callee = js_call_callee_try(node);
  let member_not = js_node_type_not_is(callee, "MemberExpression");
  if (member_not) {
    return none;
  }
  let worked_out = property_get(callee, "computed");
  if (worked_out) {
    return none;
  }
  let object = property_get(callee, "object");
  let object_plain_not = js_identifier_not_is(object);
  if (object_plain_not) {
    return none;
  }
  let identifier_name = text_frozen("Math");
  let math_is = js_identifier_named(object, identifier_name);
  if (not(math_is)) {
    return none;
  }
  let property = property_get(callee, "property");
  let property_plain_not = js_identifier_not_is(property);
  if (property_plain_not) {
    return none;
  }
  let member = property_get_name(property);
  return member;
}
