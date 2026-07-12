import { function_rename_open } from "./function_rename_open.mjs";
import { function_name_new_get_args } from "./function_name_new_get_args.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { log } from "./log.mjs";
import { text_combine_middle_comma } from "./text_combine_middle_comma.mjs";
import { app_code_lesson_add } from "./app_code_lesson_add.mjs";
export async function app_code_lesson_named(
  fn_base_name,
  plugin_fn,
  args_comma,
) {
  arguments_assert(arguments, 3);
  let name_new = await app_code_lesson_add(fn_base_name);
  let combined = text_combine_middle_comma(fn_base_name, args_comma);
  let f_name_new = null;
  ({ f_name_new } = await function_name_new_get_args(plugin_fn, combined));
  log(app_code_lesson_named.name, {
    combined,
    f_name_new,
  });
  let r = await function_rename_open(name_new, f_name_new);
  return r;
}
