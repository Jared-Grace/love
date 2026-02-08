import { text_suffix_change } from "../../../love/public/src/text_suffix_change.mjs";
import { list_filter_starts_ends_with } from "../../../love/public/src/list_filter_starts_ends_with.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_multiple_rename_if_starts_ends_with(
  f_name_prefix,
  f_name_suffix_before,
  f_name_suffix_after,
) {
  assert_arguments(arguments, 3);
  await function_multiple_rename_generic(filter, name_change);
  function filter(f_names) {
    let filtered = list_filter_starts_ends_with(
      f_names,
      f_name_prefix,
      f_name_suffix_before,
    );
    return filtered;
  }
  function name_change(f_name_before) {
    let together2 = text_suffix_change(
      f_name_before,
      f_name_suffix_before,
      f_name_suffix_after,
    );
    return together2;
  }
}
