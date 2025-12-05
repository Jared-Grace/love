import { list_filter_ends_with_any } from "../../../love/public/src/list_filter_ends_with_any.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { string_prefix_change } from "../../../love/public/src/string_prefix_change.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_rename_if_starts_ends_with(
  f_name_prefix,
  f_name_suffix_before,
  f_name_suffix_after,
) {
  assert_arguments(arguments, 3);
  await function_multiple_rename_generic(filter, name_change);
  marker("1");
  function filter(f_names) {
    let filtered2 = list_filter_starts_with(f_names, f_name_suffix_before);
    let filtered = list_filter_ends_with_any([f_name_suffix_after], filtered2);
    return filtered2;
  }
  function name_change(f_name_before) {
    let together2 = string_prefix_change(
      f_name_before,
      f_name_prefix_before,
      f_name_prefix_after,
    );
    return together2;
  }
}
