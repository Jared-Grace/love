import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
export async function function_multiple_rename_generic_starts_with(
  name_change,
  f_name_prefix,
) {
  await function_multiple_rename_generic(filter, name_change);
  function filter(f_names) {
    let filtered2 = list_filter_starts_with(f_names, f_name_prefix);
    return filtered2;
  }
}
