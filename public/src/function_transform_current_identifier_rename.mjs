import { js_identifier_rename_curried_right_2 } from "../../../love/public/src/js_identifier_rename_curried_right_2.mjs";
import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_identifier_rename(
  name_from,
  name_to,
) {
  let r2 = js_identifier_rename_curried_right_2(name_from, name_to);
  let r = await function_transform_current_fn(r2);
  return r;
}
