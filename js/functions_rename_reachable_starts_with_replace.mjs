import { arguments_assert } from "./arguments_assert.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { functions_rename_generic } from "./functions_rename_generic.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { text_replace_curried_right_2 } from "./text_replace_curried_right_2.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function functions_rename_reachable_starts_with_replace(
  f_name_entry,
  f_name_prefix,
  from,
  to,
) {
  arguments_assert(arguments, 4);
  ("Renames the part of a prefix family that one entry point actually reaches, and leaves the rest of the family alone.");
  ("The sibling that takes a prefix alone renames every name wearing it, which is the wrong set whenever a family has split in two without being renamed: some of it is shared and some of it still belongs to the one app. Reachability is what tells those apart, because a function shared code can arrive at is shared in fact whatever its name says.");
  ("Measured case: 48 functions carried the app_bible_ prefix and 38 of them were reachable from the reader shared by four apps. A prefix rename would have been right for 38 and wrong for 10.");
  let reachable = await function_reachable_names(f_name_entry);
  let name_change = text_replace_curried_right_2(from, to);
  function filter(f_name) {
    let starts = text_starts_with(f_name, f_name_prefix);
    if (not(starts)) {
      return false;
    }
    let inside = list_includes(reachable, f_name);
    return inside;
  }
  let renamed = await functions_rename_generic(filter, name_change);
  return renamed;
}
