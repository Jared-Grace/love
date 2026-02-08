import { function_multiple_rename_generic_starts_with } from "../../../love/public/src/function_multiple_rename_generic_starts_with.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_multiple_rename_if_starts_with_replace(
  f_name_prefix,
  from,
  to,
) {
  assert_arguments(arguments, 3);
  await function_multiple_rename_generic_starts_with(
    name_change,
    f_name_prefix,
  );
  function name_change(f_name_before) {
    let f_name_after = string_replace(f_name_before, from, to);
    return f_name_after;
  }
}
