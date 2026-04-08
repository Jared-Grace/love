import { function_name_new_get } from "../../../love/public/src/function_name_new_get.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_generic(plugin_fn, f_name_old, args) {
  let f_name_new = null;
  ({ f_name_new, f_name_old } = await function_name_new_get(
    f_name_old,
    args,
    plugin_fn,
  ));
  let r = await function_wrap(f_name_old, f_name_new);
  return r;
}
