import { property_get } from "./property_get.mjs";
import { js_bundle_chunk_ids } from "./js_bundle_chunk_ids.mjs";
import { js_bundle_chunk_ids_cases } from "./js_bundle_chunk_ids_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_bundle_chunk_ids_cases_gate_run() {
  "QA gate: the extra scripts a built app sends for are still all being read back out of it, however the build chose to spell the sending.";
  "THIS ONE IS HELD BECAUSE IT FAILS BY ANSWERING TOO LITTLE, AND TOO LITTLE IS QUIET. Every reader standing on this one asks which pieces of an app are still wanted, and a piece that is not named in the answer is reported as one nothing wants - which is then removed from a folder people are being served out of. Nothing throws, nothing is red, and the app goes on working until somebody opens the part that was cut away.";
  "THE SPELLING OF THE SENDING IS THE WHOLE RISK, and it is not the app's choice - the shortener renames what the sending is called inside every piece, and writes a round number the shortest way it can. So this is held against both of those and against two readings that would be too wide.";
  "Throws so the dispatcher seam exits nonzero.";
  function answer(one_case) {
    let bundle_text = property_get(one_case, "bundle_text");
    let ids = js_bundle_chunk_ids(bundle_text);
    return ids;
  }
  let cases = js_bundle_chunk_ids_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "ids",
    "why",
    "extra scripts a built app sends for",
  );
  return r;
}
