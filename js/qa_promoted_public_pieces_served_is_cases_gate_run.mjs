import { arguments_assert } from "./arguments_assert.mjs";
import { qa_promoted_public_pieces_served_is_cases } from "./qa_promoted_public_pieces_served_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { qa_promoted_public_pieces_served_is } from "./qa_promoted_public_pieces_served_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_promoted_public_pieces_served_is_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Checks every made-up folder against whether the pieces waiting in it are already being served.");
  let cases = qa_promoted_public_pieces_served_is_cases();
  function answer(one) {
    let app = property_get(one, "app");
    let disk = property_get(one, "disk");
    let live = property_get(one, "live");
    let served_is = qa_promoted_public_pieces_served_is(app, disk, live);
    return served_is;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "served_is",
    "why",
    "qa promoted public pieces served is",
  );
  return r;
}
