import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_string } from "../../../love/public/src/js_string.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
import { fn_name_arg_get } from "../../../love/public/src/fn_name_arg_get.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { property_exists_if_async } from "../../../love/public/src/property_exists_if_async.mjs";
import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
import { data_identifiers_fn_names_get } from "../../../love/public/src/data_identifiers_fn_names_get.mjs";
export async function function_rename_fn_names_check(
  f_name_before,
  f_name_after,
) {
  log(function_rename_fn_names_check.name, {
    f_name_before,
    f_name_after,
  });
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
    error_json({
      message:
        "You are trying to rename: " +
        f_name_before +
        ". However that is referenced by " +
        value +
        " through " +
        fn_name.name +
        ". TODO: " +
        function_rename_open.name +
        " needs enhancing to rename " +
        fn_name.name +
        " references.",
      f_name_before,
      value,
    });
  }
  await property_exists_if_async(i, f_name_before, lambda);
  return;
  async function lambda2(ast) {}
}
