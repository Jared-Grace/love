import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function binisaya_words_known_held_is(known, word) {
  "$plain known";
  "$plain word";
  "Whether the gathered Cebuano dictionary holds an entry for one spelling.";
  "The dictionary answers with the entry itself or with nothing, so a reading that only wants to know whether the word is in there at all has to ask for the entry, ask whether the answer is nothing, and turn that around. Five sites wrote those three lines out and used the entry for nothing else, and those five are the ones that now ask here.";
  "★ ABOUT AS MANY SITES AGAIN SPELL THE SAME THREE LINES AND ARE DELIBERATELY LEFT ALONE, BECAUSE THEY GO ON TO READ THE ENTRY. Asking this beside their own lookup would put the same word to the dictionary twice to save one line, which is a slower reading and not a clearer one. What decides is never the shape of the lines but whether anything below wants what came back.";
  ("The word may arrive in either kind of letter. ",
    fn_name("binisaya_words_known_get"),
    " lowers it before it looks and falls back to the spelling as handed in, so nothing here has to lower it first and nothing here may.");
  ("This says only that an entry exists, never what the entry says. A reading that wants the entry itself should keep asking ",
    fn_name("binisaya_words_known_get"),
    " and use what comes back.");
  arguments_assert(arguments, 2);
  let held = binisaya_words_known_get(known, word);
  let missing = null_is(held);
  let looked_up = not(missing);
  return looked_up;
}
