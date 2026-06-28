import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { function_current_selects_apply_generic } from "../../../love/public/src/function_current_selects_apply_generic.mjs";
export async function function_current_selects_apply_args(apply_fn_name, args) {
  arguments_assert(arguments, 2);
  let split = text_split_comma_dot(args);
  await function_current_selects_apply_generic(apply_fn_name, split);
}
