import { text_replace_curried_right_2 } from "./text_replace_curried_right_2.mjs";
import { functions_rename_generic_starts_with } from "./functions_rename_generic_starts_with.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_rename_if_starts_with_replace(
  f_name_prefix,
  from,
  to,
) {
  "Renames every function whose name begins with the prefix you give by replacing one run of text inside the name with another - the prefix chooses which functions are touched and the replacement decides what each of their new names is";
  arguments_assert(arguments, 3);
  let r = text_replace_curried_right_2(from, to);
  await functions_rename_generic_starts_with(r, f_name_prefix);
}
