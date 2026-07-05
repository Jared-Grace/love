import { function_rename_open } from "../../../love/public/src/function_rename_open.mjs";
import { function_name_new_get_args } from "../../../love/public/src/function_name_new_get_args.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { text_combine_middle_comma } from "../../../love/public/src/text_combine_middle_comma.mjs";
import { app_code_lesson_add } from "../../../love/public/src/app_code_lesson_add.mjs";
export async function app_code_lesson_named(
  fn_base_name,
  plugin_fn,
  args_comma,
) {
  arguments_assert(arguments, 3);
  let name_new = await app_code_lesson_add(fn_base_name);
  let combined = text_combine_middle_comma(name_new, args_comma);
  log(app_code_lesson_named.name, {
    combined,
  });
  arguments_assert(arguments, 3);
  let f_name_new = null;
  let f_name_old = null;
  ({ f_name_new, f_name_old } = await function_name_new_get_args(
    plugin_fn,
    combined,
  ));
  let r = await function_rename_open(f_name_old, f_name_new);
  return r;
}
