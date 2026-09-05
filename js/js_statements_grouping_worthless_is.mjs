import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_names_outside_none_is } from "./js_statements_names_outside_none_is.mjs";
import { js_statements_call_no_arguments_kept_all_is } from "./js_statements_call_no_arguments_kept_all_is.mjs";
import { or } from "./or.mjs";
import { js_statements_value_written_but_one_is } from "./js_statements_value_written_but_one_is.mjs";
import { js_statements_property_get_one_object_all_is } from "./js_statements_property_get_one_object_all_is.mjs";
import { js_statements_escapes_survive_not_is } from "./js_statements_escapes_survive_not_is.mjs";
export function js_statements_grouping_worthless_is(statements) {
  "Whether there would be nothing to act on if this run of statements turned up in two functions at once.";
  "Two runs are grouped by their shape, and a shape has the private names taken out of it. So the question is always the same one: with the names gone, is anything left that could be given a name of its own? Three times it is not. A run that reads nothing from outside itself is constants written out where they stand, and the names were the whole of what said which constant was which. A run that is nothing but constants fetched by name has already been shared, in the functions doing the fetching. A run that is nothing but one thing being taken apart could only be collapsed onto something that bundles those same pieces back up, for each caller to take apart again.";
  "The last two fail the same way, and it is worth saying out loud: collapsing them hands back a bundle, so the lines return and one more thing exists. That is why neither is a finding rather than a small finding.";
  "The fourth was found: a run that gives up part-way through, returning from the function it sits in. That one is not merely not worth a name - it cannot be given one at all, because the return would end the new function and the caller would go on to the next line. It was met three times in one afternoon, always as the same residue: a call to a helper already extracted, a check on what came back, and the taking apart of it.";
  "The fifth was found, and it is the near miss of the first: a run that is constants except for a single line. The first kind asks whether the whole run reads nothing from outside itself, so one line that does asks it back a no - and the ordinary opening of a walk is exactly that shape, one line asking a list how long it is above three that start an empty answer and two tallies. Measured 2026-09-05 it had put a walk over the bends of a drawn shape in a group with a walk cutting words into screens, which share nothing whatever, and it would have gone on doing so for every walk anybody writes.";
  arguments_assert(arguments, 1);
  let nameless = js_statements_names_outside_none_is(statements);
  let fetches_only = js_statements_call_no_arguments_kept_all_is(statements);
  let constants = or(nameless, fetches_only);
  let written = js_statements_value_written_but_one_is(statements);
  let constants_all = or(constants, written);
  let unpack_only = js_statements_property_get_one_object_all_is(statements);
  let nothing_to_name = or(constants_all, unpack_only);
  let escaping = js_statements_escapes_survive_not_is(statements);
  let worthless = or(nothing_to_name, escaping);
  return worthless;
}
