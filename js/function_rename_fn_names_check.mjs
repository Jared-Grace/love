import { object_replace } from "./object_replace.mjs";
import { js_string } from "./js_string.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { fn_name_arg_get } from "./fn_name_arg_get.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { functions_transform_list } from "./functions_transform_list.mjs";
import { property_exists_if_async } from "./property_exists_if_async.mjs";
import { function_rename_open } from "./function_rename_open.mjs";
import { fn_name } from "./fn_name.mjs";
import { error_json } from "./error_json.mjs";
import { data_identifiers_fn_names_get } from "./data_identifiers_fn_names_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_rename_fn_names_check(
  f_name_before,
  f_name_after,
) {
  let i = await data_identifiers_fn_names_get();
  async function lambda(value) {
    function lambda3(ast) {
      js_visit_calls_named(ast, fn_name.name, lambda4);
      function lambda4({ args }) {
        let f_name = js_flo_name(ast);
        let value = fn_name_arg_get(args, f_name);
        let s = js_string(f_name_after);
        object_replace(value, s);
      }
    }
    let waited = await functions_transform_list(value, lambda3);
    return;
    error_json({
      message: text_combine_multiple([
        "You are trying to rename: ",
        f_name_before,
        ". However that is referenced by ",
        value,
        " through ",
        fn_name.name,
        ". TODO: ",
        function_rename_open.name,
        " needs enhancing to rename ",
        fn_name.name,
        " references.",
      ]),
      f_name_before,
      value,
    });
  }
  await property_exists_if_async(i, f_name_before, lambda);
  return;
  async function lambda2(ast) {}
}
