import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { functions_rename_generic_starts_with } from "../../../love/public/src/functions_rename_generic_starts_with.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { text_prefix_change } from "../../../love/public/src/text_prefix_change.mjs";
export async function functions_rename_if_starts_with_suffix_add(
  f_name_prefix_before,
  suffix,
) {
  assert_arguments(arguments, 2);
  let f_name_prefix_after = function_name_combine(f_name_prefix_before, suffix);
  await functions_rename_generic_starts_with(name_change, f_name_prefix_before);
  function name_change(f_name_before) {
    let together = text_prefix_change(
      f_name_before,
      f_name_prefix_before,
      f_name_prefix_after,
    );
    return together;
  }
}
