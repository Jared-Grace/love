import { arguments_assert } from "./arguments_assert.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_span_cut_or_undo } from "./function_span_cut_or_undo.mjs";
import { function_span_opening_is } from "./function_span_opening_is.mjs";
import { property_get } from "./property_get.mjs";
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
  ("Nothing is caught. A cut that cannot be made stops whoever asked for it with everything before it already committed, which is what should happen: a run the cut cannot take is a finding rather than a row to walk past.");
  let opening_is = await function_span_opening_is(f_name, address_from);
  if (opening_is) {
    let preamble = {
      about: "start",
      address_from,
      address_to,
      why: "the run starts on the first line of work in the body, which is where the function keeps the things that are about itself rather than about the work - how many arguments it was called with, and the prose saying what it is for. A cut from there carries all of that away with it, so the function left behind stands with no count of its own arguments and nothing said about it, and the piece cut out is explained as though it were the whole. Would you like to start the run one line lower?",
    };
    return preamble;
  }
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  if (taken) {
    let spoken_for = {
      about: "name",
      address_to,
      f_name_new,
      why: "a function already answers to the name chosen for this run, and whether the two are the same work is a question for somebody reading both. Would you like to choose another name, or to call the one that is already there?",
    };
    return spoken_for;
  }
  let outcome = await function_call_commit(function_span_cut_or_undo, [
    f_name,
    address_from,
    address_to,
    f_name_new,
  ]);
  return outcome;
}
