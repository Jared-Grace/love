import { arguments_assert } from "./arguments_assert.mjs";
import { function_span_cut_skip_decided_or_null_cases } from "./function_span_cut_skip_decided_or_null_cases.mjs";
import { property_get } from "./property_get.mjs";
import { function_span_cut_skip_decided_or_null } from "./function_span_cut_skip_decided_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function function_span_cut_skip_decided_or_null_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every run of lines the corpus writes down is stepped over for the reason the corpus says, or taken where it says nothing stands in the way.");
  ("What is compared is the reason without its sentence - what it is about, which two words it names, and the name the run would have taken. The sentences are for a person to read and are meant to be improved, so a gate holding them would make every improvement a failure.");
  ("A reason that is taken away, or turned around, moves at least one case between a reason and nothing at all. That is the whole claim, and until the reading was split away from the lookups it stood on nothing could make it.");
  let cases = function_span_cut_skip_decided_or_null_cases();
  function answer(c) {
    let f_name = property_get(c, "f_name");
    let address_from = property_get(c, "address_from");
    let address_to = property_get(c, "address_to");
    let opening_is = property_get(c, "opening_is");
    let answered_to_is = property_get(c, "answered_to_is");
    let name_taken_is = property_get(c, "name_taken_is");
    let skip = function_span_cut_skip_decided_or_null(
      f_name,
      address_from,
      address_to,
      opening_is,
      answered_to_is,
      name_taken_is,
    );
    let taken_is = null_is(skip);
    if (taken_is) {
      return null;
    }
    let about = property_get(skip, "about");
    let told_from = property_get(skip, "address_from");
    let told_to = property_get(skip, "address_to");
    let f_name_new = property_get(skip, "f_name_new");
    let told = {
      about,
      address_from: told_from,
      address_to: told_to,
      f_name_new,
    };
    return told;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "skip",
    "name",
    "span cut skip decided",
  );
  return r;
}
