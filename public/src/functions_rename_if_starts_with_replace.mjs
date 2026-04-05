import { text_replace_curried_right_2 } from "../../../love/public/src/text_replace_curried_right_2.mjs";
import { functions_rename_generic_starts_with } from "../../../love/public/src/functions_rename_generic_starts_with.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export async function functions_rename_if_starts_with_replace(
  f_name_prefix,
  from,
  to,
) {
  arguments_assert(arguments, 3);
  let r2 = text_replace_curried_right_2(from, to);
  await functions_rename_generic_starts_with(r2, f_name_prefix);
}
