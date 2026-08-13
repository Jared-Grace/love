import { app_shared_bible_hash_field_reference } from "./app_shared_bible_hash_field_reference.mjs";
import { app_shared_bible_hash_field_reference_cases } from "./app_shared_bible_hash_field_reference_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_hash_field_reference_cases_gate_run() {
  "QA gate: every misspelled reference the corpus writes down is offered exactly the corrections it says.";
  "Nothing else can catch this. A correction that offers the wrong book, or offers nothing where it should offer something, is not an error and does not fail to build - the reader is simply left where they were, which is the whole thing this was built to stop.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = app_shared_bible_hash_field_reference_cases();
  function answer(c) {
    let books = property_get(c, "books");
    let reference = property_get(c, "reference");
    let field = app_shared_bible_hash_field_reference(books);
    let suggest = property_get(field, "suggestions");
    let offered = suggest(reference);
    return offered;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "suggestions",
    "why",
    "bible link reference corrections",
  );
  return r;
}
