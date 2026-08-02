import { js_call_callee_try } from "./js_call_callee_try.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_call_member_callee_try(node) {
  "What a call reaches through a dot, or nothing at all when the call is not written that way.";
  "Nothing rather than a refusal, because this is asked of every call in a file and most calls are a plain name with no dot in them.";
  "A method reached through a written-out key rather than a name is left unrecognised. A name in brackets is worked out while the program runs, so which method it reaches is not something a reading of the file can know, and guessing would rewrite a call nobody can prove.";
  "Both readings that go on from here - the name after the dot, and the pair of names either side of it - had been getting hold of this the same six lines each, which is what a shared opening always is.";
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
  return callee;
}
