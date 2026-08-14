import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not } from "./not.mjs";
export function js_node_bare_call_name(node, names) {
  "The function this piece of code amounts to a call of, when it is a call handed nothing - written out where it stands, or standing behind a name set from one - and nothing when it is anything else.";
  "The two shapes are one question asked twice, because the pass that canonicalizes files lifts a call out of another call onto a line of its own and leaves a name where it stood. So a reading that looked only for the written-out shape would see nearly every file in the repo as having none.";
  "Being handed nothing is what makes either shape safe to read this way: a call given nothing hands back the same thing wherever it is reached, so the name and the call are interchangeable.";
  let called = js_node_type_is(node, "CallExpression");
  if (called) {
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return null;
    }
    let bare = property_list_empty_is(node, "arguments");
    if (not(bare)) {
      return null;
    }
    let name = property_get(callee, "name");
    return name;
  }
  let named = js_node_type_is(node, "Identifier");
  if (not(named)) {
    return null;
  }
  let word = property_get(node, "name");
  let stood = property_or_null(names, word);
  return stood;
}
