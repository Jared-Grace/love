import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_call_callee_try } from "./js_call_callee_try.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
export function js_builtin_call_parts_try(node) {
  "The name before the dot and the name after it for a call written as one name reaching a method of another, or nothing at all when the call is not written that way.";
  "Nothing rather than a refusal, because this is asked of every call in a file and almost none of them are written this way. A refusal would make the ordinary case the loud one.";
  "Which built-ins are covered is not decided here. This says only what the call is spelled as, and the list of pairings says whether that spelling is one the repo keeps a name for - so a built-in joining the list is a line of data rather than a change to a reading.";
  "A method reached through a written-out key rather than a name is left unrecognised. A name in brackets is worked out while the program runs, so which method it reaches is not something a reading of the file can know, and guessing would rewrite a call nobody can prove.";
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
  let object_node = property_get(callee, "object");
  let object_plain_not = js_identifier_not_is(object_node);
  if (object_plain_not) {
    return none;
  }
  let property = property_get(callee, "property");
  let property_plain_not = js_identifier_not_is(property);
  if (property_plain_not) {
    return none;
  }
  let object = property_get_name(object_node);
  let member = property_get_name(property);
  let parts = {
    object,
    member,
  };
  return parts;
}
