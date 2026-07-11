import { js_code_call_args_await_maybe_parse_expression } from "../../../love/public/src/js_code_call_args_await_maybe_parse_expression.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_name_new_get_args_list } from "../../../love/public/src/function_name_new_get_args_list.mjs";
import { function_new_expression } from "../../../love/public/src/function_new_expression.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export async function js_expression_functionize(ast, selects, ...args) {
  arguments_assert(arguments, 3);
  let name = js_flo_name(ast);
  log(js_expression_functionize.name, {
    args,
  });
  let fr = list_first_remaining(args);
  let list = property_get(fr, "remaining");
  let plugin_fn = property_get(fr, "first");
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
