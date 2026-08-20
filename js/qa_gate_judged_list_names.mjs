import { js_call_named_first_argument_names } from "./js_call_named_first_argument_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function qa_gate_judged_list_names(ast) {
  "The names a gate hands over to be judged - the lists whose contents on a passing run are settled by something other than what the sweep found.";
  "They are worth knowing apart from every other name in the function because of what a count of one of them says. An emptiness check leaves its list empty on every green run by construction. A ratchet leaves its list at exactly what the record already held, which is a number fixed when somebody last wrote the record down. Either way the count is the same word whether the looking found nothing or the looking never happened, so a gate reporting it has told a reader nothing about itself.";
  "The two kinds were split for a while and the split was the hole. Only the emptiness checks were recognised, so a gate handing its offenders to a ratchet was read as counting something it had walked, and the two found that way were both blind in exactly the manner this exists to catch.";
  "The ratchets that were given a count are deliberately not here, and could not be: what they take first is the count, so the first name they are handed is a number the sweep really reached. Reading their offenders would mean reaching past it, and there would be nothing to gain - a gate that has been converted is the case that has already been fixed.";
  "Only a name is collected. A list built in the argument itself has nothing to be recognised by later, and a gate written that way is rare enough that guessing at it would cost more than it caught.";
  "The walk it is written out of asks one named function what names it was handed first, which is the whole of what a check like this is - so all that is left here is which functions to ask, and the reasoning above about why those.";
  arguments_assert(arguments, 1);
  let plain = fn_name("list_empty_is_assert");
  let recorded = fn_name("list_empty_is_assert_json");
  let ratchet = fn_name("baseline_names_gate_generic");
  let ratchet_advice = fn_name("baseline_names_gate_advice_generic");
  let ratchet_entries = fn_name("baseline_entries_gate_generic");
  let checks = [plain, recorded, ratchet, ratchet_advice, ratchet_entries];
  let names = [];
  for (let check of checks) {
    let found = js_call_named_first_argument_names(ast, check);
    list_add_multiple(names, found);
  }
  return names;
}
