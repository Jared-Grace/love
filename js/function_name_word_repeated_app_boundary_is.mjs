import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { apps_names } from "./apps_names.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { equal } from "./equal.mjs";
import { function_name_to_part_first } from "./function_name_to_part_first.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_name_to_part_last } from "./function_name_to_part_last.mjs";
export async function function_name_word_repeated_app_boundary_is(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("Whether the word a name says twice running is doubled only because an app's own last word is the first word of what the app calls the thing.");
  ("A doubled word is normally a slip, because a name is its parts joined and the second telling narrows nothing. That reasoning holds inside one sentence. It stops holding where the name crosses out of an app's prefix into what that app calls the thing, because the two copies are then in different roles: the first says which app, the second is the first word of the subject. ",
    fn_name("app_learn_js_code_output"),
    " is the code app's code_output, a card carrying a program beside what it printed, and app_code_output would say the app has an output.");
  ("So an app prefix ending on the very word the subject starts with is the one case where the repeat is carrying its weight. This asks the running list of apps rather than a written list of names, so an app added tomorrow is covered without anybody remembering to come back here.");
  ("The cut does not ask this. A cut composes a holder with a word its own last statement mentions, and both of those are subject words in one sentence, so a repeat there is always the slip the plain reading says it is.");
  ("The same holds one seam earlier, where the word that says this is an app meets an app whose name starts with that very word. The app called app has ",
    fn_name("app_app"),
    " for its own function, and the two copies are again in different roles: the first says it is an app, the second is which one. A name like that is chosen, not slipped into, because the name is the address.");
  let names = await apps_names();
  for (let name of names) {
    let prefix = app_shared_name_prefixed(name);
    let left = function_name_to_part_first(prefix);
    let right = function_name_to_part_first(name);
    let seam = equal(left, right);
    if (seam) {
      let own = equal(f_name, prefix);
      if (own) {
        return true;
      }
      let prefix2 = text_combine_multiple([prefix, "_"]);
      let under = text_starts_with(f_name, prefix2);
      if (under) {
        return true;
      }
    }
    let word = function_name_to_part_last(prefix);
    let doubled = text_combine_multiple([prefix, "_", word]);
    let exactly = equal(f_name, doubled);
    if (exactly) {
      return true;
    }
    let further = text_combine_multiple([doubled, "_"]);
    let carried = text_starts_with(f_name, further);
    if (carried) {
      return true;
    }
  }
  return false;
}
