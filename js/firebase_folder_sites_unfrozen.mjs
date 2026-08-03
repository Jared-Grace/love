import { function_getter_literal_try } from "./function_getter_literal_try.mjs";
import { firebase_folder_sites } from "./firebase_folder_sites.mjs";
import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function firebase_folder_sites_unfrozen() {
  "Every place a bucket folder is built out of a word this repo can change and nothing is watching - each answer naming the function building the address and what the word came from.";
  "Three shapes, one finding. A word typed straight into the slot has no function holding it, so the freeze record has nothing to key on. A word spelled as a reference says the opposite of what a bucket folder is - that renaming the function should carry the folder with it, which moves every later read while every file already uploaded stays where it was. A word behind a function nobody put on the list is watched by nothing, which is the shape the first two turn into when somebody half-fixes them.";
  "A folder that came from somewhere no function names is passed over rather than complained about. Which app is being deployed and which function is being sent up are worked out while the command runs, so there is no written word there to freeze and nothing a person could do about it.";
  "A word behind an unwatched function is only counted when that function is a written word and nothing else. Anything that works its value out is in the same position as an argument arriving from the caller - there is no fixed word to record - and complaining about those would bury the three real shapes in the ones nobody can act on.";
  let sites = await firebase_folder_sites();
  let watched = literals_frozen_names();
  let reference_marker = fn_name("fn_name");
  let offenders = [];
  for (let site of sites) {
    let caller = property_get(site, "caller");
    let held_by = property_get(site, "held_by");
    let written = property_get(site, "written");
    let typed_in = null_not_is(written);
    if (typed_in) {
      let item = text_combine_multiple([caller, " -> the word ", written]);
      list_add(offenders, item);
      continue;
    }
    let referenced = equal(held_by, reference_marker);
    if (referenced) {
      let item2 = text_combine_multiple([caller, " -> ", reference_marker]);
      list_add(offenders, item2);
      continue;
    }
    let unheld = null_is(held_by);
    if (unheld) {
      continue;
    }
    let frozen = list_includes(watched, held_by);
    if (frozen) {
      continue;
    }
    let literal = await function_getter_literal_try(held_by);
    let holds_word = null_not_is(literal);
    if (holds_word) {
      let item3 = text_combine_multiple([caller, " -> ", held_by]);
      list_add(offenders, item3);
    }
  }
  offenders.sort();
  return offenders;
}
