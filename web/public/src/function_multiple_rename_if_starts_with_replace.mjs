import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_multiple_rename_if_starts_with } from "../../../love/public/src/function_multiple_rename_if_starts_with.mjs";
export async function function_multiple_rename_if_starts_with_replace(
  f_name_prefix_before,
  from,
  to,
) {
  assert_arguments(arguments, 3);
  let f_name_after = string_replace(f_name_before, from, to);
  let v = await function_multiple_rename_if_starts_with(
    f_name_prefix_before,
    f_name_prefix_after,
  );
  return v;
}
