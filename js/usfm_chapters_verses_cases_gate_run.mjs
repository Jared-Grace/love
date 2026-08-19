import { arguments_assert } from "./arguments_assert.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
import { usfm_chapters_verses_cases } from "./usfm_chapters_verses_cases.mjs";
export function usfm_chapters_verses_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: a book written in usfm comes to exactly the chapters and verses its corpus says it does.");
  ("This is the only reading between a bible published as usfm and a reader, and it has no second opinion to be checked against. The eBible side reads each chapter twice and refuses to show any chapter where the two readings disagree, so a mistake there ends in a chapter nobody sees. A mistake here ends in a verse somebody reads, believing it.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = usfm_chapters_verses_cases();
  function answer(c) {
    let usfm = property_get(c, "usfm");
    let chapters = usfm_chapters_verses(usfm);
    return chapters;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "chapters",
    "why",
    "usfm chapters verses",
  );
  return r;
}
