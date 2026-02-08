import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_multiple_rename_if_starts_with_replace(
  f_name_prefix_before,
  from,
  to,
) {
  assert_arguments(arguments, 3);
  await function_multiple_rename_generic(filter, name_change);
  function filter(f_names) {
    let filtered2 = list_filter_starts_with(f_names, f_name_prefix_before);
    return filtered2;
  }
  function name_change(f_name_before) {
    let f_name_after = string_replace(f_name_before, from, to);
    return f_name_after;
  }
  return v;
}
