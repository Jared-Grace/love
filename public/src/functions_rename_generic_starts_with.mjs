import { log } from "../../../love/public/src/log.mjs";
import { text_starts_with_curry_right } from "../../../love/public/src/text_starts_with_curry_right.mjs";
import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
export async function functions_rename_generic_starts_with(
  name_change,
  f_name_prefix,
) {
  let filter = text_starts_with_curry_right(f_name_prefix);
  log({
    filter,
  });
  await functions_rename_generic(filter, name_change);
}
