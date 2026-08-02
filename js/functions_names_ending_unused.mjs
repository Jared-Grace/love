import { functions_names_ending_found_assert } from "./functions_names_ending_found_assert.mjs";
import { list_difference } from "./list_difference.mjs";
import { functions_names_in_flight_without } from "./functions_names_in_flight_without.mjs";
export async function functions_names_ending_unused(ending, hint, used) {
  "The functions of one kind that nothing uses, with the ones somebody is still writing set aside.";
  "Two checks were the same three steps with a different middle. A kind of function is spelled by an ending, something else names the ones that are actually used, and what is left over is the fault - a gate no list runs, a corpus no gate reads. Only the naming of what is used differs between them, so only that is asked for here.";
  "The refusal on the left comes first and comes from here, because every check of this shape hands back a subtraction: nothing found of the kind gives exactly the nothing a repo in good order gives, and the one thing that could not be told from the answer is whether anything was looked at.";
  "The setting aside on the right comes last and also comes from here. Writing a function and recording it as used are two files edited seconds apart, and everybody works in this one folder at once - so without it every check of this shape would go red for everyone the moment anybody began.";
  let found = await functions_names_ending_found_assert(ending, hint);
  let unused = list_difference(found, used);
  let missing = await functions_names_in_flight_without(unused);
  return missing;
}
