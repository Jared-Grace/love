import { text_starts_with_curried_right } from "./text_starts_with_curried_right.mjs";
import { functions_rename_generic } from "./functions_rename_generic.mjs";
export async function functions_rename_generic_starts_with(
  name_change,
  f_name_prefix,
) {
  "Hands back which names were changed and to what. The one underneath has";
  "always answered that; this wrapper dropped it, so a migration that renamed";
  "thirty functions and one that matched nothing read the same from outside.";
  let filter = text_starts_with_curried_right(f_name_prefix);
  let renamed = await functions_rename_generic(filter, name_change);
  return renamed;
}
