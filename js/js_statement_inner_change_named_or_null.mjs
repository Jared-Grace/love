import { list_size_equal } from "./list_size_equal.mjs";
import { js_statement_runs_differing_or_null } from "./js_statement_runs_differing_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_runs } from "./js_statement_runs.mjs";
import { js_statement_kind_word } from "./js_statement_kind_word.mjs";
import { js_statements_change_named } from "./js_statements_change_named.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
import { not } from "./not.mjs";
export function js_statement_inner_change_named_or_null(before, after) {
  "What happened inside one branch of a statement that holds runs of other statements - or nothing at all, where the two handed in are not one such statement edited in one branch.";
  "AN IF IS AS OPAQUE AS A FUNCTION WAS. Reading a run only by the lines it is written out of, every edit anywhere under a condition or inside a loop arrives as that whole statement having been swapped for another one - the same collapse the reading beside this one undoes for functions, and the largest remaining bucket after it was undone there.";
  "ONE BRANCH MUST BE THE ONE THAT MOVED. An if whose then and whose else both changed is two edits, and pointing a command at the statement as though it were one would specify work nobody did. Where more than one run differs the answer is given up rather than guessed, and the caller keeps the name it already had.";
  "A BRANCH ADDED OR TAKEN AWAY IS NOT AN EDIT INSIDE ONE. The counts differing is an else appearing or a catch going, which is a change to the statement itself, and the runs on either side no longer line up to be compared at all.";
  "EVERY RUN MATCHING IS THE HEAD HAVING MOVED - the condition, the thing looped over - and that too belongs to the caller rather than here, because nothing inside changed for this to name.";
  arguments_assert(arguments, 2);
  let differing = js_statement_runs_differing_or_null(before, after);
  let apart = null_is(differing);
  if (apart) {
    return null;
  }
  let one_branch = list_size_equal(differing, 1);
  if (not(one_branch)) {
    return null;
  }
  let place = list_first(differing);
  let runs_before = js_statement_runs(before);
  let runs_after = js_statement_runs(after);
  let before2 = list_get(runs_before, place);
  let after2 = list_get(runs_after, place);
  let inner = js_statements_change_named(before2, after2);
  let kind = property_get(before, "type");
  let word = js_statement_kind_word(kind);
  let named = text_combine_multiple(["in ", word, ", ", inner]);
  return named;
}
