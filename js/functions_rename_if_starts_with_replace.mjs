import { text_replace_curried_right_2 } from "./text_replace_curried_right_2.mjs";
import { functions_rename_generic_starts_with } from "./functions_rename_generic_starts_with.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_rename_if_starts_with_replace(
  f_name_prefix,
  from,
  to,
) {
  arguments_assert(arguments, 3);
  let r = text_replace_curried_right_2(from, to);
  await functions_rename_generic_starts_with(r, f_name_prefix);
}
