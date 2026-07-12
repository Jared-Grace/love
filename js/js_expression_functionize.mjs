import { js_code_call_args_await_maybe_parse_expression } from "./js_code_call_args_await_maybe_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_new_get_args_list } from "./function_name_new_get_args_list.mjs";
import { function_new_expression } from "./function_new_expression.mjs";
import { list_single } from "./list_single.mjs";
export async function js_expression_functionize(
  ast,
  selects,
  plugin_fn,
  ...list
) {
  let name = js_flo_name(ast);
  list_add_first(list, name);
  let r = await function_name_new_get_args_list(plugin_fn, list);
  let f_name_new = property_get(r, "f_name_new");
  let node = list_single(selects);
  let r2 = await function_new_expression(f_name_new, node);
  let declaration = property_get(r2, "declaration");
  let parsed = js_code_call_args_await_maybe_parse_expression(
    f_name_new,
    [],
    declaration,
  );
  object_replace(node, parsed);
}
