import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_ends_with_curried_right } from "./text_starts_ends_with_curried_right.mjs";
import { text_prefix_change_curried_right_2 } from "./text_prefix_change_curried_right_2.mjs";
import { functions_rename_generic } from "./functions_rename_generic.mjs";
export async function functions_rename_if_starts_ends_with_prefix_change(
  f_name_prefix_before,
  f_name_suffix,
  f_name_prefix_after,
) {
  arguments_assert(arguments, 3);
  ("Renames every function whose name starts one way and ends another, changing only the front of the name and leaving the rest of it alone. Hands back which names were changed and to what, the same as the siblings that match on the front alone or change the back.");
  ("The sibling that matches on both ends can only change the back, and the sibling that changes the front can only match on the front, so a family named by its front and picked out by its back had no command at all. That family is real: a whole app's checks wear the app's prefix while nothing in the app calls them, and the front is the part that lies.");
  let filter = text_starts_ends_with_curried_right(
    f_name_prefix_before,
    f_name_suffix,
  );
  let name_change = text_prefix_change_curried_right_2(
    f_name_prefix_before,
    f_name_prefix_after,
  );
  let renamed = await functions_rename_generic(filter, name_change);
  return renamed;
}
