import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { list_last } from "./list_last.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { equal } from "./equal.mjs";
export async function function_name_word_repeated_app_boundary_is(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("Whether the word a name says twice running is doubled only because an app's own last word is the first word of what the app calls the thing.");
  ("A doubled word is normally a slip, because a name is its parts joined and the second telling narrows nothing. That reasoning holds inside one sentence. It stops holding where the name crosses out of an app's prefix into what that app calls the thing, because the two copies are then in different roles: the first says which app, the second is the first word of the subject. ",
    fn_name("app_code_code_output"),
    " is the code app's code_output, a card carrying a program beside what it printed, and app_code_output would say the app has an output.");
  ("So an app prefix ending on the very word the subject starts with is the one case where the repeat is carrying its weight. This asks the running list of apps rather than a written list of names, so an app added tomorrow is covered without anybody remembering to come back here.");
  ("The cut does not ask this. A cut composes a holder with a word its own last statement mentions, and both of those are subject words in one sentence, so a repeat there is always the slip the plain reading says it is.");
  let prefixes = await apps_names_prefixed();
  for (let prefix of prefixes) {
    let parts = function_name_to_parts(prefix);
    let word = list_last(parts);
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
