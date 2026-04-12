import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
export async function function_curryify_generic_open(
  f_name,
  name_get,
  args_get,
) {
  let r = await function_curryify_generic(f_name, name_get, args_get);
  let output = property_get(r, "output");
  let f_name_curried = property_get(r, "f_name_curried");
  await function_open(f_name_curried);
  return output;
}
