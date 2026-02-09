import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
export async function function_multiple_rename_generic_starts_with(
  name_change,
  f_name_prefix,
) {
  await function_multiple_rename_generic(filter, name_change);
  function filter(f_name) {
    text_starts_with(f_name, f_name_prefix);
  }
}
