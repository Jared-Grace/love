import { text_starts_with_curry_right } from "../../../love/public/src/text_starts_with_curry_right.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
export async function function_multiple_rename_generic_starts_with(
  name_change,
  f_name_prefix,
) {
  let filter = text_starts_with_curry_right(f_name_prefix);
  await function_multiple_rename_generic(filter, name_change);
}
