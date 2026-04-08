import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { js_unparse_or_self_multiple } from "../../../love/public/src/js_unparse_or_self_multiple.mjs";
import { js_visit_id_to_node_or_id_multiple } from "../../../love/public/src/js_visit_id_to_node_or_id_multiple.mjs";
import { data_transform } from "../../../love/public/src/data_transform.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export async function function_current_selects_add(item_to_add, on_previous) {
  let f_name_current2 = await function_current_get();
  let ast = await function_ast(f_name_current2);
  async function lambda(previous) {
    log(function_current_selects_add.name, {
      previous1: previous,
    });
    list_add(previous, item_to_add);
    on_previous(previous);
    log(function_current_selects_add.name, {
      previous,
    });
    return previous;
  }
  let d_path = user_data_path();
  let value = await data_transform(
    "function_current_selects",
    [],
    lambda,
    d_path,
  );
  let selected = js_visit_id_to_node_or_id_multiple(value, ast);
  let selected_code = js_unparse_or_self_multiple(selected);
  let f_name_current = await function_current_get();
  let r = {
    f_name_current,
    selected_code,
  };
  return r;
}
