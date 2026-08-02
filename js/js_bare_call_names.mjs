import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_set } from "./property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { not } from "./not.mjs";
export function js_bare_call_names(ast) {
  "Every name this file sets from a call that was handed nothing, as a dictionary from the name to the function called.";
  "This shape is written by the pass that canonicalizes files rather than by a person: a call standing inside another call is lifted out onto a line of its own and given a name, and what stood there becomes that name. So a reading that asks what stands at some place in a call sees a name where the source read as a call, and answers nothing, on nearly every file in the repo.";
  "Being handed nothing is what makes the name safe to follow. A call given arguments could hand back something different each time it is reached, and the name would only stand for one of those; a call given nothing hands back the same thing wherever it is reached, so reading the name as that call loses nothing.";
  arguments_assert(arguments, 1);
  let names = {};
  function lambda(v) {
    let node = property_get(v, "node");
    let init = property_or_null(node, "init");
    if (null_is(init)) {
      return;
    }
    let called = js_node_type_is(init, "CallExpression");
    if (not(called)) {
      return;
    }
    let callee = property_get(init, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let bare = property_list_empty_is(init, "arguments");
    if (not(bare)) {
      return;
    }
    let id = property_get(node, "id");
    let named = js_node_type_is(id, "Identifier");
    if (not(named)) {
      return;
    }
    let name = property_get(id, "name");
    let f_name = property_get(callee, "name");
    property_set(names, name, f_name);
  }
  js_visit_type(ast, "VariableDeclarator", lambda);
  return names;
}
