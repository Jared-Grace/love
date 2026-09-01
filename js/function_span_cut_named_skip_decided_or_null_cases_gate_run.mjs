import { arguments_assert } from "./arguments_assert.mjs";
import { function_span_cut_named_skip_decided_or_null_cases } from "./function_span_cut_named_skip_decided_or_null_cases.mjs";
import { property_get } from "./property_get.mjs";
import { function_span_cut_named_skip_decided_or_null } from "./function_span_cut_named_skip_decided_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function function_span_cut_named_skip_decided_or_null_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every run of lines the corpus writes down is turned down under its chosen name for the reason the corpus says, or taken where it says nothing stands in the way.");
  ("What is compared is the reason without its sentence - which of the two it is, and which words it names. A reason removed, turned around, or asked in the other order moves at least one of these cases between a reason and nothing at all, or between one reason and the other.");
  let cases = function_span_cut_named_skip_decided_or_null_cases();
  function answer(c) {
    let address_from = property_get(c, "address_from");
    let address_to = property_get(c, "address_to");
    let f_name_new = property_get(c, "f_name_new");
    let opening_is = property_get(c, "opening_is");
    let name_taken_is = property_get(c, "name_taken_is");
    let skip = function_span_cut_named_skip_decided_or_null(
      address_from,
      address_to,
      f_name_new,
      opening_is,
      name_taken_is,
    );
    let taken_is = null_is(skip);
    if (taken_is) {
      return null;
    }
    let about = property_get(skip, "about");
    let told_from = property_get(skip, "address_from");
    let told_to = property_get(skip, "address_to");
    let told_name = property_get(skip, "f_name_new");
    let told = {
      about,
      address_from: told_from,
      address_to: told_to,
      f_name_new: told_name,
    };
    return told;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "skip",
    "name",
    "span cut named skip decided",
  );
  return r;
}
