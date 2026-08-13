import { property_in_list } from "./property_in_list.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { functions_reachable_unguarded } from "./functions_reachable_unguarded.mjs";
import { hash_key_getters_all } from "./hash_key_getters_all.mjs";
import { hash_fields_keys } from "./hash_fields_keys.mjs";
import { hash_fields_guard_names } from "./hash_fields_guard_names.mjs";
import { function_run } from "./function_run.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not } from "./not.mjs";
export async function apps_hash_keys_unchecked() {
  "Every word of a page address an app reads and nobody answers for, said as app and word so the complaint names the thing to fix rather than the page it was found on.";
  "Two ways to be unanswered, and the word is unanswered either way. No field describes it, so nothing could tell a reader it is wrong however the page asked; or a field does describe it and the app never asks, so the checking exists and this page walks past it.";
  "It is the word and not the page because a page that guards one word looks guarded from the outside forever after. The next word added to it would arrive unchecked under a green gate, which is the failure this shape exists to keep from happening quietly.";
  "The words are read by running the small functions that hand them back rather than by reading their source, because the word is what a link is actually spelled with and a getter is free to build it however it likes.";
  let mains = apps_all_main_fns();
  let pairs = await hash_key_getters_all();
  let checked = hash_fields_keys();
  let guards = hash_fields_guard_names();
  let unchecked = [];
  for (let main of mains) {
    let starts = [main];
    let reached = await functions_reachable_unguarded(starts);
    let answers = false;
    for (let guard of guards) {
      let reaches_guard = list_includes(reached, guard);
      if (reaches_guard) {
        answers = true;
      }
    }
    let said = [];
    for (let pair of pairs) {
      let reads = property_in_list(pair, "f_name", reached);
      if (reads) {
        let getter = property_get(pair, "getter");
        let no_args = [];
        let key = await function_run(getter, no_args);
        let described = list_includes(checked, key);
        let answered = described;
        if (answered) {
          answered = answers;
        }
        let twice = list_includes(said, key);
        if (not(answered)) {
          if (not(twice)) {
            list_add(said, key);
            let name = text_combine_multiple([main, " ", key]);
            list_add(unchecked, name);
          }
        }
      }
    }
  }
  return unchecked;
}
