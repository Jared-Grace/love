import { functions_rename_generic_starts_with } from "../../../love/public/src/functions_rename_generic_starts_with.mjs";
import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export async function functions_rename_if_starts_with_replace(
  f_name_prefix,
  from,
  to,
) {
  arguments_assert(arguments, 3);
  await functions_rename_generic_starts_with(name_change, f_name_prefix);
  function name_change(f_name_before) {
    let f_name_after = text_replace(f_name_before, from, to);
    return f_name_after;
  }
}
