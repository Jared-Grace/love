import { js_math_calls_usable } from "./js_math_calls_usable.mjs";
import { js_math_call_member_try } from "./js_math_call_member_try.mjs";
import { js_math_node_to_call } from "./js_math_node_to_call.mjs";
import { list_map_fn_names } from "./list_map_fn_names.mjs";
import { js_imports_missing_add_specified } from "./js_imports_missing_add_specified.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export async function js_math_to_calls(ast) {
  "Point every call to a built-in Math method in this file at the function the repo already keeps for it, and bring that function in.";
  "The same move the operator pass makes, one step further out. An operator written between two numbers and a method written after a dot are both the language saying a thing this repo says with a name, and a reading of the file that stops at the operators leaves 222 of these standing beside functions written to replace them.";
  "Nothing here is a choice, so nothing is an argument. The list of pairings says which methods are covered, the file says which of them it may use, and every call matching one is rewritten - so this is safe to run on a file in any state and safe to run twice, a Math call being the one thing it changes and a rewritten call no longer being one.";
  let usable = js_math_calls_usable(ast);
  function lambda(node) {
    let member = js_math_call_member_try(node);
    if (not(member)) {
      return;
    }
    let matches = list_filter_property(usable, "member", member);
    function lambda_apply(o) {
      js_math_node_to_call(node, o);
    }
    each(matches, lambda_apply);
  }
  js_visit_type_node(ast, "CallExpression", lambda);
  let names = list_map_fn_names(usable);
  await js_imports_missing_add_specified(ast, names);
}
