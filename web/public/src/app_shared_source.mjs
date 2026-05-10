import { functions_dependencies_code_copy_split } from "../../../love/public/src/functions_dependencies_code_copy_split.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { webpack_build_generic_source_fn_names } from "../../../love/public/src/webpack_build_generic_source_fn_names.mjs";
import { js_code_call_app_context_initialize } from "../../../love/public/src/js_code_call_app_context_initialize.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function app_shared_source(search) {
  let a = await app_shared_name_search_info(search);
  let f_name = property_get(a, "f_name");
  let call = js_code_call_app_context_initialize(f_name);
  let fns = webpack_build_generic_source_fn_names(f_name);
  arguments_assert(arguments, 1);
  let split = text_split_comma_dot(f_names);
  await functions_dependencies_code_copy_split(split);
  return joined;
}
