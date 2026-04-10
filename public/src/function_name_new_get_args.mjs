import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining_from_comma_dot } from "../../../love/public/src/list_first_remaining_from_comma_dot.mjs";
import { function_name_new_get_generic } from "../../../love/public/src/function_name_new_get_generic.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
export async function function_name_new_get_args(
  plugin_fn,
  f_name_old_args_comma,
) {
  let fr = list_first_remaining_from_comma_dot(f_name_old_args_comma);
  let split = property_get(fr, "remaining");
  let f_name_old = property_get(fr, "first");
  ({ f_name_old, plugin_fn } = await function_name_new_get_generic(
    f_name_old,
    plugin_fn,
  ));
  log(function_name_new_get_args.name, {
    split,
  });
  let args_run = list_concat_single(f_name_old, split);
  let f_name_new = await function_run(plugin_fn, args_run);
  let r2 = {
    f_name_new,
    f_name_old,
  };
  return r2;
}
