import { property_js_parse } from "./property_js_parse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_key_getters_cases } from "./js_hash_key_getters_cases.mjs";
import { js_hash_key_getters_own } from "./js_hash_key_getters_own.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_hash_key_getters_own_cases_gate_run() {
  "QA gate: each written-down file yields exactly the field-name functions the corpus says the page reads out of its own address.";
  "The same eight files the wider reading is judged on, judged again against the second answer each one carries, because a narrowing is only worth having if what it drops is written down somewhere a change has to walk past.";
  "One case is the whole point of the pair: a file building a link for another tab names a field there, and that field is counted by the wider reading and not by this one. Were that case to answer alike both ways, the narrowing would have quietly stopped narrowing and every page that merely links somewhere would go back to being asked to answer for a word it never reads.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_hash_key_getters_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let getters = js_hash_key_getters_own(ast);
    return getters;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "own",
    "why",
    "hash key getters own",
  );
  return r;
}
