import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_and_empty_not_is_assert_json } from "./text_and_empty_not_is_assert_json.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function function_name_full_assert(f_name) {
  "throws unless f_name is a function's own full name — refusing both shorthands, an alias key and an acronym";
  "a permission rule is matched as literal text, so a shorthand can never be granted safely: repoint the alias and the auto-approval silently follows it elsewhere";
  "no name at all has to be refused first, and separately, because the comparison below cannot do it: unaliasing nothing gives nothing back, so it finds the two equal and agrees - a check that passes on the one input it most needs to catch. what followed was a line naming no command written into the log, and only then a complaint about something else entirely; that single line killed both readings of the log until the reader was made to survive it";
  let name_example = fn_name("functions_search_all");
  text_and_empty_not_is_assert_json(f_name, {
    hint: text_combine_multiple([
      "Which function would you like to run? Name it in full after the script, like `node scripts/ai.mjs ",
      name_example,
      " assert`.",
    ]),
  });
  let v = await function_name_unalias(f_name);
  let unaliased = property_get(v, "unaliased");
  equal_assert_json(f_name, unaliased, {
    hint: "Would you like to run it by its full name instead? Shorthand is for the keyboard, and this seam only takes full names so a permission rule can name exactly what runs.",
  });
}
