import { arguments_assert } from "./arguments_assert.mjs";
import { function_span_opening_is } from "./function_span_opening_is.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { function_span_cut_named_skip_decided_or_null } from "./function_span_cut_named_skip_decided_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_span_cut_or_undo } from "./function_span_cut_or_undo.mjs";
export async function function_span_cut_named(
  f_name,
  address_from,
  address_to,
  f_name_new,
) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  "$plain f_name_new";
  arguments_assert(arguments, 4);
  ("One run of lines out of the named function, cut out under a name the caller has chosen, and committed under its own command - or, where a reason says not to take it, that reason and nothing done.");
  ("The twin of the one beside it, for the runs that one refuses. Six of its eight reasons are about the word the run ends on and what can be built from it, and every one of them ends by asking somebody to choose the name instead - so what they are refusing is not the cut but the borrowing. Measured over the whole repo on 2026-08-19, five of the six runs whose cutting would have finished a function outright were held back for the name alone and not one of them for anything unsafe.");
  ("So the borrowing is what is dropped here, and nothing else is. A name arriving from outside cannot be asked whether the word it came from was a good one, because it did not come from a word; it can only be asked whether anything already answers to it, and that is asked. The one reason that was never about the name is asked too, unchanged.");
  ("Choosing well is the caller's whole contribution and it is not a small one. A name is meant to say what the run holds, which is something only a reader of those lines knows - and a run reaches this function precisely because no rule could work its name out.");
  ("What is left here is asking and doing. The deciding moved out on 2026-09-01, into the function called below, and the reason it moved is that it could not be checked where it was: reaching the repo twice while making up its mind, it could not be handed a run of lines written down anywhere, and both of its reasons had gone unexercised since the day they were written. Handed the repo's two answers already decided, the same deciding is a question about words, and there is now a corpus of them beside it.");
  ("Both answers are asked for before either is looked at, where before the second was only asked when the first came back false. That changes nothing about what comes back: both are readings that alter nothing, and neither depends on the other. It costs one lookup that used to be skipped, on a run that was about to be refused anyway.");
  ("Nothing is caught. A cut that cannot be made stops whoever asked for it with everything before it already committed, which is what should happen: a run the cut cannot take is a finding rather than a row to walk past.");
  let opening_is = await function_span_opening_is(f_name, address_from);
  let search = await function_exists(f_name_new);
  let name_taken_is = property_get(search, "exists");
  let skip = function_span_cut_named_skip_decided_or_null(
    address_from,
    address_to,
    f_name_new,
    opening_is,
    name_taken_is,
  );
  let refused_is = null_not_is(skip);
  if (refused_is) {
    return skip;
  }
  let outcome = await function_call_commit(function_span_cut_or_undo, [
    f_name,
    address_from,
    address_to,
    f_name_new,
  ]);
  return outcome;
}
