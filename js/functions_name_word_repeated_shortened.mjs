import { arguments_assert } from "./arguments_assert.mjs";
import { functions_name_word_repeated_named } from "./functions_name_word_repeated_named.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { function_exists } from "./function_exists.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function functions_name_word_repeated_shortened() {
  "Every function name saying one word twice running, beside the name it would carry with the second telling dropped, and whether anything already answers to that.";
  "THE SHORTER NAME IS NOT ALWAYS FREE AND IS NOT ALWAYS RIGHT, so the renaming is not something to run over the whole list unread. A name may shorten onto one that already stands, in which case renaming would put two different functions under one word; and a doubled word is sometimes the thing being named rather than a slip - a lesson about the operator written and, or about the comparison written equality, says that word twice on purpose and reads as nonsense with one of them taken away.";
  "SO WHAT COMES BACK IS THE ARGUMENTS TO A RENAME AND NOT A RENAME. A row whose shorter name is free is a command somebody can run after reading the two names side by side, which is a second of work per name; a walk that renamed all of them would be twenty five guesses, and the four it got wrong would each read as a name somebody chose.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED.";
  arguments_assert(arguments, 0);
  let told = await functions_name_word_repeated_named();
  let offenders = property_get(told, "offenders");
  let rows = [];
  for (let f_name of offenders) {
    let parts = function_name_to_parts(f_name);
    let kept = [];
    let before = null;
    for (let word of parts) {
      let same = equal(word, before);
      if (not(same)) {
        list_add(kept, word);
      }
      before = word;
    }
    let f_name_new = list_join_underscore(kept);
    let known = await function_exists(f_name_new);
    let taken = property_get(known, "exists");
    let said = text_combine_multiple([f_name, " -> ", f_name_new]);
    list_add(rows, {
      said,
      f_name,
      f_name_new,
      taken,
    });
  }
  return rows;
}
