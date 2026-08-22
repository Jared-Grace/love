import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_name_words_repeated_is } from "./function_name_words_repeated_is.mjs";
export async function functions_names_repeated() {
  "Every function this repo answers to whose name says the same run of words twice running.";
  "NONE OF THESE WERE TYPED BY ANYBODY. A name that says a run of words and then says it again is what comes out when a command joins a holder's name to a piece already carrying that holder's name, and the answer reads as a name somebody chose - so nothing else in the repo would ever question it, and the only reader that ever notices is a person who happens to open the file.";
  "IT IS ASKED OF THE NAMES ALONE and reads no bodies, so it is cheap enough to be a gate rather than a report somebody remembers to run.";
  arguments_assert(arguments, 0);
  let f_names = await functions_names();
  let repeated = list_filter(f_names, function_name_words_repeated_is);
  return repeated;
}
