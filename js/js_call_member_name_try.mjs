import { js_call_member_callee_try } from "./js_call_member_callee_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
export function js_call_member_name_try(node) {
  "The name after the dot for a call written as a method of something, or nothing at all when the call is not written that way.";
  "Nothing rather than a refusal, because this is asked of every call in a file and most calls are a plain name with no dot in them.";
  "What stands before the dot is not looked at. A method may be reached through a name, through another method's result, through an element of a list - and a caller asking this is asking what was called, not what it was called on.";
  "A method reached through a written-out key rather than a name is left unrecognised, because the key can be built while the file runs and a reader of the text alone cannot say what it will come out as.";
  let none = null;
  let callee = js_call_member_callee_try(node);
  if (null_is(callee)) {
    return none;
  }
  let property = property_get(callee, "property");
  let property_plain_not = js_identifier_not_is(property);
  if (property_plain_not) {
    return none;
  }
  let name = property_get_name(property);
  return name;
}
