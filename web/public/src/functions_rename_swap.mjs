import { function_rename_open_generic_args } from "../../../love/public/src/function_rename_open_generic_args.mjs";
export async function functions_rename_swap(plugin_fn, args_comma) {
  let r = await function_rename_open_generic_args(plugin_fn, args_comma);
  return r;
}
