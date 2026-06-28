import { js_code_call_args_await_maybe_parse } from "../../../love/public/src/js_code_call_args_await_maybe_parse.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining_from_comma_dot } from "../../../love/public/src/list_first_remaining_from_comma_dot.mjs";
import { function_name_new_get_args_list } from "../../../love/public/src/function_name_new_get_args_list.mjs";
import { function_new_expression } from "../../../love/public/src/function_new_expression.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export async function js_expression_to_function(ast, selects, args) {
  let name = js_flo_name(ast);
  let fr = list_first_remaining_from_comma_dot(args);
  let list = property_get(fr, "remaining");
  let plugin_fn = property_get(fr, "first");
  list_add_first(list, name);
  let r = await function_name_new_get_args_list(plugin_fn, list);
  let f_name_new = property_get(r, "f_name_new");
  let node = list_single(selects);
  await function_new_expression(f_name_new, node);
  let parsed = js_code_call_args_await_maybe_parse(
    f_name_new,
    missing,
    declaration,
  );
}
