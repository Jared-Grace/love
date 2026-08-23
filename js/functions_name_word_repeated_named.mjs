import { function_name_word_repeated_app_boundary_is } from "./function_name_word_repeated_app_boundary_is.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_word_repeated_is } from "./function_name_word_repeated_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_name_word_repeated_named() {
  "Every function in the repo whose name says one word twice running.";
  "THE CUT ASKS THIS BEFORE IT TAKES A NAME AND NOTHING ASKS IT OF THE NAMES ALREADY STANDING. The test was written for the two cutting moves, so a run whose word would double the holder's is turned down at the moment of cutting - and every name that was written before the test existed, or written by hand around it, was never looked at. Four were found this way while counting what the cut refuses, and each one is a name the cut would refuse to write today.";
  "A NAME IS ITS PARTS JOINED AND EVERY PART IS MEANT TO NARROW. The second telling of a word narrows nothing, so the name is longer than it says - and it reads as a name somebody chose, which is why nothing anywhere questions one.";
  "A REPEAT ACROSS AN APP'S PREFIX IS NOT ONE OF THESE. Where an app's own last word is the first word of what the app calls the thing, the two copies are in different roles and both are working - the code app's code_output is a program beside what it printed, and app_code_output would say the app has an output. Seven of the twenty five found the first time anybody looked were that shape, so the plain reading was calling correct names slips and would have gone on refusing new ones.";
  "IT COUNTS WHAT IT WALKED. A reading of every function that came back empty because it was handed no functions looks exactly like a repo with no doubled names in it.";
  arguments_assert(arguments, 0);
  let f_names = await functions_names();
  let offenders = [];
  for (let f_name of f_names) {
    let repeated = function_name_word_repeated_is(f_name);
    if (repeated) {
      let bounded = await function_name_word_repeated_app_boundary_is(f_name);
      if (not(bounded)) {
        list_add(offenders, f_name);
      }
    }
  }
  let r = {
    walked: list_size(f_names),
    offenders,
  };
  return r;
}
