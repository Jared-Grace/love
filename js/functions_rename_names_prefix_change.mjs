import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_prefix_change_curried_right_2 } from "./text_prefix_change_curried_right_2.mjs";
import { functions_names } from "./functions_names.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { functions_rename_generic } from "./functions_rename_generic.mjs";
export async function functions_rename_names_prefix_change(
  f_names,
  f_name_prefix_before,
  f_name_prefix_after,
) {
  arguments_assert(arguments, 3);
  ("Renames each function named in the given list, changing only the front of its name and leaving the rest alone. Hands back which names were changed and to what, the same as the siblings that pick their own set out of the repo.");
  ("The siblings all find their own set from a shape in the name, which is the better command whenever the shape is really what decides. This one is for when it is not: a family sharing a front and a back where only some members belong, so the set is a judgment somebody made and the command is told it rather than guessing it.");
  ("A name in the list that no function answers to is a mistake worth stopping on rather than skipping quietly, because a list is typed by hand and a typo in one would otherwise look exactly like a rename that was never wanted.");
  function filter(f_name) {
    let wanted_is = list_includes(f_names, f_name);
    return wanted_is;
  }
  let name_change = text_prefix_change_curried_right_2(
    f_name_prefix_before,
    f_name_prefix_after,
  );
  let known = await functions_names();
  for (let f_name of f_names) {
    let known_is = list_includes(known, f_name);
    true_is_assert_json(known_is, {
      hint: "each name in the list should be a function this repo has - is one of them spelled wrong?",
      f_name,
    });
  }
  let renamed = await functions_rename_generic(filter, name_change);
  return renamed;
}
