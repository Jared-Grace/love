import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { function_rename_open_generic_args } from "../../../love/public/src/function_rename_open_generic_args.mjs";
import { app_code_lesson_add } from "../../../love/public/src/app_code_lesson_add.mjs";
export async function app_code_lesson_named(
  fn_base_name,
  plugin_fn,
  args_comma,
) {
  let name_new = await app_code_lesson_add(fn_base_name);
  let combined = text_combine_multiple([name_new, ",", args_comma]);
  let r = await function_rename_open_generic_args(plugin_fn, combined);
  return r;
}
