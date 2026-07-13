import { fn_name } from "./fn_name.mjs";
import { js_call_named_argument_nodes } from "./js_call_named_argument_nodes.mjs";
import { js_import_source_nodes } from "./js_import_source_nodes.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_strings_add_reference_skip_nodes(ast) {
  let key_fns = [
    fn_name("property_get"),
    fn_name("property_set"),
    fn_name("property_exists"),
    fn_name("property_delete"),
    fn_name("global_function_property_get"),
    fn_name("global_function_property_set"),
    fn_name("global_function_property_exists"),
    fn_name.name,
  ];
  function lambda2(la) {
    function lambda(f_name) {
      let nodes = js_call_named_argument_nodes(ast, f_name);
      each(nodes, la);
    }
    each(key_fns, lambda);
    let sources = js_import_source_nodes(ast);
    each(sources, la);
  }
  let skip = list_adder(lambda2);
  return skip;
}
