import { function_name_unalias } from "./function_name_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function function_name_full_assert(f_name) {
  "throws unless f_name is a function's own full name — refusing both shorthands, an alias key and an acronym";
  ("a permission rule is matched as literal text, so a shorthand can never be granted safely: repoint the alias and the auto-approval silently follows it elsewhere");
  let v = await function_name_unalias(f_name);
  let unaliased = property_get(v, "unaliased");
  equal_assert_json(f_name, unaliased, {
    hint: "Would you like to run it by its full name instead? Shorthand is for the keyboard, and this seam only takes full names so a permission rule can name exactly what runs.",
  });
}
