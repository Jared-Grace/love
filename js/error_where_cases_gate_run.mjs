import { property_get } from "./property_get.mjs";
import { error_where_cases } from "./error_where_cases.mjs";
import { error_where } from "./error_where.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function error_where_cases_gate_run() {
  "QA gate: each trail written down in the corpus is read the way that corpus says.";
  "The reader is what a failing run of the normalize pipeline leans on to name the";
  "file at fault, so a reader that quietly stopped finding anything would send every";
  "later reader hunting by hand again - which is the cost it was built to remove.";
  "One case must come back with a real line, which is what tells that apart from a";
  "trail that honestly names nowhere.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = error_where_cases();
  function answer(c) {
    let thrown = property_get(c, "thrown");
    let where = error_where(thrown);
    return where;
  }
  let r = cases_gate_run_generic(cases, answer, "where", "why", "error where");
  return r;
}
