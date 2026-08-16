import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_params_names_node } from "./js_function_declaration_params_names_node.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_target_names_rebound(target) {
  arguments_assert(arguments, 1);
  ("The names a place being written to points somewhere else - which is none at all when the writing goes through a dot or a bracket, because that changes the thing the name points at and leaves the name pointing at it still.");
  ("The difference matters wherever a name is handed from one place to another as a value. Two holders of one name see the same thing changed through a dot forever, and stop agreeing the moment either of them points their own copy somewhere else. So a bracket write is safe to carry across a cut and a plain write is not, and reading them the same way refuses good work for no reason - measured, it refused a whole screen of drawing because one line inside it filled a slot of a list made further up.");
  ("An unpacking on the left is read by the same reading a parameter list is read with, so a name given a value that way is counted like any other. That reading refuses a shape it does not know, loudly, which is what should happen to a dot buried inside an unpacking: the answer would be a guess, and a guess here is the silent kind of wrong.");
  let through_is = js_node_type_is(target, "MemberExpression");
  if (through_is) {
    let none = [];
    return none;
  }
  let names = js_function_declaration_params_names_node(target);
  return names;
}
