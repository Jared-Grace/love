import { function_current_selects_apply_generic } from "./function_current_selects_apply_generic.mjs";
export async function function_current_selects_apply(apply_fn_name) {
  let args = [];
  await function_current_selects_apply_generic(apply_fn_name, args);
}
