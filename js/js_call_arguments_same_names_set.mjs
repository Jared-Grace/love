import { property_get } from "./property_get.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_node_call_get } from "./js_node_call_get.mjs";
import { list_single } from "./list_single.mjs";
export async function js_call_arguments_same_names_set(ast, selects) {
  let node = list_single(selects);
  let call = js_node_call_get(node);
  let f_name = js_call_callee_name_try(call);
  let d = await function_parse_declaration(f_name);
  let declaration = property_get(d, "declaration");
}
