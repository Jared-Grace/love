import { arguments_assert } from "./arguments_assert.mjs";
import { data_identifiers_search_names } from "./data_identifiers_search_names.mjs";
import { function_ast } from "./function_ast.mjs";
import { property_get } from "./property_get.mjs";
import { js_stack_function_enclosing } from "./js_stack_function_enclosing.mjs";
import { js_call_forwarding_wrapper_name } from "./js_call_forwarding_wrapper_name.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
export async function function_calls_forwarding_wrapper_names(f_name) {
  arguments_assert(arguments, 1);
  ("one entry for every place this function is called: the file the call stands in, and the name of the function written around it when that function hands its own whole parameter list straight on");
  ("a wrapper of nothing means the call is not of that shape - it stands in no function, in one with no name, or it works on what it was given before passing it on. that entry is kept rather than dropped, because the question this serves is asked of every call site at once and a dropped one would read as agreement");
  ("the files to look in are the ones mentioning the name at all. that is a superset of the ones calling it, and the walk over each settles which is which");
  let f_names = await data_identifiers_search_names(f_name);
  let sites = [];
  for (let name of f_names) {
    let ast = await function_ast(name);
    function lambda_site(found) {
      let v = property_get(found, "v");
      let node_call = property_get(v, "node");
      let stack = property_get(v, "stack");
      let enclosing = js_stack_function_enclosing(stack);
      let wrapper = js_call_forwarding_wrapper_name(node_call, enclosing);
      let site = {
        file: name,
        wrapper: wrapper,
      };
      list_add(sites, site);
    }
    js_visit_calls_named(ast, f_name, lambda_site);
  }
  return sites;
}
