import { fn_name } from "./fn_name.mjs";
import { function_name_word_repeated_app_boundary_is } from "./function_name_word_repeated_app_boundary_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_words_repeated_is } from "./function_name_words_repeated_is.mjs";
export async function functions_names_repeated() {
  "Every function this repo answers to whose name says the same run of words twice running.";
  "NONE OF THESE WERE TYPED BY ANYBODY. A name that says a run of words and then says it again is what comes out when a command joins a holder's name to a piece already carrying that holder's name, and the answer reads as a name somebody chose - so nothing else in the repo would ever question it, and the only reader that ever notices is a person who happens to open the file.";
  "IT IS ASKED OF THE NAMES ALONE and reads no bodies, so it is cheap enough to be a gate rather than a report somebody remembers to run.";
  arguments_assert(arguments, 0);
  let f_names = await functions_names();
  ("A REPEAT ACROSS AN APP'S PREFIX IS NOT ONE OF THESE, for the reason ",
    fn_name("function_name_word_repeated_app_boundary_is"),
    " gives - the code app's code_output is a program beside what it printed, and its two copies of the word are in different roles.");
  let repeated = [];
  for (let f_name of f_names) {
    let words_repeated = function_name_words_repeated_is(f_name);
    if (words_repeated) {
      let bounded = await function_name_word_repeated_app_boundary_is(f_name);
      if (not(bounded)) {
        list_add(repeated, f_name);
      }
    }
  }
  return repeated;
}
